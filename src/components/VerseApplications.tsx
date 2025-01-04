import { ScrollArea } from "@/components/ui/scroll-area";

const applications = [
  "Medite neste versículo durante seu tempo devocional matinal",
  "Escreva o versículo em um cartão e coloque em um lugar visível",
  "Compartilhe o versículo com alguém que precisa de encorajamento",
  "Memorize o versículo durante a semana",
  "Use o versículo como base para suas orações diárias",
  "Reflita sobre como este versículo se aplica às suas decisões diárias",
  "Crie uma arte ou desenho inspirado neste versículo",
  "Discuta o significado deste versículo com amigos ou família",
  "Use o versículo como lembrete quando enfrentar desafios",
  "Faça uma lista de situações onde este versículo pode te guiar",
  "Escreva em seu diário como este versículo fala à sua vida",
  "Use como base para um momento de gratidão diário",
  "Aplique os princípios deste versículo em seu trabalho",
  "Compartilhe nas redes sociais para inspirar outros",
  "Use como tema para um estudo bíblico pessoal",
  "Pratique os valores expressos no versículo em suas relações",
  "Crie metas pessoais baseadas neste versículo",
  "Use como inspiração para atos de bondade",
  "Reflita sobre como este versículo pode melhorar seus relacionamentos",
  "Aplique os ensinamentos em situações de conflito",
  "Use como base para decisões importantes",
  "Compartilhe com alguém que está passando por dificuldades",
  "Faça uma análise de como sua vida reflete este versículo",
  "Use como tema para um momento de adoração",
  "Aplique em situações de estresse ou ansiedade",
  "Reflita sobre como este versículo pode transformar seu caráter",
  "Use como base para perdoar alguém",
  "Aplique os princípios em sua vida familiar",
  "Use como inspiração para servir aos outros",
  "Reflita sobre como este versículo pode guiar suas escolhas",
  "Aplique em momentos de dúvida ou incerteza",
  "Use como base para desenvolver virtudes",
  "Compartilhe em um grupo de estudo bíblico",
  "Aplique os ensinamentos em sua vida profissional",
  "Use como tema para um projeto criativo",
  "Reflita sobre como este versículo pode fortalecer sua fé",
  "Aplique em situações de tentação",
  "Use como base para estabelecer prioridades",
  "Compartilhe com alguém que precisa de esperança",
  "Aplique os princípios em suas finanças",
  "Use como inspiração para mudanças positivas",
  "Reflita sobre como este versículo pode melhorar sua comunidade",
  "Aplique em momentos de celebração",
  "Use como base para agradecer a Deus",
  "Compartilhe em momentos de aconselhamento",
  "Aplique os ensinamentos em seu ministério",
  "Use como tema para um momento de intercessão",
  "Reflita sobre como este versículo pode impactar futuras gerações",
  "Aplique em sua vida devocional diária",
  "Use como base para testemunhar sua fé"
];

export const VerseApplications = () => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        50 maneiras de aplicar este versículo na sua vida:
      </h3>
      <ScrollArea className="h-[400px] rounded-md border p-4">
        <ol className="list-decimal list-inside space-y-2">
          {applications.map((application, index) => (
            <li key={index} className="text-gray-700">
              {application}
            </li>
          ))}
        </ol>
      </ScrollArea>
    </div>
  );
};
