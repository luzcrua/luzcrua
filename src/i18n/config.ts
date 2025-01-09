import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      welcome: {
        title: "Espelho da Alma",
        description: "Bem-vindo(a) a uma jornada de autoconhecimento e reflexão espiritual. Através de perguntas cuidadosamente selecionadas, vamos descobrir um versículo bíblico especialmente escolhido para você neste momento.",
        startButton: "Começar Jornada",
        nameLabel: "Como podemos te chamar?",
        namePlaceholder: "Digite seu primeiro nome"
      },
      quiz: {
        question: "Pergunta",
        previous: "Anterior",
        seeResults: "Ver Resultados",
        of: "de"
      },
      result: {
        specialVerse: "aqui está seu versículo especial:",
        share: "Compartilhe esta mensagem de luz e inspiração!"
      }
    }
  },
  en: {
    translation: {
      welcome: {
        title: "Soul Mirror",
        description: "Welcome to a journey of self-knowledge and spiritual reflection. Through carefully selected questions, we will discover a biblical verse specially chosen for you at this moment.",
        startButton: "Start Journey",
        nameLabel: "What should we call you?",
        namePlaceholder: "Enter your first name"
      },
      quiz: {
        question: "Question",
        previous: "Previous",
        seeResults: "See Results",
        of: "of"
      },
      result: {
        specialVerse: "here is your special verse:",
        share: "Share this message of light and inspiration!"
      }
    }
  },
  es: {
    translation: {
      welcome: {
        title: "Espejo del Alma",
        description: "Bienvenido(a) a un viaje de autoconocimiento y reflexión espiritual. A través de preguntas cuidadosamente seleccionadas, descubriremos un versículo bíblico especialmente elegido para ti en este momento.",
        startButton: "Comenzar Viaje",
        nameLabel: "¿Cómo podemos llamarte?",
        namePlaceholder: "Ingresa tu nombre"
      },
      quiz: {
        question: "Pregunta",
        previous: "Anterior",
        seeResults: "Ver Resultados",
        of: "de"
      },
      result: {
        specialVerse: "aquí está tu versículo especial:",
        share: "¡Comparte este mensaje de luz e inspiración!"
      }
    }
  },
  it: {
    translation: {
      welcome: {
        title: "Specchio dell'Anima",
        description: "Benvenuto/a in un viaggio di autoconoscenza e riflessione spirituale. Attraverso domande accuratamente selezionate, scopriremo un versetto biblico appositamente scelto per te in questo momento.",
        startButton: "Inizia il Viaggio",
        nameLabel: "Come possiamo chiamarti?",
        namePlaceholder: "Inserisci il tuo nome"
      },
      quiz: {
        question: "Domanda",
        previous: "Precedente",
        seeResults: "Vedi Risultati",
        of: "di"
      },
      result: {
        specialVerse: "ecco il tuo versetto speciale:",
        share: "Condividi questo messaggio di luce e ispirazione!"
      }
    }
  },
  fr: {
    translation: {
      welcome: {
        title: "Miroir de l'Âme",
        description: "Bienvenue dans un voyage d'introspection et de réflexion spirituelle. À travers des questions soigneusement sélectionnées, nous découvrirons un verset biblique spécialement choisi pour vous en ce moment.",
        startButton: "Commencer le Voyage",
        nameLabel: "Comment pouvons-nous vous appeler ?",
        namePlaceholder: "Entrez votre prénom"
      },
      quiz: {
        question: "Question",
        previous: "Précédent",
        seeResults: "Voir les Résultats",
        of: "sur"
      },
      result: {
        specialVerse: "voici votre verset spécial :",
        share: "Partagez ce message de lumière et d'inspiration !"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;