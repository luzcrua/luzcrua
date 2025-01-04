import { Card } from "@/components/ui/card";
import { VerseSummary } from "./VerseSummary";
import { VerseApplications } from "./VerseApplications";
import { VideoRecommendations } from "./VideoRecommendations";

interface QuizResultProps {
  verse: string;
  userName: string;
}

export const QuizResult = ({ verse, userName }: QuizResultProps) => {
  return (
    <Card className="w-full max-w-2xl p-6 animate-fade-up bg-white/90 backdrop-blur">
      <div className="space-y-6">
        <VerseSummary verse={verse} userName={userName} />
        <VerseApplications />
        <VideoRecommendations />
      </div>
    </Card>
  );
};