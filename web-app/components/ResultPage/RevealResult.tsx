import { IconCheck, IconX } from "@tabler/icons";
import { FC } from "react";

type Props = {
  question: string;
  correctAnswer: string;
  answerResponse: string;
  index: number;
  isAttempCorrect: boolean;
};

const RevealResult: FC<Props> = ({
  correctAnswer,
  question,
  answerResponse,
  index,
  isAttempCorrect,
}) => {
  const isTrue = correctAnswer.match(/true/i);
  const isAnswerResponseTrue = answerResponse.match(/true/i);

  return (
    <div className="flex justify-between items-center border-b pb-4 pt-2 border-dashed">
      <div className="flex item-start gap-2 flex-[0.8]">
        <div aria-label="Question index" className="text-gray-500">
          {index}.
        </div>
        <div aria-label="Question">
          <p dangerouslySetInnerHTML={{ __html: question }}></p>
          <i className="text-gray-500 mt-1">
            The correct answer is{" "}
            <span
              className={`font-semibold ${
                isTrue ? "text-green-500" : "text-orange-500"
              }`}
            >
              {correctAnswer}
            </span>
            .&nbsp;Your answered&nbsp;
            <span
              className={
                isAnswerResponseTrue ? "text-green-500" : "text-orange-500"
              }
            >
              {answerResponse}
            </span>
          </i>
        </div>
      </div>
      <div>
        {isAttempCorrect ? (
          <IconCheck color="green" size={28} />
        ) : (
          <IconX color="red" size={28} />
        )}
      </div>
    </div>
  );
};

export default RevealResult;
