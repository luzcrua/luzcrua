import { Button } from "@/components/ui/button";

interface WhatsAppShareButtonProps {
  verse: string;
}

export const WhatsAppShareButton = ({ verse }: WhatsAppShareButtonProps) => {
  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(
      `${verse}\n\nDescubra seu versículo especial em:\nhttps://www.youtube.com/@luzcruaoficial/`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppShare}
      className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 flex items-center justify-center gap-2 text-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-6"
      >
        <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
        <path d="M17 7.5a8.38 8.38 0 0 1 .9 3.8 8.5 8.5 0 0 1-.9 3.8" />
        <path d="M9.5 7.5a8.38 8.38 0 0 0-.9 3.8 8.5 8.5 0 0 0 .9 3.8" />
        <path d="M7.5 9.5a8.38 8.38 0 0 1 3.8-.9 8.5 8.5 0 0 1 3.8.9" />
        <path d="M7.5 14.5a8.38 8.38 0 0 0 3.8.9 8.5 8.5 0 0 0 3.8-.9" />
      </svg>
      COMPARTILHAR NO WHATSAPP
    </Button>
  );
};