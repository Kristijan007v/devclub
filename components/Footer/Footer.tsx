import React from "react";
import {
  Card,
  InputWrapper,
  Input,
  Button,
  Group,
  Text,
  Anchor,
  Notification,
  TextInput,
  Box,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useForm } from "@mantine/form";
import {
  Check,
  X,
  ArrowBarToDown,
  CellSignal5,
  Wifi0,
} from "tabler-icons-react";
import { useNetwork } from "@mantine/hooks";

export default function Footer() {
  const [submit, setSubmit] = React.useState(false);

  //Form validation
  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email address",
    },
  });

  const subscribe = async () => {
    setSubmit(true);
    const email = form.values.email;
    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      showNotification({
        title: "Error",
        message: "Something went wrong! 😳",
        color: "red",
        icon: <X />,
      });
      setSubmit(false);
      return;
    }

    // 5. Clear the input value and show a success message.
    showNotification({
      title: "Success",
      message: "You are now part of the DevClub! 🍾🎉",
      color: "teal",
      icon: <Check />,
    });
    setSubmit(false);
  };

  //Get network status
  const networkStatus = useNetwork();

  return (
    <footer className="p-6">
      <div className="w-full mb-6 md:w-4/6 lg:w-3/6 xl:w-2/6 m-auto">
        <Card shadow="sm" p="lg">
          <form onSubmit={form.onSubmit(() => subscribe())}>
            <InputWrapper
              id="input-demo"
              size="md"
              label="Subscribe to the newsletter"
              description="Get emails from me about web development, tech, and early access to new articles."
            >
              <Group position="apart" grow style={{ marginTop: 12 }}>
                <TextInput
                  required
                  placeholder="your@email.com"
                  {...form.getInputProps("email")}
                  disabled={submit}
                />
                <Button
                  variant={"filled"}
                  type="submit"
                  color={"blue"}
                  size="sm"
                  radius={"sm"}
                  disabled={submit}
                >
                  {submit ? "Subscribing..." : "Subscribe"}
                </Button>
              </Group>
            </InputWrapper>
          </form>
        </Card>
        <Box
          style={{ marginTop: "1rem" }}
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            textAlign: "center",
            padding: theme.spacing.sm,
            borderRadius: theme.radius.md,
            cursor: "pointer",

            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[5]
                  : theme.colors.gray[1],
            },
          })}
        >
          {/* <Text size="md" align="center">
          NETWORK INFO
        </Text> */}
          <Group position="apart">
            <Text size="sm" color={networkStatus.online ? "teal" : "red"}>
              {networkStatus.online ? "Online" : "Offline"}
            </Text>
            <Text size="sm" align="center">
              <Group>
                <ArrowBarToDown /> <span>{networkStatus.downlink} Mbps</span>
              </Group>
            </Text>
            <Text size="sm" align="center">
              <Group>
                <CellSignal5 />
                <span className="uppercase">{networkStatus.effectiveType}</span>
              </Group>
            </Text>
          </Group>
        </Box>
      </div>
      <Text size="sm" align="center" style={{ marginTop: 14 }}>
        Powered by{" "}
        <Anchor href="https://mantine.dev/" target="_blank">
          Mantine DEV
        </Anchor>
      </Text>
    </footer>
  );
}
