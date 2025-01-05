import { ScrollArea } from "@/components/ui/scroll-area";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const fetchApplications = async () => {
  console.log("Fetching verse applications from Supabase...");
  const { data, error } = await supabase
    .from('verse_applications')
    .select('*')
    .order('id', { ascending: true });
  
  if (error) {
    console.error("Error fetching applications:", error);
    throw error;
  }
  
  console.log("Fetched applications:", data);
  return data;
};

export const VerseApplications = () => {
  const { data: applications, isLoading } = useQuery({
    queryKey: ['verse-applications'],
    queryFn: fetchApplications
  });

  if (isLoading) {
    return <div className="mt-8 text-center">Carregando aplicações...</div>;
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        50 maneiras de aplicar este versículo na sua vida:
      </h3>
      <ScrollArea className="h-[400px] rounded-md border p-4">
        <ol className="list-decimal list-inside space-y-2">
          {applications?.map((app) => (
            <li key={app.id} className="text-gray-700">
              {app.application}
            </li>
          ))}
        </ol>
      </ScrollArea>
    </div>
  );
};