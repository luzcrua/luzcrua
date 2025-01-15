import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { translateArray, translateObject } from "@/services/translation";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const [translatedCategories, setTranslatedCategories] = useState<any[]>([]);
  const [translatedPosts, setTranslatedPosts] = useState<any[]>([]);
  
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await supabase.from('categories').select('*');
      if (error) throw error;
      return data;
    },
  });

  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select(`*, categories(*)`)
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    const translateContent = async () => {
      if (categories) {
        const translated = await translateArray(
          categories,
          i18n.language,
          ['name', 'description']
        );
        setTranslatedCategories(translated);
      }

      if (posts) {
        const translated = await translateArray(
          posts,
          i18n.language,
          ['title', 'excerpt']
        );
        
        const translatedWithCategories = await Promise.all(
          translated.map(async (post) => {
            if (post.categories) {
              post.categories = await translateObject(
                post.categories,
                i18n.language,
                ['name', 'description']
              );
            }
            return post;
          })
        );
        
        setTranslatedPosts(translatedWithCategories);
      }
    };

    translateContent();
  }, [categories, posts, i18n.language]);

  const mainCategories = [
    { id: 'quiz', name: 'Quiz', slug: 'quiz' },
    { id: 'lessons', name: 'Lições de Jesus', slug: 'licoes-de-jesus' },
    { id: 'stories', name: 'Histórias Bíblicas', slug: 'historias-biblicas' },
    { id: 'videos', name: 'Vídeos', slug: 'videos' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-celestial-100 to-celestial-300">
      <header className="py-6 px-8">
        <NavigationMenu className="max-w-screen-xl mx-auto">
          <NavigationMenuList className="space-x-8">
            <NavigationMenuItem>
              <Link to="/" className="text-lg font-medium hover:text-celestial-600 transition-colors">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className="text-lg font-medium hover:text-celestial-600 transition-colors">
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact" className="text-lg font-medium hover:text-celestial-600 transition-colors">
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      <main className="max-w-screen-xl mx-auto px-8 py-12">
        <section className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-celestial-500 to-celestial-700">
            Luz Crua
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Não perca o brilho que há dentro de você
          </p>
          <Button className="bg-celestial-500 hover:bg-celestial-600 text-white px-8 py-6 text-lg rounded-full transition-all transform hover:scale-105">
            {t('home.startButton')}
          </Button>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Categorias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainCategories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <h2 className="text-3xl font-bold mb-8 col-span-full text-center">
            {t('home.latestPosts')}
          </h2>
          {translatedPosts?.map((post) => (
            <Link
              key={post.id}
              to={`/post/${post.slug}`}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image_url || 'https://via.placeholder.com/800x400'}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-celestial-600 mb-2">
                  {post.categories?.name}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600">
                  {post.excerpt}
                </p>
                <Button variant="link" className="mt-4">
                  {t('blog.readMore')}
                </Button>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <footer className="bg-white/10 backdrop-blur-sm py-8">
        <div className="max-w-screen-xl mx-auto px-8 text-center text-gray-600">
          <p>© 2024 Luz Crua. {t('footer.allRightsReserved')}</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;