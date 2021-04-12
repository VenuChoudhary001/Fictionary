import { CssBaseline, makeStyles, ThemeProvider } from "@material-ui/core";
import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import ParticlesBackground from "./particles/particles-background";
import Head from "next/head";
import Theme from "./theme/theme";
function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossorigin="anonymous"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&family=New+Tegomin&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <CssBaseline />
      <ThemeProvider theme={Theme}>
        <ParticlesBackground />

        <Navbar />

        {children}
        <Footer />
      </ThemeProvider>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"
      ></script>
    </>
  );
}

export default Layout;
