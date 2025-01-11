import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-celestial-50 to-celestial-200">
      <Link to="/" className="fixed top-8 left-8">
        <Button variant="outline" className="rounded-full">
          {t('navigation.backToHome')}
        </Button>
      </Link>

      <main className="max-w-4xl mx-auto px-8 py-20">
        <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-celestial-600 to-celestial-800 text-center">
          {t('navigation.about')}
        </h1>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            {t('welcome.description')}
          </p>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-semibold text-celestial-600">
              {t('blog.categories')}
            </h2>
            <p className="text-gray-700">
              {t('welcome.description')}
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-white/10 backdrop-blur-sm py-8 mt-20">
        <div className="max-w-screen-xl mx-auto px-8 text-center text-gray-600">
          <p>© 2024 Blog do Futuro. {t('footer.allRightsReserved')}</p>
        </div>
      </footer>
    </div>
  );
};

export default About;