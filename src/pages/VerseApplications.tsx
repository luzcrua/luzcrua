import { useLocation, Navigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { VerseApplications } from "@/components/VerseApplications";
import { VideoRecommendations } from "@/components/VideoRecommendations";

const VerseApplicationsPage = () => {
  const location = useLocation();
  const { verse, userContact } = location.state || {};

  if (!verse) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-celestial-300 to-celestial-500 p-4">
      <Card className="w-full max-w-2xl p-6 animate-fade-up bg-white/90 backdrop-blur">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Seu versículo especial:
          </h2>
          <p className="text-lg text-gray-700 italic">
            {verse}
          </p>
          <VerseApplications />
          <VideoRecommendations />
        </div>
      </Card>
    </div>
  );
};

export default VerseApplicationsPage;