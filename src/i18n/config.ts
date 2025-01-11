import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      navigation: {
        home: "Início",
        about: "Sobre",
        backToHome: "← Voltar para Início"
      },
      home: {
        title: "Blog do Futuro",
        description: "Explorando ideias e compartilhando conhecimento",
        startButton: "Começar a Explorar"
      },
      categories: {
        technology: "Tecnologia",
        technologyDescription: "Novidades e análises do mundo da tecnologia",
        science: "Ciência",
        scienceDescription: "Descobertas e avanços científicos",
        culture: "Cultura",
        cultureDescription: "Arte, música e entretenimento"
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
      navigation: {
        home: "Home",
        about: "About",
        backToHome: "← Back to Home"
      },
      home: {
        title: "Future Blog",
        description: "Exploring ideas and sharing knowledge",
        startButton: "Start Exploring"
      },
      categories: {
        technology: "Technology",
        technologyDescription: "News and analysis from the tech world",
        science: "Science",
        scienceDescription: "Scientific discoveries and advances",
        culture: "Culture",
        cultureDescription: "Art, music and entertainment"
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
      navigation: {
        home: "Inicio",
        about: "Acerca de",
        backToHome: "← Volver al Inicio"
      },
      home: {
        title: "Blog del Futuro",
        description: "Explorando ideas y compartiendo conocimiento",
        startButton: "Empezar a Explorar"
      },
      categories: {
        technology: "Tecnología",
        technologyDescription: "Novedades y análisis del mundo de la tecnología",
        science: "Ciencia",
        scienceDescription: "Descubrimientos y avances científicos",
        culture: "Cultura",
        cultureDescription: "Arte, música y entretenimiento"
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
      navigation: {
        home: "Home",
        about: "Chi Siamo",
        backToHome: "← Torna alla Home"
      },
      home: {
        title: "Blog del Futuro",
        description: "Esplorando idee e condividendo conoscenza",
        startButton: "Inizia a Esplorare"
      },
      categories: {
        technology: "Tecnologia",
        technologyDescription: "Novità e analisi dal mondo della tecnologia",
        science: "Scienza",
        scienceDescription: "Scoperte e progressi scientifici",
        culture: "Cultura",
        cultureDescription: "Arte, musica e intrattenimento"
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
      navigation: {
        home: "Accueil",
        about: "À Propos",
        backToHome: "← Retour à l'Accueil"
      },
      home: {
        title: "Blog du Futur",
        description: "Explorer des idées et partager des connaissances",
        startButton: "Commencer à Explorer"
      },
      categories: {
        technology: "Technologie",
        technologyDescription: "Actualités et analyses du monde de la technologie",
        science: "Science",
        scienceDescription: "Découvertes et avancées scientifiques",
        culture: "Culture",
        cultureDescription: "Art, musique et divertissement"
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