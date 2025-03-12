import React from "react";
import styles from "../styles/UtilityButton.module.css";

interface UtilityButtonProps {
  label?: string;
  onClick: () => void;
  color?: string;
}

const UtilityButton: React.FC<UtilityButtonProps> = ({
  label = "Button",
  onClick,
  color,
}) => {
  return (
    <button
      className={styles.utilityButton}
      onClick={onClick}
      style={color ? { backgroundColor: color } : {}}
    >
      {label}
    </button>
  );
};

export default UtilityButton;
