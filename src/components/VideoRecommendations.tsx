import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

interface Video {
  id: number;
  url: string;
  title: string;
}

const fetchRandomVideos = async () => {
  const { data, error } = await supabase
    .from('videos')
    .select('*')
    .order('random()')
    .limit(3);
  
  if (error) throw error;
  return data;
};

export const VideoRecommendations = () => {
  const { data: videos, isLoading } = useQuery({
    queryKey: ['recommendedVideos'],
    queryFn: fetchRandomVideos
  });

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Vídeos recomendados do Canal Luz Crua Oficial:
      </h3>
      {isLoading ? (
        <p className="text-gray-600">Carregando recomendações...</p>
      ) : (
        <div className="space-y-4">
          {videos?.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <p className="text-gray-800 font-medium">{video.title}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};