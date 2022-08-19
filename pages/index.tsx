import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";
import Separator from "../components/main/components/separator";

const Home: NextPage = () => {

  return (
    <div className="w-full h-screen flex flex-col items-center py-8 px-4 max-w-5xl mx-auto">
      <Head>
        <title>Aldo Raduenz Junior - Frontend developer</title>
        <meta
          name="description"
          content="Front-end developer, HTML/CSS/Javascript, React, Next.js Node.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Separator />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
