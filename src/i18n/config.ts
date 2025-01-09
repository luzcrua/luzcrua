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
      },
      form: {
        emailPlaceholder: "Seu email",
        namePlaceholder: "Seu nome",
        submitButton: "Descobrir meu versículo",
        errorMessage: "Por favor, preencha todos os campos",
        emailError: "Por favor, insira um email válido",
        receiveVerse: "Receba seu versículo"
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
      },
      form: {
        emailPlaceholder: "Your email",
        namePlaceholder: "Your name",
        submitButton: "Discover my verse",
        errorMessage: "Please fill in all fields",
        emailError: "Please enter a valid email",
        receiveVerse: "Receive your verse"
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
      },
      form: {
        emailPlaceholder: "Tu email",
        namePlaceholder: "Tu nombre",
        submitButton: "Descubrir mi versículo",
        errorMessage: "Por favor, completa todos los campos",
        emailError: "Por favor, ingresa un email válido",
        receiveVerse: "Recibe tu versículo"
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
      },
      form: {
        emailPlaceholder: "La tua email",
        namePlaceholder: "Il tuo nome",
        submitButton: "Scopri il mio versetto",
        errorMessage: "Per favore, compila tutti i campi",
        emailError: "Per favore, inserisci una email valida",
        receiveVerse: "Ricevi il tuo versetto"
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
      },
      form: {
        emailPlaceholder: "Votre email",
        namePlaceholder: "Votre nom",
        submitButton: "Découvrir mon verset",
        errorMessage: "Veuillez remplir tous les champs",
        emailError: "Veuillez entrer un email valide",
        receiveVerse: "Recevez votre verset"
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