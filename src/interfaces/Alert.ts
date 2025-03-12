export interface AnswerAlertProps {
  isCorrect: boolean;
  userAnswer: string;
  correctAnswer: string;
  onClose?: () => void;
}
