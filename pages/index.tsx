import { Text } from "@mantine/core";
import Head from "next/head";

import type { NextPage } from "next";
import Skeleton from "../components/Skeleton/Skeleton";

import PostCard from "../components/PostCard/PostCard";
import { getPosts } from "../lib/backend/api";

interface Props {
  posts: any;
}

const Home: NextPage<Props> = ({ posts }) => {
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

  return (
    <Skeleton
      title={`DevClub - Homepage`}
      metaDescription="A blog about web development, programming, tips and tricks, and a whole lot more. Follow me on my Web Development journey, buckle up."
      metaTitle={`DevClub - Homepage`}
      metaShareDescription={`Check out this awesome blog on ${process.env.NEXT_PUBLIC_MAIN_DOMAIN}`}
      searchResults={searchResults}
    >
      <Head>
        <meta
          name="google-site-verification"
          content="bE84OZf2Fa2dI7FsPmIrulKdqrT2pbeRS4ISf8pBC8I"
        />
      </Head>
      <div className=" w-full p-6 md:w-4/6 m-auto">
        <Text align="left" size="xl">
          Latest posts
        </Text>

        {/* Posts collection */}
        {posts.length > 0 && (
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Map through posts */}
            {posts.map((post: any, index: number) => (
              <span key={post.id}>
                <PostCard
                  index={index}
                  title={post.title}
                  imgSrc={post.posts.naslovnaslika.sourceUrl}
                  description={post.posts.opis}
                  tag={post.tags.nodes.map((tag: any) => tag.name)}
                  href={post.slug}
                  alt={post.title}
                />
              </span>
            ))}
          </div>
        )}
        {/* Pagination */}
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
