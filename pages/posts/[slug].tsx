import React from "react";
import { useRouter } from "next/router";
import { Container, Group, Text } from "@mantine/core";
import Image from "next/image";
import { CalendarEvent } from "tabler-icons-react";
import SocialShare from "../../components/SocialShare/SocialShare";

interface Props {
  post: any;
}

export default function Post({ post }: Props) {
  const router = useRouter();
  const { slug } = router.query;

  const MAIN_DOMAIN = process.env.NEXT_PUBLIC_MAIN_DOMAIN;
  return (
    <div>
      <Container style={{ marginTop: 24 }}>
        <div className="relative h-64 w-full rounded-xl">
          <Image
            src={`/my_picture.jpg`}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={`../my-picture.jpg`}
            className="rounded-xl"
            alt={"test"}
          />
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/30 rounded-xl">
            <div className="absolute bottom-0 left-0 p-4">
              <h1 className="text-white text-xl">{slug}</h1>
            </div>
            <div className="p-4">
              <Group position="apart">
                <div className="flex items-center space-x-2">
                  <CalendarEvent size={16} color={"white"} />
                  <Text size="sm" weight={"normal"} color={"white"}>
                    11.7.2022
                  </Text>
                </div>
                <Text size="sm" weight={"normal"} color={"white"}>
                  Author: Kristijan
                </Text>
              </Group>
            </div>
          </div>
        </div>

        {/* Content */}
        <Text style={{ marginTop: 20 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>

        <div className="mt-14">
          <SocialShare
            url={`https://${MAIN_DOMAIN}/posts/${slug}`}
            text="Share this post"
          />
        </div>
        {/* <Image src="../my_picture.jpg" height={160} alt="Norway" /> */}
      </Container>
    </div>
  );
}
