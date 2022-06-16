import type { NextPage } from "next";
import { useState } from "react";
import { Autocomplete } from "@mantine/core";
import {
  Kbd,
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import Navigation from "../components/Navigation/Navigation";

const Home: NextPage = () => {
  const [value, onChange] = useState("rgba(47, 119, 150, 0.7)");
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <>
      <div className=" w-full p-6 md:w-4/6 m-auto ">
        <Text align="left" size="xl">
          Latest posts
        </Text>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <Card shadow="sm" p="lg">
            <Card.Section>
              <Image src="./my_picture.jpg" height={160} alt="Norway" />
            </Card.Section>

            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Book classic tour now
            </Button>
          </Card>
          <Card shadow="sm" p="lg">
            <Card.Section>
              <Image src="./my_picture.jpg" height={160} alt="Norway" />
            </Card.Section>

            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Book classic tour now
            </Button>
          </Card>
          <Card shadow="sm" p="lg">
            <Card.Section>
              <Image src="./my_picture.jpg" height={160} alt="Norway" />
            </Card.Section>

            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Book classic tour now
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
