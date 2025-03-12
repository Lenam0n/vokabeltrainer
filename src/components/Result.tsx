import React from "react";
import { useTrainer } from "../hook/TrainerContext";
import UtilityButton from "./UtilityButton";
import styles from "../styles/Result.module.css";

const Result: React.FC = () => {
  const { score, vocabList, incorrectWords, resetTrainer } = useTrainer();

  return (
    <div className={styles.result_container}>
      <h1>Ergebnis</h1>
      <p>
        Richtige Antworten: {score} von {vocabList.length}
      </p>
      {incorrectWords.length > 0 && (
        <div>
          <h2>Falsche Wörter:</h2>
          <ul className={styles.result_list}>
            {incorrectWords.map((item, index) => (
              <li key={index} className={styles.result_listItem}>
                {item.english} – {item.german}
              </li>
            ))}
          </ul>
        </div>
      )}
      <UtilityButton label="Quiz neu starten" onClick={resetTrainer} />
    </div>
  );
};

export default Result;
