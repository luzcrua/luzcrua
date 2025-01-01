import { useState } from "react";
import { QuizQuestion } from "@/components/QuizQuestion";
import { UserForm } from "@/components/UserForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

const questions = [
  {
    question: "Como você está se sentindo hoje?",
    options: ["Ansioso(a)", "Em paz", "Preocupado(a)", "Feliz"],
    tags: {
      "Ansioso(a)": ["ansioso", "ansiedade"],
      "Em paz": ["paz", "tranquilidade"],
      "Preocupado(a)": ["preocupado", "ansiedade"],
      "Feliz": ["alegria", "felicidade"]
    }
  },
  {
    question: "Qual área da sua vida precisa de mais atenção neste momento?",
    options: ["Relacionamentos", "Trabalho", "Saúde", "Espiritualidade"],
    tags: {
      "Relacionamentos": ["relacionamentos", "amor"],
      "Trabalho": ["trabalho", "proposito"],
      "Saúde": ["saude", "cura"],
      "Espiritualidade": ["fe", "espiritualidade"]
    }
  },
  // ... Adicione as outras 13 perguntas aqui
];

const fetchVerses = async () => {
  const { data, error } = await supabase
    .from('verses')
    .select('*');
  
  if (error) throw error;
  return data;
};

const Index = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showUserForm, setShowUserForm] = useState(false);
  const [verse, setVerse] = useState("");

  const { data: verses } = useQuery({
    queryKey: ['verses'],
    queryFn: fetchVerses
  });

  const handleStart = () => {
    setStarted(true);
  };

  const findBestMatchingVerse = (userAnswers: string[]) => {
    if (!verses || verses.length === 0) return "";

    // Collect all tags from user answers
    const userTags = userAnswers.reduce((acc: string[], answer, index) => {
      const questionTags = questions[index]?.tags[answer] || [];
      return [...acc, ...questionTags];
    }, []);

    // Find verse with most matching tags
    let bestMatch = verses[0];
    let maxMatches = 0;

    verses.forEach(verse => {
      const matchCount = verse.tags?.filter(tag => 
        userTags.includes(tag)
      ).length || 0;

      if (matchCount > maxMatches) {
        maxMatches = matchCount;
        bestMatch = verse;
      }
    });

    return bestMatch.text;
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const matchedVerse = findBestMatchingVerse(newAnswers);
      setVerse(matchedVerse);
      setShowUserForm(true);
    }
  };

  const handleUserSubmit = (name: string, email: string) => {
    console.log("Dados do usuário:", { name, email, answers, verse });
    // Aqui você pode implementar a lógica para salvar os dados
  };

  if (!started) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-celestial-300 to-celestial-500 p-4">
        <Card className="w-full max-w-2xl p-8 text-center animate-fade-up bg-white/90 backdrop-blur">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Espelho da Alma</h1>
          <p className="text-lg text-gray-600 mb-8">
            Descubra um versículo especial que fala diretamente ao seu coração através de um breve questionário.
          </p>
          <Button
            onClick={handleStart}
            className="bg-golden-400 hover:bg-golden-500 text-white px-8 py-4 text-lg"
          >
            Começar Jornada
          </Button>
        </Card>
      </div>
    );
  }

  if (showUserForm) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-celestial-300 to-celestial-500 p-4">
        <div className="w-full max-w-2xl space-y-8 text-center">
          <Card className="p-8 animate-fade-up bg-white/90 backdrop-blur">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Seu versículo especial:</h2>
            <p className="text-lg text-gray-600 italic mb-8">{verse}</p>
          </Card>
          <UserForm onSubmit={handleUserSubmit} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-celestial-300 to-celestial-500 p-4">
      <QuizQuestion
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        onAnswer={handleAnswer}
        currentQuestion={currentQuestion}
      />
    </div>
  );
};

export default Index;
