import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "react-i18next";
import { translateObject } from "@/services/translation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const BlogPost = () => {
  const { slug } = useParams();
  const { i18n, t } = useTranslation();
  const [translatedPost, setTranslatedPost] = useState<any>(null);

  const { data: post, isLoading } = useQuery({
    queryKey: ['post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select(`*, categories(*)`)
        .eq('slug', slug)
        .single();
      
      if (error) throw error;
      
      // Se não encontrou o post e o slug é específico, cria um novo
      if (!data && slug === "impacto-ia-sociedade") {
        const now = new Date().toISOString();
        const newPostId = crypto.randomUUID();
        
        const newPost = {
          id: newPostId,
          title: "O Impacto da IA na Sociedade Moderna",
          content: `A Inteligência Artificial (IA) está transformando rapidamente nossa sociedade de maneiras profundas e irreversíveis. Esta tecnologia revolucionária está presente em praticamente todos os aspectos de nossas vidas, desde assistentes virtuais em nossos smartphones até sistemas complexos de diagnóstico médico.

Na área da saúde, a IA está permitindo diagnósticos mais precisos e tratamentos personalizados. Algoritmos avançados podem analisar imagens médicas com uma precisão que rivaliza com especialistas humanos, e em alguns casos, até os supera.

No campo da educação, sistemas de aprendizado adaptativo estão personalizando a experiência educacional para cada estudante, identificando áreas de dificuldade e ajustando o conteúdo em tempo real.

No mercado de trabalho, a automação impulsionada pela IA está criando novos tipos de empregos enquanto transforma ou elimina outros. Isso levanta questões importantes sobre o futuro do trabalho e a necessidade de requalificação profissional.

Entretanto, junto com estes avanços, surgem desafios éticos significativos. Questões sobre privacidade, viés algorítmico e o impacto na desigualdade social precisam ser cuidadosamente consideradas e abordadas.

À medida que avançamos, é crucial encontrar um equilíbrio entre inovação tecnológica e valores humanos fundamentais. A IA deve ser desenvolvida e implementada de maneira que beneficie toda a sociedade, não apenas alguns segmentos dela.`,
          slug: "impacto-ia-sociedade",
          category_id: "1",
          excerpt: "Uma análise profunda sobre como a Inteligência Artificial está moldando nossa sociedade moderna e os desafios que precisamos enfrentar.",
          image_url: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
          created_at: now
        };

        const { error: insertError } = await supabase
          .from('posts')
          .insert([newPost]);

        if (insertError) throw insertError;
        
        return { 
          ...newPost, 
          categories: { 
            id: "1",
            name: "Tecnologia",
            created_at: now,
            description: null,
            slug: "tecnologia"
          } 
        };
      }
      
      return data;
    },
  });

  // Nova query para posts relacionados
  const { data: relatedPosts = [] } = useQuery({
    queryKey: ['relatedPosts', post?.category_id],
    enabled: !!post?.category_id,
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('category_id', post.category_id)
        .neq('id', post.id)
        .limit(3)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    const translateContent = async () => {
      if (!post) return;

      try {
        const translated = await translateObject(
          post,
          i18n.language,
          ['title', 'content', 'excerpt']
        );
        
        if (translated.categories) {
          translated.categories = await translateObject(
            translated.categories,
            i18n.language,
            ['name', 'description']
          );
        }

        setTranslatedPost(translated);
        console.log('Content translated successfully');
      } catch (error) {
        console.error('Error translating content:', error);
        setTranslatedPost(post);
        toast.error('Erro ao traduzir conteúdo');
      }
    };

    translateContent();
  }, [post, i18n.language]);

  if (isLoading || !translatedPost) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-celestial-50 to-celestial-200">
      <Link to="/" className="fixed top-8 left-8 z-10">
        <Button variant="outline" className="rounded-full">
          {t('navigation.backToHome')}
        </Button>
      </Link>

      <article className="max-w-3xl mx-auto px-8 py-20">
        <header className="text-center mb-12">
          <div className="text-celestial-600 mb-4">
            {translatedPost.categories?.name}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-celestial-600 to-celestial-800">
            {translatedPost.title}
          </h1>
          <div className="text-gray-600 mb-8">
            {new Date(translatedPost.created_at).toLocaleDateString(i18n.language, {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div className="rounded-2xl overflow-hidden mb-12">
            <img
              src={translatedPost.image_url}
              alt={translatedPost.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {translatedPost.content}
          </p>
        </div>
      </article>

      <section className="max-w-5xl mx-auto px-8 mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">{t('blog.relatedPosts')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((relatedPost) => (
            <Link
              key={relatedPost.id}
              to={`/post/${relatedPost.slug}`}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={relatedPost.image_url}
                  alt={relatedPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{relatedPost.title}</h3>
                <p className="text-gray-600">{relatedPost.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-white/10 backdrop-blur-sm py-8 mt-20">
        <div className="max-w-screen-xl mx-auto px-8 text-center text-gray-600">
          <p>© 2024 Blog do Futuro. {t('footer.allRightsReserved')}</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
