import React from "react";
import styles from "../styles/UtilityButton.module.css";

interface UtilityButtonProps {
  label?: string;
  onClick?: () => void;
  color?: string;
  type?: "button" | "submit" | "reset";
}

const UtilityButton: React.FC<UtilityButtonProps> = ({
  label = "Button",
  onClick,
  color,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={styles.utilityButton}
      onClick={onClick}
      style={color ? { backgroundColor: color } : {}}
    >
      {label}
    </button>
  );
};

export default UtilityButton;
