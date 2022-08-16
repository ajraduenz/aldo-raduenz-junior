import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aldo Raduenz Junior - Frontend developer</title>
        <meta
          name="description"
          content="Front-end developer, HTML/CSS/Javascript, React, Next.js Node.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
