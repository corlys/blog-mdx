/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "blog-mdx",
  titleTemplate: "%s | blog-mdx",
  defaultTitle: "blog-mdx",
  description: "Next.js + chakra-ui + TypeScript template",
  canonical: "https://nextarter-chakra.sznm.dev",
  openGraph: {
    url: "https://nextarter-chakra.sznm.dev",
    title: "blog-mdx",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "nextarter-chakra.sznm.dev og-image",
      },
    ],
    site_name: "blog-mdx",
  },
  twitter: {
    handle: "@liubei98",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
