import { Box, Text, Stack, Divider } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import BlogPost from "../components/BlogPost";
import ProjectSection from "../components/ProjectSection";
import { getAllPosts } from "../lib/api";
import { PostType } from "../types/post";
import { ProjectType } from "types/projects";

type IndexProps = {
  projects: ProjectType[];
  posts: PostType[];
};

const Home = ({ posts, projects }: IndexProps): JSX.Element => {
  return (
    <Box mb={8} w="full">
      <Stack direction="row" h="100px" w="50%" p={4} mt="24" mb="24">
        <Divider orientation="vertical" />
        <Stack direction="column">
          <Text fontSize="3xl">Hi There, Im Corlys 👋</Text>
          <Text fontSize="medium">Blockchain & Frontend Developer</Text>
        </Stack>
      </Stack>
      <ProjectSection projects={projects} />
      <BlogPost posts={posts} />
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = [
    {
      title: "scaffold-eth",
      description:
        "A simple decentralized app for staking your eth to a certain address after some threshold requirements",
      imageUri: "scaffold-eth.png",
      url: "https://scaffold-eth-staking-app.vercel.app",
    },
    {
      title: "adhan-app",
      description: "Simple app shooting api for prayer times",
      imageUri: "adhan-app.png",
      url: "https://adhan-nextjs-typescript.vercel.app/",
    },
  ];
  const posts = getAllPosts(["date", "description", "slug", "title"]);
  return {
    props: { posts, projects },
  };
};

export default Home;
