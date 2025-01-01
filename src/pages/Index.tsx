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
  {
    question: "Como você se sente em relação ao futuro?",
    options: ["Otimista", "Incerto", "Temeroso", "Confiante"],
    tags: {
      "Otimista": ["esperanca", "futuro"],
      "Incerto": ["confianca", "futuro"],
      "Temeroso": ["medo", "confianca"],
      "Confiante": ["fe", "confianca"]
    }
  },
  {
    question: "O que você mais busca neste momento?",
    options: ["Paz interior", "Direção", "Força", "Sabedoria"],
    tags: {
      "Paz interior": ["paz", "tranquilidade"],
      "Direção": ["sabedoria", "caminho"],
      "Força": ["forca", "superacao"],
      "Sabedoria": ["sabedoria", "conhecimento"]
    }
  },
  {
    question: "Como está sua vida espiritual?",
    options: ["Forte e ativa", "Precisa crescer", "Distante", "Em busca"],
    tags: {
      "Forte e ativa": ["fe", "espiritualidade"],
      "Precisa crescer": ["crescimento", "fe"],
      "Distante": ["busca", "renovacao"],
      "Em busca": ["busca", "espiritualidade"]
    }
  },
  {
    question: "O que mais tem ocupado seus pensamentos?",
    options: ["Família", "Carreira", "Finanças", "Propósito de vida"],
    tags: {
      "Família": ["familia", "amor"],
      "Carreira": ["trabalho", "proposito"],
      "Finanças": ["provisao", "confianca"],
      "Propósito de vida": ["proposito", "caminho"]
    }
  },
  {
    question: "Como você lida com desafios?",
    options: ["Com fé", "Com preocupação", "Com determinação", "Com medo"],
    tags: {
      "Com fé": ["fe", "confianca"],
      "Com preocupação": ["ansiedade", "preocupacao"],
      "Com determinação": ["forca", "superacao"],
      "Com medo": ["medo", "coragem"]
    }
  },
  {
    question: "O que você mais valoriza em relacionamentos?",
    options: ["Confiança", "Compreensão", "Lealdade", "Amor"],
    tags: {
      "Confiança": ["confianca", "relacionamentos"],
      "Compreensão": ["amor", "relacionamentos"],
      "Lealdade": ["fidelidade", "relacionamentos"],
      "Amor": ["amor", "relacionamentos"]
    }
  },
  {
    question: "Como você se sente em momentos de solidão?",
    options: ["Em paz", "Ansioso(a)", "Reflexivo(a)", "Triste"],
    tags: {
      "Em paz": ["paz", "confianca"],
      "Ansioso(a)": ["ansiedade", "conforto"],
      "Reflexivo(a)": ["sabedoria", "paz"],
      "Triste": ["tristeza", "conforto"]
    }
  },
  {
    question: "O que você busca em sua vida profissional?",
    options: ["Realização", "Estabilidade", "Propósito", "Crescimento"],
    tags: {
      "Realização": ["realizacao", "proposito"],
      "Estabilidade": ["seguranca", "provisao"],
      "Propósito": ["proposito", "trabalho"],
      "Crescimento": ["crescimento", "superacao"]
    }
  },
  {
    question: "Como você lida com mudanças?",
    options: ["Com adaptabilidade", "Com resistência", "Com fé", "Com medo"],
    tags: {
      "Com adaptabilidade": ["sabedoria", "confianca"],
      "Com resistência": ["medo", "mudanca"],
      "Com fé": ["fe", "confianca"],
      "Com medo": ["medo", "coragem"]
    }
  },
  {
    question: "O que mais te traz paz?",
    options: ["Oração", "Natureza", "Família", "Música"],
    tags: {
      "Oração": ["oracao", "paz"],
      "Natureza": ["paz", "criacao"],
      "Família": ["familia", "amor"],
      "Música": ["alegria", "paz"]
    }
  },
  {
    question: "Como você vê suas conquistas?",
    options: ["Com gratidão", "Com humildade", "Com orgulho", "Com insatisfação"],
    tags: {
      "Com gratidão": ["gratidao", "alegria"],
      "Com humildade": ["humildade", "sabedoria"],
      "Com orgulho": ["gratidao", "realizacao"],
      "Com insatisfação": ["contentamento", "paz"]
    }
  },
  {
    question: "O que você espera do futuro próximo?",
    options: ["Crescimento", "Paz", "Mudanças", "Realizações"],
    tags: {
      "Crescimento": ["crescimento", "esperanca"],
      "Paz": ["paz", "tranquilidade"],
      "Mudanças": ["mudanca", "confianca"],
      "Realizações": ["realizacao", "esperanca"]
    }
  },
  {
    question: "Como você se sente em relação à sua fé?",
    options: ["Fortalecido(a)", "Em crescimento", "Precisando renovar", "Buscando direção"],
    tags: {
      "Fortalecido(a)": ["fe", "forca"],
      "Em crescimento": ["crescimento", "fe"],
      "Precisando renovar": ["renovacao", "fe"],
      "Buscando direção": ["busca", "direcao"]
    }
  }
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

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const findBestMatchingVerse = (userAnswers: string[]) => {
    if (!verses || verses.length === 0) return "";

    const userTags = userAnswers.reduce((acc: string[], answer, index) => {
      const questionTags = questions[index]?.tags[answer] || [];
      return [...acc, ...questionTags];
    }, []);

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
    }
  };

  const handleSeeResults = () => {
    const matchedVerse = findBestMatchingVerse(answers);
    setVerse(matchedVerse);
    setShowUserForm(true);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Seu versículo especial: ${verse}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const handleUserSubmit = (name: string, email: string) => {
    console.log("Dados do usuário:", { name, email, answers, verse });
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
            <Button
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white font-bold"
            >
              Receber no WhatsApp
            </Button>
          </Card>
          <UserForm onSubmit={handleUserSubmit} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-celestial-300 to-celestial-500 p-4">
      <div className="w-full max-w-2xl">
        <QuizQuestion
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestion}
        />
        <div className="flex justify-between mt-4">
          {currentQuestion > 0 && (
            <Button
              onClick={handlePrevious}
              variant="outline"
              className="bg-white/90"
            >
              Anterior
            </Button>
          )}
          {currentQuestion === questions.length - 1 && answers.length === questions.length - 1 && (
            <Button
              onClick={handleSeeResults}
              className="bg-golden-400 hover:bg-golden-500 text-white ml-auto"
            >
              Ver Resultados
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;