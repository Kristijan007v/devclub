import { Pagination, Text } from "@mantine/core";
import { useId } from "@mantine/hooks";
import type { NextPage } from "next";
import Skeleton from "../components/Skeleton/Skeleton";

import PostCard from "../components/PostCard/PostCard";
import { getPosts } from "../lib/backend/api";

interface Props {
  posts: any;
}

const Home: NextPage<Props> = ({ posts }) => {
  const randomID = useId();

  //Return array of posts like this ["post1", "post2", "post3"]
  const searchResults = posts.map((post: any) => {
    return {
      value: post.title,
      group: post.tags.nodes.map((tag: any) => tag.name),
    };
  });

  return (
    <Skeleton>
      <div className=" w-full p-6 md:w-4/6 m-auto">
        <Text align="left" size="xl">
          Latest posts
        </Text>

        {/* Posts collection */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
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

export async function getServerSideProps() {
  const { posts } = (await getPosts(3)) || [];

  return {
    props: {
      posts,
    },
  };
}
