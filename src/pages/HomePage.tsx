import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const HomePage = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "O Futuro da Tecnologia",
      excerpt: "Como a IA está transformando nossas vidas",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1744&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Design Minimalista",
      excerpt: "A arte da simplicidade",
      image: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1740&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Inovação Digital",
      excerpt: "Tendências para 2024",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1740&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-celestial-100 to-celestial-300">
      <header className="py-6 px-8">
        <NavigationMenu className="max-w-screen-xl mx-auto">
          <NavigationMenuList className="space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg font-medium hover:text-celestial-600 transition-colors" href="/">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg font-medium hover:text-celestial-600 transition-colors" href="/about">
                Sobre
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      <main className="max-w-screen-xl mx-auto px-8 py-12">
        <section className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-celestial-500 to-celestial-700">
            Blog do Futuro
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explorando as fronteiras da tecnologia e design com um olhar minimalista e futurista.
          </p>
          <Button className="bg-celestial-500 hover:bg-celestial-600 text-white px-8 py-6 text-lg rounded-full transition-all transform hover:scale-105">
            Comece a Explorar
          </Button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {featuredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/post/${post.id}`}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <footer className="bg-white/10 backdrop-blur-sm py-8">
        <div className="max-w-screen-xl mx-auto px-8 text-center text-gray-600">
          <p>© 2024 Blog do Futuro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;