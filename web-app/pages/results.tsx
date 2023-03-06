import ResultPage from "@components/ResultPage/ResultPage";
import { NextPage } from "next";
import Head from "next/head";

const Result: NextPage = () => {
  return (
    <>
      <Head>
        <title>Final Results</title>
      </Head>
      <ResultPage />
    </>
  );
};

export default Result;
