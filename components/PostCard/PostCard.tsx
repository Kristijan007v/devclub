import {
  Anchor,
  Badge,
  Button,
  Card,
  Group,
  Text,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";
import React from "react";

interface Props {
  index: number;
  title: string;
  imgSrc: string;
  description: string;
  tag: string;
  href: string;
  alt: string;
}

export default function PostCard({
  index,
  title,
  imgSrc,
  description,
  tag,
  href,
  alt,
}: Props) {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Card shadow="sm" p="lg">
      <Card.Section>
        <div className="relative h-48 w-full rounded-xl">
          <Image
            src={`${imgSrc}`}
            layout="fill"
            objectFit="cover"
            className="rounded-tr-xl rounded-tl-xl"
            alt={alt}
            //If index is 0 set priority to true else false and use blurDataURL and placeholder properties
            priority={index === 0 ? true : false}
            blurDataURL={index === 0 ? "" : `${imgSrc}`}
            placeholder={index === 0 ? "empty" : "blur"}
          />
        </div>
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
