import { Pagination, Text } from "@mantine/core";
import { useId } from "@mantine/hooks";
import type { NextPage } from "next";
import Skeleton from "../components/Skeleton/Skeleton";

import PostCard from "../components/PostCard/PostCard";
import { getPosts } from "../lib/backend/api";
import { useRef } from "react";

interface Props {
  posts: any;
}

const Home: NextPage<Props> = ({ posts }) => {
  const randomID = useId();

  //Return array of posts like this ["post1", "post2", "post3"]
  const searchResults = posts.map((post: any) => {
    return {
      value: post.title,
      href: post.slug,
      image: post.posts.naslovnaslika.sourceUrl,
      date: post.date,
      group: post.tags.nodes.map((tag: any) => tag.name),
    };
  });

  const ref = useRef<HTMLInputElement>();

  return (
    <Skeleton searchResults={searchResults}>
      <div className=" w-full p-6 md:w-4/6 m-auto">
        <Text align="left" size="xl">
          Latest posts
        </Text>

        {/* Posts collection */}
        {posts.length > 0 && (
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Map through posts */}
            {posts.map((post: any) => (
              <div key={`${randomID}-${post.id}`}>
                <PostCard
                  title={post.title}
                  imgSrc={post.posts.naslovnaslika.sourceUrl}
                  description={post.posts.opis}
                  tag={post.tags.nodes.map((tag: any) => tag.name)}
                  href={post.slug}
                />
              </div>
            ))}
          </div>
        )}
        {/* Pagination */}
        <Pagination
          total={10}
          style={{ marginTop: 26 }}
          align="center"
          position={"center"}
        />
      </div>
    </Skeleton>
  );
};

export default Home;

export async function getStaticProps() {
  const { posts } = (await getPosts(3)) || [];

  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  };
}
