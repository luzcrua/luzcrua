import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface WelcomeFormProps {
  onStart: (name: string) => void;
}

export const WelcomeForm = ({ onStart }: WelcomeFormProps) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Por favor, digite seu nome para começar");
      return;
    }
    onStart(name.trim());
  };

  return (
    <Card className="w-full max-w-md p-6 animate-fade-up bg-white/90 backdrop-blur">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Bem-vindo(a) ao Espelho da Alma</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder="Digite seu primeiro nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-celestial-500 hover:bg-celestial-600 text-white font-semibold"
        >
          Começar Jornada
        </Button>
      </form>
    </Card>
  );
};