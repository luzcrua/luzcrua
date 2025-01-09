import { useState } from "react";
import { QuizQuestion } from "@/components/QuizQuestion";
import { Button } from "@/components/ui/button";
import { questions } from "@/data/questions";
import { useTranslation } from "react-i18next";

interface QuizQuestionsProps {
  onComplete: (answers: string[]) => void;
}

export const QuizQuestions = ({ onComplete }: QuizQuestionsProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const { t } = useTranslation();

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 500);
    }
  };

  const handleSeeResults = () => {
    onComplete(answers);
  };

  return (
    <div className="w-full max-w-2xl">
      <QuizQuestion
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        onAnswer={handleAnswer}
        currentQuestion={currentQuestion}
        selectedAnswer={answers[currentQuestion]}
      />
      <div className="flex justify-between mt-4">
        {currentQuestion > 0 && (
          <Button
            onClick={handlePrevious}
            variant="outline"
            className="bg-white/90"
          >
            {t('quiz.previous')}
          </Button>
        )}
        {answers[currentQuestion] && currentQuestion === questions.length - 1 && (
          <Button
            onClick={handleSeeResults}
            className="bg-golden-400 hover:bg-golden-500 text-white ml-auto"
          >
            {t('quiz.seeResults')}
          </Button>
        )}
      </div>
    </div>
  );
};