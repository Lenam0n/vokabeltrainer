import React from "react";
import { TranslationDirectionProps } from "../interfaces/Vocab";
import LanguageFlag from "./LanguageFlag";

const TranslationDirection: React.FC<TranslationDirectionProps> = ({
  direction,
}) => {
  return (
    <div
      style={{
        marginBottom: "1rem",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        fontSize: "24px",
      }}
    >
      {direction === "EN_TO_DE" ? (
        <>
          <LanguageFlag language="en" />
          <span>➡️</span>
          <LanguageFlag language="de" />
        </>
      ) : (
        <>
          <LanguageFlag language="de" />
          <span>➡️</span>
          <LanguageFlag language="en" />
        </>
      )}
    </div>
  );
};

export default TranslationDirection;
