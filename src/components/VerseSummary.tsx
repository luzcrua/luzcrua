import { Button } from "@/components/ui/button";

interface VerseSummaryProps {
  verse: string;
  userName: string;
}

export const VerseSummary = ({ verse, userName }: VerseSummaryProps) => {
  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(`${verse}\n\nDescubra seu versículo especial em:\nhttps://www.youtube.com/@luzcruaoficial/`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        {userName}, aqui está seu versículo especial:
      </h2>
      <p className="text-lg text-gray-700 italic">
        {verse}
      </p>
      <p className="text-gray-600">
        Este versículo foi escolhido especialmente para você, {userName}. 
        Que ele possa trazer luz e inspiração para seu dia!
      </p>
      <Button
        onClick={handleWhatsAppShare}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold"
      >
        Compartilhar este versículo no WhatsApp
      </Button>
    </div>
  );
};