import { Box, Text, VStack, Flex, useColorMode } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import { GetStaticProps } from "next";
import Link from "next/link";

import { getAllPosts } from "../lib/api";
import { PostType } from "../types/post";

type IndexProps = {
  posts: PostType[];
};

const Home = ({ posts }: IndexProps): JSX.Element => {
  const { colorMode } = useColorMode();

  return (
    <Box mb={8} w="full">
      <Text fontSize="3xl" align="center">
        I Welcome Thine Soul to my Blog
      </Text>
      <VStack mt="8" spacing="4" align="flex-start">
        {posts.map((post) => (
          <Box
            key={post.slug}
            borderRadius="md"
            bg={colorMode === "light" ? "teal.200" : "teal.500"}
            w="full"
          >
            <Flex direction="column" padding="4">
              <Text fontSize="small">
                {post.date ? format(parseISO(post.date), "MMMM dd, yyyy") : ""}
              </Text>
              <Text
                fontSize="4xl"
                _hover={{
                  color: `${colorMode === "light" ? "teal.500" : "teal.200"}`,
                }}
              >
                <Link as={`/posts/${post.slug}`} href="/posts/[slug]" passHref>
                  <a>{post.title}</a>
                </Link>
              </Text>
              <Text fontSize="medium" isTruncated>
                {post.description}
              </Text>
              <Text
                fontSize="medium"
                _hover={{
                  color: `${colorMode === "light" ? "teal.500" : "teal.200"}`,
                }}
              >
                <Link as={`/posts/${post.slug}`} href="/posts/[slug]" passHref>
                  Read More
                </Link>
              </Text>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["date", "description", "slug", "title"]);
  return {
    props: { posts },
  };
};

export default Home;
