import { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

/**
For some reason i need to set the home page as not ssr because I have to generate random number in every reload of the page.
Because the server and client doesn't match the same URL i.e
Server/Ssr = /question/12
Client = /question/25
*/
const _HomePage = dynamic(() => import("@components/HomePage/HomePage"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Head start</title>
        <meta name="description" content="Welcome to Trivia Challenge" />
      </Head>
      <_HomePage />
    </>
  );
};

export default Home;
