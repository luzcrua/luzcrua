import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from 'sonner';

const languages = [
  { code: 'pt', name: 'Português' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'it', name: 'Italiano' },
  { code: 'fr', name: 'Français' }
];

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = async (langCode: string) => {
    try {
      // Mostra um toast informando que a tradução está em andamento
      const loadingToast = toast.loading('Traduzindo conteúdo...');
      
      // Salva o idioma escolhido no localStorage
      localStorage.setItem('preferredLanguage', langCode);
      
      // Muda o idioma
      await i18n.changeLanguage(langCode);
      
      // Força um reload da página para garantir que todo o conteúdo seja traduzido
      window.location.reload();
      
      // Remove o toast de loading e mostra sucesso
      toast.dismiss(loadingToast);
      toast.success('Idioma alterado com sucesso!');
    } catch (error) {
      console.error('Error changing language:', error);
      toast.error('Erro ao mudar o idioma. Tente novamente.');
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="bg-white/90 backdrop-blur">
            <Globe className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white/90 backdrop-blur">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`cursor-pointer ${i18n.language === lang.code ? 'bg-celestial-100' : ''}`}
            >
              {lang.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};