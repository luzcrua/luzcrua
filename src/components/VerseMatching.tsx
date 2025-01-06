import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface VerseMatchingProps {
  userAnswers: string[];
  questions: any[];
  onVerseFound: (verse: string) => void;
}

export const VerseMatching = ({ userAnswers, questions, onVerseFound }: VerseMatchingProps) => {
  const { data: verses } = useQuery({
    queryKey: ['verses'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('verses')
        .select('*');
      
      if (error) throw error;
      return data;
    }
  });

  const findBestMatchingVerse = () => {
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

  if (verses) {
    const matchedVerse = findBestMatchingVerse();
    onVerseFound(matchedVerse);
  }

  return null;
};