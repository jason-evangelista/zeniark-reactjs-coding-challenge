import QuestionPage from "@components/QuestionPage/QuestionPage";
import { useFetchQuestion as fetchQuestion } from "@hooks/useFetchQuestion";
import { QuestionModel } from "@type/QuestionType";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";

type GsspReturnProps = {
  question: Pick<QuestionModel, "question" | "category">;
};

export const getServerSideProps: GetServerSideProps<GsspReturnProps> = async ({
  params,
  req,
}: GetServerSidePropsContext) => {
  const questionIndex = params?.question?.[0];
  const question = await fetchQuestion(Number(questionIndex));

  console.log(question);

  return {
    props: {
      question,
    },
  };
};

const Question: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ question }) => {
  return (
    <>
      <Head>
        <title>Question</title>
      </Head>
      <QuestionPage {...question} />
    </>
  );
};

export default Question;
