import { CssBaseline, makeStyles, ThemeProvider } from "@material-ui/core";
import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import GlobalContext, { GlobalContextProvider } from "./context/context";
import Head from "next/head";
import Theme from "./theme/theme";
import Rules from "./rules";
import { useRouter } from "next/router";
function Layout({ children }) {
  const getContext = React.useContext(GlobalContext);
  const { open } = getContext;
  const route = useRouter();
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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;500&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio:wght@100&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <CssBaseline />
      <div className="my-video">
        <video
          autoPlay
          loop
          muted
          style={{ opacity: `${route.pathname === "/login" ? "0.75" : "1"}` }}
        >
          <source
            // src="/main.webm"
            // src="/Face - 678.mp4"
            // src="/Squares - 1200.mp4"
            src="/Space - 5200.mp4"
            // src="/Animation - 7529.mp4"
            type="video/webm"
          />
        </video>
      </div>
      <ThemeProvider theme={Theme}>
        <Navbar />
        {open ? <Rules /> : ""}

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
