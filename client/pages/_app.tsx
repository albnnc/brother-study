import "@/styles/globals.css";
import { Global } from "@emotion/react";
import Head from "next/head";
import { ConfigProvider, theme } from "antd";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global
        styles={{
          html: {
            fontFamily: "Roboto, sans-serif",
          },
          "html, body, body > div": {
            minHeight: "100vh",
          },
        }}
      />
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
