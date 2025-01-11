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

  console.log('Translating text:', text.substring(0, 50) + '...', 'to language:', targetLang);
  
  try {
    const response = await axios.post(LIBRE_TRANSLATE_API, {
      q: text,
      source: 'pt', // Definindo português como idioma fonte
      target: targetLang,
    });

    console.log('Translation successful');
    return response.data.translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    toast.error('Erro na tradução, mostrando conteúdo original');
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

  for (const field of fieldsToTranslate) {
    if (typeof obj[field] === 'string') {
      const translated = await translateText(obj[field] as string, targetLang);
      translatedObj[field] = translated as T[keyof T];
    }
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

  return Promise.all(
    arr.map(item => translateObject(item, targetLang, fieldsToTranslate))
  );
};