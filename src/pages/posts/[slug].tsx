import { Box, Text } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

import { PostType } from "../../types/post";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import MDXComponents from "components/MDXComponents";

const components = {
  Head,
  Image,
  Link,
  ...MDXComponents,
};

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

const PostDetail = ({ source, frontMatter }: PostPageProps): JSX.Element => {
  return (
    <Box>
      <Text fontSize="3xl" align="center">
        {frontMatter.title}
      </Text>
      <Text mb="4" align="start" fontSize="medium">
        {frontMatter.date
          ? format(parseISO(frontMatter.date), "MMMM dd, yyyy")
          : ""}
      </Text>
      <MDXRemote {...source} components={components} />
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = params
    ? path.join(POSTS_PATH, `${params.slug}.mdx`)
    : "";
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require("remark-code-titles")],
      rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((p) => p.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostDetail;
