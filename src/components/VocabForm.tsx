import React, { useState, FormEvent } from "react";
import styles from "../styles/VocabForm.module.css";
import { VocabFormProps } from "../interfaces/Vocab";
import TranslationDirectionComponent from "./TranslationDirection";
import UtilityButton from "./UtilityButton";
import { useTrainer } from "../hook/TrainerContext";

const VocabForm: React.FC<VocabFormProps> = ({
  currentVocab,
  onSubmit,
  currentIndex,
  total,
  direction,
}) => {
  const [userAnswer, setUserAnswer] = useState("");
  const { resetTrainer } = useTrainer();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(userAnswer);
    setUserAnswer("");
  };

  // Frage und Placeholder hängen von der Übersetzungsrichtung ab
  const questionWord =
    direction === "EN_TO_DE" ? currentVocab.english : currentVocab.german;
  const placeholderText =
    direction === "EN_TO_DE" ? "Deutsche Übersetzung" : "Englische Übersetzung";

  return (
    <div className={styles.vocabForm_container}>
      <h1 className={styles.title}>Vokabeltrainer</h1>
      <TranslationDirectionComponent direction={direction} />
      <p className={styles.description}>Übersetze das folgende Wort:</p>
      <h2 className={styles.word}>{questionWord}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          className={styles.input}
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder={placeholderText}
          autoFocus
          required
        />
        <div className={styles.buttonContainer}>
          <UtilityButton label="Quiz neu starten" onClick={resetTrainer} />
          <UtilityButton label="Antwort prüfen" type="submit" />
        </div>
      </form>
      <p className={styles.counter}>
        {currentIndex + 1} von {total}
      </p>
    </div>
  );
};

export default VocabForm;
