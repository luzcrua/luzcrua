import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

export const VerseApplications = () => {
  const { data: applications, isLoading, error } = useQuery({
    queryKey: ['verse-applications'],
    queryFn: async () => {
      console.log('Fetching verse applications...');
      const { data, error } = await supabase
        .from('verse_applications')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (error) {
        console.error('Error fetching verse applications:', error);
        throw error;
      }
      
      console.log('Verse applications fetched:', data);
      return data;
    }
  });

  if (error) {
    console.error('Error in VerseApplications component:', error);
    return (
      <div className="text-center p-4 bg-red-50 rounded-lg">
        <p className="text-red-600">Ocorreu um erro ao carregar as aplicações do versículo.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          50 Maneiras de Aplicar este Versículo
        </h3>
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-16 w-full bg-gray-200 rounded" />
        ))}
      </div>
    );
  }

  return (
    <div className="animate-fade-up">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        50 Maneiras de Aplicar este Versículo
      </h3>
      <div className="space-y-4">
        {applications?.map((app, index) => (
          <div
            key={app.id}
            className="p-4 bg-white rounded-lg shadow-sm border border-celestial-100 hover:border-celestial-300 transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-celestial-100 text-celestial-600 rounded-full font-semibold">
                {index + 1}
              </span>
              <p className="text-gray-700 leading-relaxed">{app.application}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};