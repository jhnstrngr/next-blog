import React from "react";
import App from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../css/tailwind.css";
import { ThemeProvider } from "emotion-theming";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";
import theme from "../theme/theme.js";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="flex flex-col min-h-screen">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
