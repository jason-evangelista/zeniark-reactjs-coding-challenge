import useQuestionResult from "@hooks/useQuestionResults";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import RevealResult from "./RevealResult";

const ResultPage: FC = () => {
  const router = useRouter();
  const { getQuestionResults, resetQuestionResult } = useQuestionResult();
  const score = getQuestionResults().filter((item) =>
    Boolean(item.isAttemptCorrect)
  ).length;

  const handlePlayAgain = () => {
    resetQuestionResult();
    router.replace("/");
  };

  useEffect(() => {
    if (!getQuestionResults().length) router.replace("/");
    return;
  }, [getQuestionResults, router]);

  return (
    <div aria-label="Final results">
      <div className="flex items-center justify-between w-full">
        <div className="flex-1">
          <Image
            src="/logo.png"
            alt="Zeniark Logo"
            layout="intrinsic"
            width={50}
            height={50}
          />
        </div>
        <h1 className="self-center font-semibold flex-1 text-2xl text-center">
          Final Results
        </h1>
        <div className="invisible flex-1"></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2  border-y py-4 w-full">
        <h1 aria-label="score" className="font-bold text-4xl">
          {score}/10
        </h1>
        <p className="font-semibold text-lg">Your Score</p>
      </div>
      <div className="mt-4">
        {getQuestionResults().map((item, index) => (
          <RevealResult
            key={index}
            correctAnswer={item.correctAnswer}
            index={index + 1}
            isAttempCorrect={item.isAttemptCorrect}
            question={item.question}
            answerResponse={item.answerResponse}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={handlePlayAgain}
          className="underline underline-offset-8 text-3xl font-bold text-primary mt-10 uppercase"
        >
          Play again
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
