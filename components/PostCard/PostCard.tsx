import {
  Anchor,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import React from "react";

interface Props {
  title: string;
  imgSrc: string;
  description: string;
  tag: string;
  href: string;
}

export default function PostCard({
  title,
  imgSrc,
  description,
  tag,
  href,
}: Props) {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Card shadow="sm" p="lg">
      <Card.Section>
        <Image src={`${imgSrc}`} height={160} alt="Norway" />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Anchor href={`/posts/${href}`}>
          <Text weight={500}>{title}</Text>
        </Anchor>

        <Badge color="pink" variant="light">
          {tag}
        </Badge>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        {description}
      </Text>

      <Button
        component={"a"}
        href={`/posts/${href}`}
        variant="light"
        color="blue"
        fullWidth
        style={{ marginTop: 14 }}
      >
        Read article
      </Button>
    </Card>
  );
}
