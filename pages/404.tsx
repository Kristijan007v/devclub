import { Center, Container, Group, Text } from "@mantine/core";
import React from "react";

import Skeleton from "../components/Skeleton/Skeleton";

export default function Custom404() {
  return (
    <Skeleton title="404 - Page not found" searchResults={["Test"]}>
      <Container>
        <Center>
          <Group>
            <Text size="xl" weight="bold" color="black">
              404
            </Text>
            <Text size="xl" weight="bold" color="black">
              Page not found
            </Text>
          </Group>
        </Center>
      </Container>
    </Skeleton>
  );
}
