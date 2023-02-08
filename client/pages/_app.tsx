/* eslint-disable @next/next/no-page-custom-font */
import "@/styles/globals.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#34a3ef",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
