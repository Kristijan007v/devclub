import React from "react";
import { useRouter } from "next/router";
import { Container, Divider, Group, Text } from "@mantine/core";
import ErrorPage from "next/error";
import Image from "next/image";
import { CalendarEvent } from "tabler-icons-react";
import SocialShare from "../../components/SocialShare/SocialShare";
import { getAllPostsWithSlug, getPostBySlug } from "../../lib/backend/api";
import Skeleton from "../../components/Skeleton/Skeleton";
import formatDate from "../../lib/backend/utilities/formatDate";

interface Props {
  post: any;
}

export default function Post({ post }: Props) {
  const router = useRouter();
  const { slug } = router.query;

  const MAIN_DOMAIN = process.env.NEXT_PUBLIC_MAIN_DOMAIN;

  function createMarkup(content: any) {
    return { __html: `${content}` };
  }

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Skeleton
      title={`DevClub - ${post?.title}`}
      searchResults={["test"]}
      metaDescription={`${post?.posts.opis}`}
      metaTitle={`${post?.title} - by ${post?.author.node.firstName}`}
      metaShareDescription={`Read this article on ${MAIN_DOMAIN}`}
      metaImageURL={`${post?.posts.naslovnaslika.sourceUrl}`}
    >
      {router.isFallback ? (
        <p className="p-6 text-center">Loading post…</p>
      ) : (
        <Container style={{ marginTop: 24 }}>
          <div className="relative h-64 w-full rounded-xl">
            <Image
              src={`${post.posts.naslovnaslika.sourceUrl}`}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              alt={post.title}
              priority
            />
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/30 rounded-xl">
              <div className="absolute bottom-0 left-0 p-4">
                <h1 className="text-white text-xl">{post?.title}</h1>
              </div>
              <div className="p-4">
                <Group position="apart">
                  <div className="flex items-center space-x-2">
                    <CalendarEvent size={16} color={"white"} />
                    <Text size="sm" weight={"normal"} color={"white"}>
                      {formatDate(post.date)}
                    </Text>
                  </div>
                  <Text size="sm" weight={"normal"} color={"white"}>
                    Author: {post.author.node.firstName}
                  </Text>
                </Group>
              </div>
            </div>
          </div>

          {/* Content */}
          <Text
            style={{ marginTop: 20 }}
            dangerouslySetInnerHTML={createMarkup(`${post.posts.content}`)}
          />

          <div className="mt-14 mr-2 ml-2">
            <Divider my="sm" variant="dashed" />
            <SocialShare
              url={`https://${MAIN_DOMAIN}/posts/${slug}`}
              text="Share this post"
            />
          </div>
        </Container>
      )}
    </Skeleton>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostsWithSlug();
  return {
    paths: paths.posts.map((path: any) => ({
      params: {
        slug: path.slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const { data } = (await getPostBySlug(params.slug)) || {};

  return {
    props: {
      post: data.data.post,
    },
  };
}
