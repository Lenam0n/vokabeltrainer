export interface Vocab {
  english: string;
  german: string;
}

export type TranslationDirection = "EN_TO_DE" | "DE_TO_EN";

export interface VocabFormProps {
  currentVocab: Vocab;
  onSubmit: (userAnswer: string) => void;
  currentIndex: number;
  total: number;
  direction: TranslationDirection;
}

export interface AlertData {
  isCorrect: boolean;
  userAnswer: string;
  correctAnswer: string;
}

export interface TrainerState {
  currentIndex: number;
  score: number;
  incorrectWords: Vocab[];
  vocabList: Vocab[];
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setIncorrectWords: React.Dispatch<React.SetStateAction<Vocab[]>>;
  resetTrainer: () => void;
}

export interface TrainerProviderProps {
  children: React.ReactNode;
}

export interface TranslationDirectionProps {
  direction: TranslationDirection;
}
