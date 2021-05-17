import Layout from "../components/layout";
import "../styles/globals.css";
import { GlobalContextProvider } from "../components/context/context";
function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContextProvider>
  );
}

export default MyApp;
