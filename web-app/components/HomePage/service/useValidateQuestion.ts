import EnvConfig from "@config/EnvConfig";
import { useQuery } from "@tanstack/react-query";
import { Result } from "@type/ResultType";

const { SERVER_LINK } = EnvConfig;
type Payload = {
  answerResponse: string;
  questionIndex: number;
};

const useValidateQuestion = ({ answerResponse, questionIndex }: Payload) => {
  const questionValidate = async () => {
    const request = await fetch(
      `${SERVER_LINK}/validate?questionIndex=${questionIndex}&answerResponse=${answerResponse}`
    );
    const data = (await request.json()) as Promise<Result>;
    return data;
  };
  const result = useQuery(["question-validate"], questionValidate, {
    enabled: false,
  });

  return result;
};

export default useValidateQuestion;
