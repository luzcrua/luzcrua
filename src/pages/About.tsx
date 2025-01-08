import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-celestial-50 to-celestial-200">
      <Link to="/" className="fixed top-8 left-8">
        <Button variant="outline" className="rounded-full">
          ← Voltar
        </Button>
      </Link>

      <main className="max-w-4xl mx-auto px-8 py-20">
        <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-celestial-600 to-celestial-800 text-center">
          Sobre o Blog do Futuro
        </h1>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            O Blog do Futuro é um espaço dedicado à exploração das últimas tendências em tecnologia,
            design e inovação. Nossa missão é trazer conteúdo relevante e inspirador com uma
            abordagem minimalista e futurista.
          </p>

          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Acreditamos que o futuro está sendo construído hoje, e queremos compartilhar essa
            jornada com você. Através de artigos cuidadosamente elaborados, buscamos inspirar
            e informar nossa comunidade sobre as transformações que estão moldando o amanhã.
          </p>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-semibold text-celestial-600">Nossa Visão</h2>
            <p className="text-gray-700">
              Ser a principal fonte de informação sobre tecnologia e design do futuro,
              sempre mantendo um olhar crítico e inovador sobre as transformações do mundo digital.
            </p>

            <h2 className="text-2xl font-semibold text-celestial-600">Nossa Missão</h2>
            <p className="text-gray-700">
              Democratizar o conhecimento sobre tecnologia e design através de conteúdo
              acessível e de qualidade, inspirando pessoas a participarem ativamente
              da construção do futuro.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-white/10 backdrop-blur-sm py-8 mt-20">
        <div className="max-w-screen-xl mx-auto px-8 text-center text-gray-600">
          <p>© 2024 Blog do Futuro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;