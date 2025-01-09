import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

interface QuizQuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
  currentQuestion: number;
  selectedAnswer?: string;
}

export const QuizQuestion = ({ 
  question, 
  options, 
  onAnswer, 
  currentQuestion,
  selectedAnswer 
}: QuizQuestionProps) => {
  const { t } = useTranslation();

  return (
    <Card className="w-full max-w-2xl p-6 animate-fade-up bg-white/90 backdrop-blur">
      <div className="mb-8">
        <p className="text-sm text-celestial-400 mb-2">
          {t('quiz.question')} {currentQuestion + 1}/15
        </p>
        <h2 className="text-2xl font-semibold text-gray-800">{question}</h2>
      </div>
      <div className="grid gap-4">
        {options.map((option, index) => (
          <Button
            key={index}
            variant={selectedAnswer === option ? "default" : "outline"}
            className={`w-full p-4 text-left transition-colors ${
              selectedAnswer === option 
                ? 'bg-celestial-500 text-white hover:bg-celestial-600' 
                : 'hover:bg-celestial-100'
            }`}
            onClick={() => onAnswer(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </Card>
  );
};