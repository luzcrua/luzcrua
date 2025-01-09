import { WhatsAppShareButton } from "./WhatsAppShareButton";
import { useTranslation } from "react-i18next";

interface VerseSummaryProps {
  verse: string;
  userName: string;
}

export const VerseSummary = ({ verse, userName }: VerseSummaryProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 max-w-2xl mx-auto p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        {userName}, {t('result.specialVerse')}
      </h2>
      <blockquote className="text-xl text-gray-700 italic text-center border-l-4 border-celestial-500 pl-4 py-2 bg-celestial-50/50">
        {verse}
      </blockquote>
      <p className="text-gray-600 text-center">
        {t('result.share')}
      </p>
      <WhatsAppShareButton verse={verse} />
    </div>
  );
};