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
      navigation: {
        home: "Início",
        about: "Sobre",
        backToHome: "← Voltar para Início"
      },
      blog: {
        readMore: "Ler mais",
        relatedPosts: "Posts Relacionados",
        categories: "Categorias",
        publishedOn: "Publicado em",
        by: "por",
        shareOn: "Compartilhar em",
        nextPost: "Próximo Post",
        previousPost: "Post Anterior"
      },
      footer: {
        allRightsReserved: "Todos os direitos reservados."
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
      navigation: {
        home: "Home",
        about: "About",
        backToHome: "← Back to Home"
      },
      blog: {
        readMore: "Read more",
        relatedPosts: "Related Posts",
        categories: "Categories",
        publishedOn: "Published on",
        by: "by",
        shareOn: "Share on",
        nextPost: "Next Post",
        previousPost: "Previous Post"
      },
      footer: {
        allRightsReserved: "All rights reserved."
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
      navigation: {
        home: "Inicio",
        about: "Sobre",
        backToHome: "← Volver al Inicio"
      },
      blog: {
        readMore: "Leer más",
        relatedPosts: "Posts Relacionados",
        categories: "Categorías",
        publishedOn: "Publicado el",
        by: "por",
        shareOn: "Compartir en",
        nextPost: "Siguiente Post",
        previousPost: "Post Anterior"
      },
      footer: {
        allRightsReserved: "Todos los derechos reservados."
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
      navigation: {
        home: "Home",
        about: "Chi Siamo",
        backToHome: "← Torna alla Home"
      },
      blog: {
        readMore: "Leggi di più",
        relatedPosts: "Post Correlati",
        categories: "Categorie",
        publishedOn: "Pubblicato il",
        by: "da",
        shareOn: "Condividi su",
        nextPost: "Post Successivo",
        previousPost: "Post Precedente"
      },
      footer: {
        allRightsReserved: "Tutti i diritti riservati."
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
      navigation: {
        home: "Accueil",
        about: "À Propos",
        backToHome: "← Retour à l'Accueil"
      },
      blog: {
        readMore: "Lire la suite",
        relatedPosts: "Articles Connexes",
        categories: "Catégories",
        publishedOn: "Publié le",
        by: "par",
        shareOn: "Partager sur",
        nextPost: "Article Suivant",
        previousPost: "Article Précédent"
      },
      footer: {
        allRightsReserved: "Tous droits réservés."
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