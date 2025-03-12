import React, { useState } from "react";
import VocabForm from "./VocabForm";
import Result from "./Result";
import { useTrainer } from "../hook/TrainerContext";
import styles from "../styles/VocabTrainer.module.css";
import { Vocab } from "../interfaces";
import AnswerAlert from "./AnswerAlert";
import { AlertData, TranslationDirection } from "../interfaces/Vocab";

const VocabTrainer: React.FC = () => {
  const {
    currentIndex,
    vocabList,
    setCurrentIndex,
    score,
    setScore,
    incorrectWords,
    setIncorrectWords,
  } = useTrainer();

  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertData, setAlertData] = useState<AlertData | null>(null);
  // Random initial translation direction
  const [translationDirection, setTranslationDirection] =
    useState<TranslationDirection>(
      Math.random() < 0.5 ? "EN_TO_DE" : "DE_TO_EN"
    );

  const handleSubmit = (userAnswer: string) => {
    const currentVocab: Vocab = vocabList[currentIndex];
    // Erwarte je nach Modus unterschiedliche Antworten
    const expectedAnswer =
      translationDirection === "EN_TO_DE"
        ? currentVocab.german
        : currentVocab.english;
    const isCorrect =
      userAnswer.trim().toLowerCase() === expectedAnswer.trim().toLowerCase();
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setIncorrectWords([...incorrectWords, currentVocab]);
    }
    // Setze die Alert-Daten und zeige den Alert an
    setAlertData({
      isCorrect,
      userAnswer,
      correctAnswer: expectedAnswer,
    });
    setShowAlert(true);
  };

  // Wird aufgerufen, wenn der Benutzer im Alert den OK-/Continue-Button klickt.
  const handleAfterAlert = () => {
    setShowAlert(false);
    setAlertData(null);
    if (currentIndex + 1 < vocabList.length) {
      setCurrentIndex(currentIndex + 1);
      // Randomisiere die Übersetzungsrichtung neu
      setTranslationDirection(Math.random() < 0.5 ? "EN_TO_DE" : "DE_TO_EN");
    } else {
      // Letzte Frage wurde beantwortet – erhöhe den Index, um das Quiz zu beenden.
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Falls alle Vokabeln bearbeitet wurden und kein Alert mehr angezeigt wird, zeige das Ergebnis.
  if (currentIndex >= vocabList.length && !showAlert) {
    return <Result />;
  }

  return (
    <div className={styles.vocabTrainer_container__jkl012}>
      {showAlert && alertData ? (
        <AnswerAlert
          isCorrect={alertData.isCorrect}
          userAnswer={alertData.userAnswer}
          correctAnswer={alertData.correctAnswer}
          onClose={handleAfterAlert}
        />
      ) : (
        <VocabForm
          currentVocab={vocabList[currentIndex]}
          onSubmit={handleSubmit}
          currentIndex={currentIndex}
          total={vocabList.length}
          direction={translationDirection}
        />
      )}
    </div>
  );
};

export default VocabTrainer;
