import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { translateText } from '@/services/translation';
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
      // Muda o idioma imediatamente para melhor UX
      await i18n.changeLanguage(langCode);
      
      // Mostra um toast informando que a tradução está em andamento
      toast.info('Traduzindo conteúdo...');

      // Aqui você pode adicionar lógica para traduzir dinamicamente
      // o conteúdo que não está no i18n, se necessário
      
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