import EnvConfig from "@config/EnvConfig";
import { QuestionModel } from "@type/QuestionType";

const { SERVER_LINK } = EnvConfig;

const useFetchQuestion = async (index: number) => {
  const request = await fetch(`${SERVER_LINK}/question/${index}`);
  const data = (await request.json()) as Pick<
    QuestionModel,
    "question" | "category"
  >;

  return data;
};

export { useFetchQuestion };
