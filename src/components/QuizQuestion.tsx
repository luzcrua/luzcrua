import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface QuizQuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
  currentQuestion: number;
}

export const QuizQuestion = ({ question, options, onAnswer, currentQuestion }: QuizQuestionProps) => {
  return (
    <Card className="w-full max-w-2xl p-6 animate-fade-up bg-white/90 backdrop-blur">
      <div className="mb-8">
        <p className="text-sm text-celestial-400 mb-2">Pergunta {currentQuestion + 1}/15</p>
        <h2 className="text-2xl font-semibold text-gray-800">{question}</h2>
      </div>
      <div className="grid gap-4">
        {options.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            className="w-full p-4 text-left hover:bg-celestial-100 transition-colors"
            onClick={() => onAnswer(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </Card>
  );
};