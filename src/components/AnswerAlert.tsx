import React, { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AnswerAlertProps } from "../interfaces/Alert";

const AnswerAlert: React.FC<AnswerAlertProps> = ({
  isCorrect,
  userAnswer,
  correctAnswer,
  onClose,
}) => {
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    MySwal.fire({
      title: isCorrect ? "Richtig!" : "Falsch!",
      icon: isCorrect ? "success" : "error",
      html: `
        <div style="text-align: left;">
          <p><strong>Deine Antwort:</strong></p>
          <p>${userAnswer}</p>
          <p style="margin-top:10px;"><strong>Richtige Antwort:</strong></p>
          <p>${correctAnswer}</p>
        </div>
      `,
      confirmButtonText: "Weiter",
    }).then(() => {
      if (onClose) {
        onClose();
      }
    });
  }, [isCorrect, userAnswer, correctAnswer, MySwal, onClose]);

  return null;
};

export default AnswerAlert;
