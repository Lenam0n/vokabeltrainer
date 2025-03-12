import { Vocab } from "../interfaces";

export const loadVocabularyData = async (): Promise<Vocab[]> => {
  const Data = await import("../data/vocabulary.json");
  return Data.default as Vocab[];
};
