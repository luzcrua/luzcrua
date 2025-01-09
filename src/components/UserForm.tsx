import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

interface UserFormProps {
  onSubmit: (name: string, email: string) => void;
}

export const UserForm = ({ onSubmit }: UserFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error(t('form.errorMessage'));
      return;
    }
    if (!email.includes("@")) {
      toast.error(t('form.emailError'));
      return;
    }
    onSubmit(name, email);
  };

  return (
    <Card className="w-full max-w-md p-6 animate-fade-up bg-white/90 backdrop-blur">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{t('form.receiveVerse')}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder={t('form.namePlaceholder')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder={t('form.emailPlaceholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
        </div>
        <Button type="submit" className="w-full bg-golden-400 hover:bg-golden-500 text-white">
          {t('form.submitButton')}
        </Button>
      </form>
    </Card>
  );
};