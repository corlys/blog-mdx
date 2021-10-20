import { Text, useColorMode, VStack, Box, Flex } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import Link from "next/link";

import { PostType } from "types/post";

type BlogPostProps = {
  posts: PostType[];
};

const BlogPost = ({ posts }: BlogPostProps): JSX.Element => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Text fontSize="2xl" align="start" mt="4">
        Blog Posts
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
    </>
  );
};

export default BlogPost;
