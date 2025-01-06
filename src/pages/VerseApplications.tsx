import { useLocation } from "react-router-dom";
import { VerseApplications } from "@/components/VerseApplications";
import { VideoRecommendations } from "@/components/VideoRecommendations";

const VerseApplicationsPage = () => {
  const location = useLocation();
  const { verse, userContact } = location.state || {};

  if (!verse || !userContact) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-celestial-300 to-celestial-500 p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Página não encontrada
          </h1>
          <p className="text-gray-600 mt-2">
            Por favor, retorne à página inicial e complete o questionário.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-celestial-300 to-celestial-500 p-4">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Seu versículo especial:
        </h2>
        <p className="text-lg text-gray-700 italic mb-8">{verse}</p>
        <VerseApplications />
        <VideoRecommendations />
      </div>
    </div>
  );
};

export default VerseApplicationsPage;