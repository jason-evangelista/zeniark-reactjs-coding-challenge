type QuestionModel = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answer: string[];
};

type QuestionList = {
  results: QuestionModel[];
};

type UseQuestionModel = {
  questionIndexStack: number[];
  setQuestionIndexStack: (currentIndex: number) => void;
};

export type { QuestionList, QuestionModel, UseQuestionModel };
