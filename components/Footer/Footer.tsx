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
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useForm } from "@mantine/form";
import { Check, X } from "tabler-icons-react";

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
        message: "Something went wrong! 🤥",
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

  return (
    <footer className="mt-20 p-5">
      <div className="w-full mb-6 md:w-5/6 lg:w-4/6 xl:w-3/6 2xl:w-2/6 m-auto">
        <Card shadow="sm" p="lg">
          <form onSubmit={form.onSubmit((values) => subscribe())}>
            <InputWrapper
              id="input-demo"
              label="Subscribe to the newsletter"
              description="Get emails from me about web development, tech, and early access to new articles."
            >
              <Group position="apart" grow>
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
      </div>
      <Text size="sm" align="center">
        Powered by{" "}
        <Anchor href="https://mantine.dev/" target="_blank">
          Mantine DEV
        </Anchor>
      </Text>
    </footer>
  );
}
