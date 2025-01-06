import { useState } from "react";
import { WelcomeForm } from "@/components/WelcomeForm";
import { QuizQuestions } from "@/components/QuizQuestions";
import { VerseMatching } from "@/components/VerseMatching";
import { QuizResult } from "@/components/QuizResult";
import { questions } from "@/data/questions";

const Index = () => {
  const [started, setStarted] = useState(false);
  const [userName, setUserName] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [verse, setVerse] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleStart = (name: string) => {
    setUserName(name);
    setStarted(true);
  };

  const handleQuizComplete = (userAnswers: string[]) => {
    setAnswers(userAnswers);
    setShowResult(true);
  };

  const handleVerseFound = (matchedVerse: string) => {
    setVerse(matchedVerse);
  };

  if (!started) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-celestial-300 to-celestial-500 p-4">
        <WelcomeForm onStart={handleStart} />
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-celestial-300 to-celestial-500 p-4">
        <VerseMatching
          userAnswers={answers}
          questions={questions}
          onVerseFound={handleVerseFound}
        />
        {verse && <QuizResult verse={verse} userName={userName} />}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-celestial-300 to-celestial-500 p-4">
      <QuizQuestions onComplete={handleQuizComplete} />
    </div>
  );
};

export default Index;