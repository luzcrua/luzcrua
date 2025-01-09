import axios from 'axios';

const LIBRE_TRANSLATE_API = 'https://libretranslate.de/translate';

interface TranslationResponse {
  translatedText: string;
}

export const translateText = async (text: string, targetLang: string): Promise<string> => {
  console.log('Translating text:', text, 'to language:', targetLang);
  
  try {
    const response = await axios.post(LIBRE_TRANSLATE_API, {
      q: text,
      source: 'auto',
      target: targetLang,
    });

    console.log('Translation response:', response.data);
    return response.data.translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Retorna o texto original em caso de erro
  }
};