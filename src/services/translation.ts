import axios from 'axios';
import { toast } from 'sonner';

const LIBRE_TRANSLATE_API = 'https://libretranslate.de/translate';

interface TranslationResponse {
  translatedText: string;
}

export const translateText = async (text: string, targetLang: string): Promise<string> => {
  // Se o texto estiver vazio ou o idioma for português (padrão), retorna o texto original
  if (!text || targetLang === 'pt') {
    return text;
  }

  try {
    console.log('Iniciando tradução:', { text: text.substring(0, 50) + '...', targetLang });
    
    const response = await axios.post(LIBRE_TRANSLATE_API, {
      q: text,
      source: 'pt',
      target: targetLang,
    });

    console.log('Tradução bem-sucedida');
    return response.data.translatedText;
  } catch (error) {
    console.error('Erro na tradução:', error);
    
    // Mostra uma mensagem mais amigável para o usuário
    toast.error('Serviço de tradução temporariamente indisponível. Mostrando conteúdo original.');
    
    // Retorna o texto original em caso de erro
    return text;
  }
};

// Função auxiliar para traduzir objetos complexos
export const translateObject = async <T extends Record<string, any>>(
  obj: T,
  targetLang: string,
  fieldsToTranslate: (keyof T)[]
): Promise<T> => {
  if (targetLang === 'pt') return obj;

  const translatedObj = { ...obj };

  try {
    for (const field of fieldsToTranslate) {
      if (typeof obj[field] === 'string') {
        const translated = await translateText(obj[field] as string, targetLang);
        translatedObj[field] = translated as T[keyof T];
      }
    }
  } catch (error) {
    console.error('Erro ao traduzir objeto:', error);
    toast.error('Erro ao traduzir conteúdo. Algumas partes podem estar no idioma original.');
  }

  return translatedObj;
};

// Função para traduzir arrays de objetos
export const translateArray = async <T extends Record<string, any>>(
  arr: T[],
  targetLang: string,
  fieldsToTranslate: (keyof T)[]
): Promise<T[]> => {
  if (targetLang === 'pt') return arr;

  try {
    return await Promise.all(
      arr.map(item => translateObject(item, targetLang, fieldsToTranslate))
    );
  } catch (error) {
    console.error('Erro ao traduzir array:', error);
    toast.error('Erro ao traduzir lista de conteúdo. Alguns itens podem estar no idioma original.');
    return arr;
  }
};