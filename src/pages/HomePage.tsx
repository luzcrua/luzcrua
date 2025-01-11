import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-celestial-100 to-celestial-300">
      <header className="py-6 px-8">
        <NavigationMenu className="max-w-screen-xl mx-auto">
          <NavigationMenuList className="space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg font-medium hover:text-celestial-600 transition-colors" href="/">
                {t('navigation.home')}
              </NavigationMenuLink>
            </NavigationMenuItem>
            {categories?.map((category) => (
              <NavigationMenuItem key={category.id}>
                <NavigationMenuLink 
                  className="text-lg font-medium hover:text-celestial-600 transition-colors" 
                  href={`/category/${category.slug}`}
                >
                  {category.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg font-medium hover:text-celestial-600 transition-colors" href="/about">
                {t('navigation.about')}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      <main className="max-w-screen-xl mx-auto px-8 py-12">
        <section className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-celestial-500 to-celestial-700">
            {t('welcome.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('welcome.description')}
          </p>
          <Button className="bg-celestial-500 hover:bg-celestial-600 text-white px-8 py-6 text-lg rounded-full transition-all transform hover:scale-105">
            {t('welcome.startButton')}
          </Button>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('blog.categories')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories?.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {posts?.map((post) => (
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
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
          <p>© 2024 Blog do Futuro. {t('footer.allRightsReserved')}</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;