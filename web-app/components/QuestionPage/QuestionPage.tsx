import useValidateQuestion from "@components/HomePage/service/useValidateQuestion";
import useQuestionResult from "@hooks/useQuestionResults";
import { useRandomNumber as randomNumber } from "@hooks/useRandomNumber";
import { IconCheck, IconX } from "@tabler/icons";
import { QuestionModel } from "@type/QuestionType";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, memo, useCallback, useEffect, useState } from "react";

type Props = Pick<QuestionModel, "question" | "category">;

const QuestionPage: FC<Props> = ({ category, question }) => {
  const { setQuestionResults, results } = useQuestionResult();
  const [answerResponse, setAnswerResponse] = useState("");
  const [recordQuestionIndex, setRecordQuestion] = useState<number[]>([]);
  const firstGenerate = randomNumber();
  const router = useRouter();
  const questionIndex = router.query.question?.[0];
  const questionCount = results.length;

  const { data, refetch, isLoading, remove, dataUpdatedAt } =
    useValidateQuestion({
      answerResponse,
      questionIndex: Number(questionIndex),
    });

  const handleAnswerTrue = () => {
    setAnswerResponse("True");
  };

  const handleAnswerFalse = () => {
    setAnswerResponse("False");
  };

  const recallForNewRandom = useCallback((): void => {
    router.replace({
      query: { ...router.query, question: firstGenerate },
    });
  }, [firstGenerate, router]);

  useEffect(() => {
    if (!answerResponse) return;
    refetch();
  }, [answerResponse, refetch]);

  useEffect(() => {
    if (isLoading) return;
    recallForNewRandom();
    setAnswerResponse("");
    remove();
  }, [isLoading, recallForNewRandom, remove]);

  useEffect(() => {
    if (!dataUpdatedAt) return;
    setQuestionResults(data);
  }, [data, dataUpdatedAt, setQuestionResults]);

  useEffect(() => {
    if (results.length >= 10) {
      router.replace("/results");
    }
  }, [results, results.length, router]);

  return (
    <section
      aria-label="Question wrapper"
      className="flex flex-col justify-between flex-wrap min-h-[30rem]"
    >
      <div className="flex justify-between items-center border-b pb-4 w-full">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Zeniark Logo"
            layout="intrinsic"
            width={50}
            height={50}
          />
          <h1 className="font-bold text-base">Category:&nbsp;{category}</h1>
        </div>
        <div aria-label="Question count">{questionCount} of 10</div>
      </div>
      <div aria-label="Question">
        <h1
          dangerouslySetInnerHTML={{ __html: question }}
          className="text-center text-5xl"
        ></h1>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4 text-white text-xl border-t pt-4 w-full">
        <button
          onClick={handleAnswerTrue}
          className="bg-green-500 py-2 px-4 rounded-md"
        >
          <span className="inline-flex align-middle">
            <IconCheck />
          </span>
          &nbsp;True
        </button>
        <button
          onClick={handleAnswerFalse}
          className="bg-red-500 py-2 px-4 rounded-md"
        >
          <span className="inline-flex align-middle">
            <IconX />
          </span>
          &nbsp;False
        </button>
      </div>
    </section>
  );
};

export default memo(QuestionPage);
