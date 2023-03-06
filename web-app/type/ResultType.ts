type Result = {
  question: string;
  questionIndex: number;
  correctAnswer: string;
  answerResponse: string;
  isAttemptCorrect: boolean;
};

type UseQuestionResults = {
  setQuestionResults: (_?: Result) => void;
  resetQuestionResult: () => void;
  getQuestionResults: () => Result[];
  results: Result[];
};

export type { Result, UseQuestionResults };
