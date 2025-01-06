import { VerseContactForm } from "./VerseContactForm";
import { WhatsAppShareButton } from "./WhatsAppShareButton";

interface VerseSummaryProps {
  verse: string;
  userName: string;
}

export const VerseSummary = ({ verse, userName }: VerseSummaryProps) => {
  return (
    <div className="space-y-6 max-w-2xl mx-auto p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        {userName}, aqui está seu versículo especial:
      </h2>
      <blockquote className="text-xl text-gray-700 italic text-center border-l-4 border-celestial-500 pl-4 py-2 bg-celestial-50/50">
        {verse}
      </blockquote>
      <p className="text-gray-600 text-center">
        Este versículo foi escolhido especialmente para você, {userName}. 
        Compartilhe esta mensagem de luz e inspiração!
      </p>
      <WhatsAppShareButton verse={verse} />
      <VerseContactForm verse={verse} />
    </div>
  );
};