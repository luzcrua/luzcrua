import axios from 'axios';
import { toast } from 'sonner';

const LIBRE_TRANSLATE_API = 'https://libretranslate.de/translate';

// Cache para armazenar traduções já realizadas
const translationCache: Record<string, Record<string, string>> = {};

const getCacheKey = (text: string, targetLang: string) => `${text}_${targetLang}`;

export const translateText = async (text: string, targetLang: string): Promise<string> => {
  if (!text || targetLang === 'pt') {
    return text;
  }

  const cacheKey = getCacheKey(text, targetLang);
  
  // Verifica se já existe no cache
  if (translationCache[cacheKey]) {
    console.log('Usando tradução em cache para:', text.substring(0, 50));
    return translationCache[cacheKey][targetLang];
  }

  try {
    console.log('Traduzindo:', text.substring(0, 50));
    
    const response = await axios.post(LIBRE_TRANSLATE_API, {
      q: text,
      source: 'pt',
      target: targetLang,
    });

    const translatedText = response.data.translatedText;
    
    // Armazena no cache
    if (!translationCache[cacheKey]) {
      translationCache[cacheKey] = {};
    }
    translationCache[cacheKey][targetLang] = translatedText;

    console.log('Tradução concluída com sucesso');
    return translatedText;
  } catch (error) {
    console.error('Erro na tradução:', error);
    toast.error('Erro ao traduzir conteúdo. Mostrando texto original.');
    return text;
  }
};

export const translateObject = async <T extends Record<string, any>>(
  obj: T,
  targetLang: string,
  fieldsToTranslate: (keyof T)[]
): Promise<T> => {
  if (targetLang === 'pt') return obj;

  const translatedObj = { ...obj };

  try {
    await Promise.all(
      fieldsToTranslate.map(async (field) => {
        if (typeof obj[field] === 'string') {
          translatedObj[field] = await translateText(obj[field] as string, targetLang) as T[keyof T];
        }
      })
    );
    
    return translatedObj;
  } catch (error) {
    console.error('Erro ao traduzir objeto:', error);
    toast.error('Erro ao traduzir conteúdo. Algumas partes podem estar no idioma original.');
    return obj;
  }
};

export const translateArray = async <T extends Record<string, any>>(
  arr: T[],
  targetLang: string,
  fieldsToTranslate: (keyof T)[]
): Promise<T[]> => {
  if (targetLang === 'pt') return arr;

  try {
    const translatedArray = await Promise.all(
      arr.map(item => translateObject(item, targetLang, fieldsToTranslate))
    );
    return translatedArray;
  } catch (error) {
    console.error('Erro ao traduzir array:', error);
    toast.error('Erro ao traduzir lista de conteúdo. Alguns itens podem estar no idioma original.');
    return arr;
  }
};