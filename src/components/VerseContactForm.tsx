import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface VerseContactFormProps {
  verse: string;
}

export const VerseContactForm = ({ verse }: VerseContactFormProps) => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirm = async () => {
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('verse_contacts')
        .insert([
          { phone, email, verse }
        ]);

      if (error) throw error;

      toast({
        title: "Sucesso!",
        description: "Suas informações foram salvas com sucesso.",
      });

      navigate('/verse-applications', { 
        state: { 
          verse,
          userContact: { phone, email }
        } 
      });
    } catch (error) {
      console.error('Error saving contact:', error);
      toast({
        title: "Erro",
        description: "Houve um erro ao salvar suas informações. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setShowConfirmation(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <div>
          <Input
            type="tel"
            placeholder="Seu telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-celestial-500 hover:bg-celestial-600 text-white font-bold py-4 animate-pulse"
        >
          Ver as 50 maneiras de aplicar este versículo
        </Button>
      </form>

      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent className="bg-black/90 border-2 border-celestial-400 shadow-[0_0_30px_rgba(139,92,246,0.5)]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-celestial-400 text-2xl font-bold">
              🌟 Descubra o Poder da Palavra! 🌟
            </AlertDialogTitle>
            <AlertDialogDescription className="text-white text-lg">
              Você está prestes a receber 50 maneiras práticas e transformadoras
              de aplicar este versículo na sua vida diária!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={handleConfirm}
              disabled={isSubmitting}
              className="bg-celestial-500 hover:bg-celestial-600 text-white font-bold py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.7)]"
            >
              ✨ Sim, quero transformar minha vida! ✨
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};