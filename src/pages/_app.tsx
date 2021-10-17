/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider, Global, css } from "@emotion/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import { ReactNode } from "react";
import "@fontsource/lexend/latin.css";

import defaultSEOConfig from "../../next-seo.config";
import Layout from "components/layout";
import createEmotionCache from "styles/createEmotionCache";
import customTheme from "styles/customTheme";
import "styles/globals.css";
import { prismDarkTheme, prismLightTheme } from "styles/prism";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const GlobalStyle = ({ children }: { children: ReactNode }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme}
        `}
      />
      {children}
    </>
  );
};

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={customTheme}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
        </Head>
        <DefaultSeo {...defaultSEOConfig} />
        <GlobalStyle>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GlobalStyle>
      </ChakraProvider>
    </CacheProvider>
  );
};

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache,
};

export default MyApp;
