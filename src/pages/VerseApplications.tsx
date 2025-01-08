import { useLocation } from "react-router-dom";
import { VerseApplications } from "@/components/VerseApplications";
import { VideoRecommendations } from "@/components/VideoRecommendations";

const VerseApplicationsPage = () => {
  const location = useLocation();
  const { verse, userContact } = location.state || {};

  if (!verse || !userContact) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-celestial-300 to-celestial-500 p-4">
        <div className="text-center space-y-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8 max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">
            Página não encontrada
          </h1>
          <p className="text-gray-600">
            Por favor, retorne à página inicial e complete o questionário para receber seu versículo especial.
          </p>
          <div className="animate-pulse text-celestial-500">
            ✨
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-celestial-300 to-celestial-500 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white/95 backdrop-blur rounded-lg shadow-xl p-6 md:p-8 animate-fade-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Seu versículo especial:
          </h2>
          <blockquote className="text-xl text-gray-700 italic border-l-4 border-celestial-500 pl-4 py-2 bg-celestial-50/50 rounded">
            {verse}
          </blockquote>
          <div className="mt-4 text-gray-600">
            <p className="font-medium">Seus dados de contato:</p>
            <p>Email: {userContact.email}</p>
            <p>Telefone: {userContact.phone}</p>
          </div>
        </div>
        
        <div className="bg-white/95 backdrop-blur rounded-lg shadow-xl p-6 md:p-8 animate-fade-up delay-150">
          <VerseApplications />
        </div>
        
        <div className="bg-white/95 backdrop-blur rounded-lg shadow-xl p-6 md:p-8 animate-fade-up delay-300">
          <VideoRecommendations />
        </div>
      </div>
    </div>
  );
};

export default VerseApplicationsPage;