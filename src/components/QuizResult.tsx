import { Card } from "@/components/ui/card";
import { VerseSummary } from "./VerseSummary";

interface QuizResultProps {
  verse: string;
  userName: string;
}

export const QuizResult = ({ verse, userName }: QuizResultProps) => {
  return (
    <Card className="w-full max-w-2xl p-6 animate-fade-up bg-white/90 backdrop-blur">
      <VerseSummary verse={verse} userName={userName} />
    </Card>
  );
};