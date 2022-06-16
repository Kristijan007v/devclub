import React from "react";
import {
  Card,
  InputWrapper,
  Input,
  Button,
  Group,
  Text,
  Anchor,
} from "@mantine/core";

export default function Footer() {
  return (
    <footer className="mt-20 mb-10 p-5">
      <div className="w-full mb-6 md:w-5/6 lg:w-4/6 xl:w-3/6 2xl:w-2/6 m-auto">
        <Card shadow="sm" p="lg">
          <InputWrapper
            id="input-demo"
            label="Subscribe to the newsletter"
            description="Get emails from me about web development, tech, and early access to new articles."
          >
            <Group position="apart" grow>
              <Input id="input-demo" placeholder="Your email" />
              <Button variant={"light"} color={"blue"}>
                Subscribe
              </Button>
            </Group>
          </InputWrapper>
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
