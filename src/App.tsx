import React from "react";
import { TrainerProvider } from "./hook/TrainerContext";
import VocabTrainer from "./components/VocabTrainer";

const App: React.FC = () => {
  return (
    <TrainerProvider>
      <VocabTrainer />
    </TrainerProvider>
  );
};

export default App;
