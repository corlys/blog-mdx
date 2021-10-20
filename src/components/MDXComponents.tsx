import {
  Box,
  Alert,
  Code,
  Heading,
  Link,
  Text,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
// import { jsx } from "@emotion/react";
import NextLink from "next/link";

type HeadingProps = {
  size: string;
  fontWeight: string;
  id: string;
  children: string[];
};

const CustomLink = (props: HTMLAnchorElement) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "blue.500",
    dark: "blue.500",
  };

  const { href } = props;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]}>{props.children}</Link>
      </NextLink>
    );
  }

  return <Link color={color[colorMode]} isExternal />;
};

const Quote = () => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "blue.50",
    dark: "blue.900",
  };

  return (
    <Alert
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        "> *:first-of-type": {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
    />
  );
};

const DocsHeading = ({ size, fontWeight, id, children }: HeadingProps) => {
  return (
    <Heading
      css={{
        scrollMarginTop: "100px",
        scrollSnapMargin: "100px", // Safari
        "&[id]": {
          pointerEvents: "none",
        },
        "&[id]:before": {
          display: "block",
          height: " 6rem",
          marginTop: "-6rem",
          visibility: "hidden",
          content: `""`,
        },
        "&[id]:hover a": { opacity: 1 },
      }}
      mb="1em"
      mt="2em"
      size={size}
      fontWeight={fontWeight}
    >
      <Box pointerEvents="auto">
        {children[1]}
        {id && (
          <Box
            aria-label="anchor"
            as="a"
            color="blue.500"
            fontWeight="normal"
            outline="none"
            _focus={{
              opacity: 1,
              boxShadow: "outline",
            }}
            opacity="0"
            ml="0.375rem"
            href={`#${id}`}
          >
            #
          </Box>
        )}
      </Box>
    </Heading>
  );
};

const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const MDXComponents = {
  h1: ({ children }: { children: string[] }) => (
    <Heading as="h1" size="xl" my={4}>
      {children[1]}
    </Heading>
  ),
  h2: ({ children }: { children: string[] }) => {
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      /* @ts-ignore */
      <DocsHeading as="h2" size="lg" fontWeight="bold">
        {children}
      </DocsHeading>
    );
  },
  h3: ({ children }: { children: string[] }) => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /* @ts-ignore */
    <DocsHeading as="h3" size="md" fontWeight="bold">
      {children}
    </DocsHeading>
  ),
  h4: ({ children }: { children: string[] }) => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /* @ts-ignore */
    <DocsHeading as="h4" size="sm" fontWeight="bold">
      {children}
    </DocsHeading>
  ),
  h5: ({ children }: { children: string[] }) => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /* @ts-ignore */
    <DocsHeading as="h5" size="sm" fontWeight="bold">
      {children}
    </DocsHeading>
  ),
  h6: ({ children }: { children: string[] }) => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /* @ts-ignore */
    <DocsHeading as="h6" size="xs" fontWeight="bold">
      {children}
    </DocsHeading>
  ),
  inlineCode: ({ children }: { children: string }) => {
    return (
      <Code colorScheme="yellow" fontSize="0.84em">
        {children}
      </Code>
    );
  },
  br: () => <Box height="24px" />,
  hr: Hr,
  a: (props: HTMLAnchorElement) => <CustomLink {...props} />,
  p: ({ children }: { children: string }) => (
    <Text as="p" mt={0} lineHeight="tall">
      {children}
    </Text>
  ),
  ul: ({ children }: { children: string }) => (
    <Box as="ul" pt={2} pl={4} ml={2}>
      {children}
    </Box>
  ),
  ol: ({ children }: { children: string }) => (
    <Box as="ol" pt={2} pl={4} ml={2}>
      {children}
    </Box>
  ),
  li: ({ children }: { children: string }) => (
    <Box as="li" pb={1}>
      {children}
    </Box>
  ),
  blockquote: Quote,
};

export { CustomLink };
export default MDXComponents;
