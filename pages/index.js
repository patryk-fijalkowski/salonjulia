import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {Array.from({ length: 40 }, () => Math.floor(Math.random() * 40)).map(
          (el) => (
            <h1 key={el}>This is title</h1>
          )
        )}
      </Layout>
    </>
  );
}
