
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PortfolioSection } from "@/components/media-buying/PortfolioSection";
import { ContactSection } from "@/components/media-buying/ContactSection";

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const automationPortfolioItems: PortfolioItem[] = [
  {
    title: "Automação de WhatsApp – +80% de Solicitações Automatizadas",
    description: "Solução de automação desenvolvida para atendimento ao cliente via WhatsApp, com chatbot inteligente capaz de lidar com 80% das perguntas frequentes. Redução de 95% no tempo de resposta e aumento na satisfação do cliente. O sistema utiliza processamento de linguagem natural para identificar as intenções do cliente e fornecer respostas personalizadas, além de encaminhamento para assistência humana quando necessário, criando uma experiência fluida e eficiente.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["WhatsApp API", "n8n", "NLP", "Chatbot"]
  },
  {
    title: "Sistema de Lead Scoring com IA – +65% de Eficiência na Equipe de Vendas",
    description: "Sistema de pontuação de leads baseado em machine learning, treinado com padrões reais de comportamento do usuário. Melhorou a eficiência da equipe de vendas em 65%, priorizando leads com maior probabilidade de conversão. O modelo analisa mais de 20 variáveis comportamentais incluindo engajamento em campanhas de email, interações no site, histórico de compras e atividade em mídias sociais para determinar com precisão o potencial de cada lead.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["n8n", "Supabase", "Machine Learning", "LLMs"]
  },
  {
    title: "CRM Automático via WhatsApp – Integração em Tempo Real",
    description: "Sistema que cria automaticamente um novo cartão de lead no CRM assim que o primeiro contato no WhatsApp é iniciado. A integração usa FlutterFlow + Lovable + n8n e garante um fluxo 100% automatizado. A solução captura dados do usuário como nome, email e telefone, e os sincroniza em todas as plataformas, eliminando a necessidade de entrada manual de dados e garantindo consistência nas informações em todos os canais de atendimento.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["FlutterFlow", "Lovable", "n8n", "CRM"]
  },
  {
    title: "Rastreamento Inteligente com Meta API – +462% em Conversas no WhatsApp",
    description: "Implementação de rastreamento via ctwaclid para identificar com precisão anúncios que geraram conversas no WhatsApp. Aumento de 462,16% no volume de conversas e redução de 81,34% no custo por mensagem enviada em uma semana. Esta solução personalizada permite o rastreamento completo da jornada do cliente desde o clique no anúncio até a conversão final, fornecendo insights valiosos para otimização de campanhas e melhor alocação do orçamento de marketing.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Meta API", "n8n", "Supabase", "Analytics"]
  },
  {
    title: "Bot de Métricas no WhatsApp – Automação de Relatórios em Tempo Real",
    description: "Criação de um sistema que envia automaticamente métricas de campanhas do Meta e Google Ads para grupos de WhatsApp. Economia de tempo para a equipe, com dados confiáveis e entrega personalizada para cada grupo. Os relatórios são totalmente configuráveis, permitindo definir KPIs específicos para diferentes stakeholders, além de incluir alertas automáticos quando métricas importantes estão abaixo da meta, permitindo intervenções rápidas.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Meta API", "Google Ads API", "WhatsApp API", "n8n"]
  },
  {
    title: "Follow-up Automático – Recuperação de Leads com IA",
    description: "Sistema que identifica leads não respondidos no WhatsApp e dispara mensagens automáticas de follow-up. Melhora o tempo de reengajamento, reduz o abandono no funil e aumenta as conversões. A solução utiliza algoritmos de aprendizado para determinar os melhores horários e conteúdos para reengajamento, adaptando-se ao comportamento do usuário e histórico de interação, resultando em taxas de resposta significativamente maiores em comparação com abordagens padronizadas.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["n8n", "Supabase", "WhatsApp API", "Automação"]
  },
  {
    title: "Agentes de IA – Atendimento e Campanhas Automatizadas",
    description: "Criação de múltiplos agentes de IA: desde atendimento básico até análise profunda de campanhas de mídia paga. Um dos agentes é capaz de analisar dados, sugerir otimizações e até estruturar campanhas do Meta Ads com base nos resultados atuais. Os agentes são treinados com dados históricos de desempenho e melhores práticas do setor, permitindo decisões baseadas em evidências e recomendações contextuais que consideram o histórico específico de cada cliente.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["ChatGPT", "Langflow", "Relevance AI", "n8n"]
  },
  {
    title: "Sistema de QR Code com Instância Automatizada",
    description: "Desenvolvimento de uma plataforma que gera QR Codes únicos para cada cliente, ativando uma nova instância integrada via Evolution API. Permite a criação de ambientes personalizados com lógica pré-configurada para uso imediato. A solução é especialmente valiosa para eventos e campanhas multicanal, onde cada QR code direcionará o usuário para uma experiência personalizada com base em seu perfil e ponto de entrada na campanha.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Lovable", "Evolution API", "n8n"]
  },
  {
    title: "Site de Captura de Leads com Lovable – Portfólio com Rastreamento de Leads",
    description: "Landing page criada com Lovable focada em captação de leads para prestadores de serviço. Integrações de rastreamento e formulário com envio direto para CRM e WhatsApp. A solução inclui análise do comportamento do usuário no site para determinar interesses específicos, permitindo que o atendimento subsequente seja personalizado com base nas páginas visitadas e tempo gasto em cada seção, aumentando significativamente as taxas de conversão.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Lovable", "Webhooks", "CRM Personalizado"]
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen w-full relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6 hover:bg-white/10">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Início
          </Button>
        </Link>
        
        <div className="glass-card p-8 md:p-12 mb-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary-darker">
            Portfólio de Automação & IA
          </h1>
          <p className="text-lg md:text-xl text-primary-dark font-bold">
            Projetos inovadores combinando automação inteligente, IA e soluções no-code para transformar negócios.
          </p>
        </div>
        
        <PortfolioSection items={automationPortfolioItems} />
        
        <ContactSection
          title="Vamos Escalar Seu Negócio"
          description="Pronto para desbloquear o poder da IA, automação e estratégia de mídia paga? Vamos construir sua próxima campanha de alta performance."
          buttonText="Entre em Contato"
          contactPath="/pt/contact"
        />
      </div>
    </div>
  );
};

export default Portfolio;
