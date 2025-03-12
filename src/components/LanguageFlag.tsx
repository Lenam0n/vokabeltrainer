import React from "react";
import { LanguageFlagProps } from "../interfaces/Utils";

const flagMapping: { [key: string]: { emoji: string; label: string } } = {
  de: { emoji: "🇩🇪", label: "Deutsch" },
  en: { emoji: "🇺🇸", label: "Englisch" },
  fr: { emoji: "🇫🇷", label: "Französisch" },
  // Hier lassen sich weitere Sprachen hinzufügen
};

const LanguageFlag: React.FC<LanguageFlagProps> = ({ language, size = 24 }) => {
  const flagData = flagMapping[language.toLowerCase()];
  if (!flagData) {
    // Fallback: Gibt nichts aus, falls die Sprache nicht gefunden wurde.
    return null;
  }
  return (
    <span role="img" aria-label={flagData.label} style={{ fontSize: size }}>
      {flagData.emoji}
    </span>
  );
};

export default LanguageFlag;
