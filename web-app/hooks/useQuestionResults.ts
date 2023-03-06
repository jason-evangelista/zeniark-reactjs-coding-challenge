import { UseQuestionResults } from "@type/ResultType";
import { create } from "zustand";

const useQuestionResult = create<UseQuestionResults>((set, get) => ({
  results: [],
  setQuestionResults(params) {
    if (!params) return;
    return set({ results: [...get().results, params] });
  },
  getQuestionResults() {
    return get().results;
  },
  resetQuestionResult() {
    return set({ results: [] });
  },
}));

export default useQuestionResult;
