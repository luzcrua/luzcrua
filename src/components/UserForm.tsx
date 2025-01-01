import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface UserFormProps {
  onSubmit: (name: string, email: string) => void;
}

export const UserForm = ({ onSubmit }: UserFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }
    if (!email.includes("@")) {
      toast.error("Por favor, insira um email válido");
      return;
    }
    onSubmit(name, email);
  };

  return (
    <Card className="w-full max-w-md p-6 animate-fade-up bg-white/90 backdrop-blur">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Receba seu versículo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
        </div>
        <Button type="submit" className="w-full bg-golden-400 hover:bg-golden-500 text-white">
          Descobrir meu versículo
        </Button>
      </form>
    </Card>
  );
};