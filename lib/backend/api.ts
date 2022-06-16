import client from "./client";
import { gql } from "@apollo/client";

export async function getPosts(perPage: number, page?: number) {
  const { data } = await client.query({
    query: gql`
    query Posts {
        posts(first: ${perPage}) {
          nodes {
            id
            date
            slug
            title
            author {
              node {
                firstName
                avatar {
                  url
                }
              }
            }
            tags {
              nodes {
                name
              }
            }
            posts {
              opis
              naslovnaslika{
                sourceUrl
                altText
              }
              content
            }
          }
        }
      }
    `,
  });
  return {
    posts: data?.posts.nodes,
  };
}

export async function getPostBySlug(slug: string) {
  const data = await client.query({
    query: gql`
    query Post {
        post(id: "${slug}", idType: SLUG) {
          id
          title
          date
          slug
          author {
            node {
              firstName
              avatar {
                url
              }
            }
          }
          posts {
            opis
            naslovnaslika{
              sourceUrl
              altText
            }
            content
          }
        }
      }
    `,
  });
  return {
    data,
  };
}

export async function getAllPostsWithSlug() {
  const { data } = await client.query({
    query: gql`
      query PostBySlug {
        posts {
          nodes {
            slug
          }
        }
      }
    `,
  });
  return {
    posts: data?.posts.nodes,
  };
}

export async function getPostByCategory(categoryName: string) {
  const { data } = await client.query({
    query: gql`
    query Posts {
        posts(where: {categoryName: "${categoryName}"}) {
          nodes {
            id
            content
            date
            slug
            title
            author {
              node {
                firstName
                avatar {
                  url
                }
              }
            }
            tags {
              nodes {
                name
              }
            }
            posts {
              opis
              naslovnaslika{
                sourceUrl
                altText
              }
              content
            }
          }
        }
      }
    `,
  });
  return {
    featuredPost: data?.posts.nodes,
  };
}
