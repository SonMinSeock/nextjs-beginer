import "../styles/globals.css";
import Layout from "../components/Layout";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const mode = window.localStorage.getItem("theme");

    console.log(mode);
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
