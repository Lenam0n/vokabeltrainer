import React, { createContext, useContext, useState, useEffect } from "react";
import { Vocab } from "../interfaces";
import { loadVocabularyData } from "../helpers/Vocab_helper";
import { TrainerProviderProps, TrainerState } from "../interfaces/Vocab";

// Fisher-Yates Shuffle – generisch
function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const TrainerContext = createContext<TrainerState | undefined>(undefined);

export const TrainerProvider: React.FC<TrainerProviderProps> = ({
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [incorrectWords, setIncorrectWords] = useState<Vocab[]>([]);
  const [vocabList, setVocabList] = useState<Vocab[]>([]);

  // Funktion zum Laden und Shufflen der Vokabeln
  const fetchAndShuffleData = async () => {
    const data = await loadVocabularyData();
    setVocabList(shuffleArray(data));
  };

  // Beim ersten Laden
  useEffect(() => {
    fetchAndShuffleData();
  }, []);

  // Reset-Funktion, die alle Zustände zurücksetzt und den Katalog neu lädt
  const resetTrainer = async () => {
    setCurrentIndex(0);
    setScore(0);
    setIncorrectWords([]);
    await fetchAndShuffleData();
  };

  return (
    <TrainerContext.Provider
      value={{
        currentIndex,
        score,
        incorrectWords,
        vocabList,
        setCurrentIndex,
        setScore,
        setIncorrectWords,
        resetTrainer,
      }}
    >
      {children}
    </TrainerContext.Provider>
  );
};

export const useTrainer = (): TrainerState => {
  const context = useContext(TrainerContext);
  if (!context) {
    throw new Error("useTrainer must be used within a TrainerProvider");
  }
  return context;
};
