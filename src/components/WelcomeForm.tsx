import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

interface WelcomeFormProps {
  onStart: (name: string) => void;
}

export const WelcomeForm = ({ onStart }: WelcomeFormProps) => {
  const [name, setName] = useState("");
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Por favor, digite seu nome para começar");
      return;
    }
    onStart(name.trim());
  };

  return (
    <Card className="w-full max-w-md p-8 animate-fade-up bg-white/90 backdrop-blur">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">
            {t('welcome.title')}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t('welcome.description')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              {t('welcome.nameLabel')}
            </label>
            <Input
              id="name"
              placeholder={t('welcome.namePlaceholder')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
            />
          </div>
          <Button 
            type="submit" 
            className={`w-full bg-celestial-500 hover:bg-celestial-600 text-white font-semibold transition-all duration-300 ${
              name.trim() ? 'animate-pulse' : 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!name.trim()}
          >
            {t('welcome.startButton')}
          </Button>
        </form>
      </div>
    </Card>
  );
};