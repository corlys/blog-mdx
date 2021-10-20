import {
  Box,
  Text,
  Grid,
  Image,
  Stack,
  useColorModeValue,
  Icon,
  Link,
} from "@chakra-ui/react";
import { SiNextdotjs } from "react-icons/si";

import { ProjectType } from "types/projects";

type ProjectSectionProps = {
  projects: ProjectType[];
};

const ProjectSection = ({ projects }: ProjectSectionProps) => {
  const overlayBgGradient = useColorModeValue(
    "linear(to-t, rgba(45, 55, 72, 0.6) 0%, rgba(203, 213, 224, 0.4) 80%, rgba(237, 242, 247, 0))",
    "linear(to-t, rgba(0, 0, 0, 0.5) 0%, rgba(237, 242, 247, 0))"
  );
  const backgroundColor = useColorModeValue("gray.100", "gray.700");
  return (
    <>
      <Text fontSize="2xl" align="start" mt="4">
        Projects
      </Text>
      <Grid
        gap={8}
        templateColumns={["repeat(1)", "repeat(1)", "repeat(2, 1fr)"]}
        marginY={8}
      >
        {projects.map((project) => {
          return (
            <Link
              href={`${project.url}`}
              isExternal
              _hover={{ textDecoration: "none" }}
            >
              <Box
                borderColor={backgroundColor}
                borderWidth={2}
                boxShadow="0px 0px 32px 2px rgba(38, 46, 51, 0.1);"
                borderRadius={20}
                cursor="pointer"
                alignItems="center"
                overflow="hidden"
                justifyContent="center"
                position="relative"
              >
                {project.imageUri && (
                  <Box height={[200, 250, 200]}>
                    <Image
                      height={[200, 250, 200]}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="50% 0"
                      src={project.imageUri}
                      alt={`${project.title}-thumbnail`}
                    />
                  </Box>
                )}

                <Stack
                  position="absolute"
                  justifyContent="flex-start"
                  // bottom="0"
                  top="0"
                  padding={6}
                  height="full"
                  spacing={4}
                  zIndex={20}
                  width="full"
                  bgGradient={overlayBgGradient}
                >
                  <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    {project.imageUri && (
                      // <Image src={<SiNextdotjs/>} width={32} height={32} alt={title} />
                      <Icon as={SiNextdotjs} w={4} height={4} />
                    )}
                    <Text
                      fontWeight="bold"
                      fontSize="lg"
                      fontFamily="Catamaran, sans-serif"
                      textShadow="md"
                      color="white"
                    >
                      {project.title}
                    </Text>
                  </Stack>
                </Stack>
                {/* <Stack
                  position="absolute"
                  justifyContent="flex-start"
                  top={0}
                  padding={6}
                  height="full"
                  spacing={4}
                  zIndex={21}
                  width="full"
                  bgGradient={overlayBgGradient}
                >
                  <Stack direction="row" alignItems="center">
                    {project.imageUri && (
                      // <Image src={<SiNextdotjs/>} width={32} height={32} alt={title} />
                      <Icon as={SiNextdotjs} w={4} height={4} />
                    )}
                    <Text
                      fontWeight="bold"
                      fontSize="lg"
                      fontFamily="Catamaran, sans-serif"
                      textShadow="md"
                      color="white"
                    >
                      {project.title}
                    </Text>
                  </Stack>
                </Stack> */}
              </Box>
            </Link>
          );
        })}
      </Grid>
    </>
  );
};

export default ProjectSection;
