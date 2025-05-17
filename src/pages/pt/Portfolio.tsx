
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PortfolioCard } from "@/components/automation/PortfolioCard";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const automationPortfolioItems: PortfolioItem[] = [
  {
    id: "whatsapp-automation",
    title: "WhatsApp Automation – +80% de demandas automatizadas",
    description: "Solução de automação desenvolvida para atendimento via WhatsApp, com chatbot inteligente capaz de lidar com 80% das perguntas frequentes. Redução de 95% no tempo de resposta e aumento na satisfação do atendimento. O sistema utiliza processamento de linguagem natural para identificar intenções dos clientes e fornecer respostas personalizadas, além de encaminhar para atendimento humano quando necessário, criando uma experiência fluida e eficiente.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["WhatsApp API", "n8n", "NLP", "Chatbot"]
  },
  {
    id: "ai-lead-scoring",
    title: "AI Lead Scoring System – +65% de eficiência no time comercial",
    description: "Sistema de pontuação de leads baseado em machine learning, treinado com padrões de comportamento de usuários reais. Melhorou a eficiência do time de vendas em 65%, priorizando leads com maior chance de conversão. O modelo analisa mais de 20 variáveis comportamentais incluindo engajamento em campanhas de email, interações com site, histórico de compras e atividade em mídias sociais para determinar com precisão o potencial de cada lead.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["n8n", "Supabase", "Machine Learning", "LLMs"]
  },
  {
    id: "crm-automation",
    title: "CRM Automático via WhatsApp – Integração em tempo real",
    description: "Sistema que cria automaticamente um card de novo lead no CRM assim que o primeiro contato no WhatsApp é iniciado. A integração utiliza FlutterFlow + Lovable + n8n e garante um fluxo 100% automatizado. A solução captura dados do usuário como nome, email e telefone, e os sincroniza entre todas as plataformas, eliminando a necessidade de entrada manual de dados e garantindo consistência nas informações em todos os canais de atendimento.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["FlutterFlow", "Lovable", "n8n", "CRM"]
  },
  {
    id: "smart-tracking",
    title: "Smart Tracking com Meta API – +462% em conversas no WhatsApp",
    description: "Implementação de rastreamento via ctwaclid para identificar com precisão os anúncios que geravam conversas no WhatsApp. Aumento de +462,16% no volume de conversas e redução de -81,34% no custo por mensagem enviada em uma semana. Esta solução personalizada permite rastreamento completo da jornada do cliente desde o clique no anúncio até a conversão final, fornecendo insights valiosos para otimização de campanhas e melhor alocação de orçamento de marketing.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Meta API", "n8n", "Supabase", "Analytics"]
  },
  {
    id: "metrics-bot",
    title: "Bot de Métricas para WhatsApp – Automação de relatórios em tempo real",
    description: "Criação de um sistema que envia automaticamente as métricas de campanhas Meta e Google Ads para grupos de WhatsApp. Economia de tempo da equipe, com dados confiáveis e envio personalizado para cada grupo. Os relatórios são totalmente configuráveis, permitindo definir KPIs específicos para diferentes stakeholders, além de incluir alertas automáticos quando métricas importantes estão abaixo da meta, permitindo intervenções rápidas.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Meta API", "Google Ads API", "WhatsApp API", "n8n"]
  },
  {
    id: "auto-followup",
    title: "Follow-up Automático – Recuperação de leads com IA",
    description: "Sistema que identifica leads não respondidos no WhatsApp e aciona mensagens de follow-up automáticas. Melhora o tempo de reengajamento, reduz o abandono de funil e aumenta conversões. A solução utiliza algoritmos de aprendizado para determinar os melhores momentos e conteúdos para reengajamento, adaptando-se ao comportamento do usuário e histórico de interações, resultando em taxas de resposta significativamente maiores comparadas a abordagens padronizadas.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["n8n", "Supabase", "WhatsApp API", "Automação"]
  },
  {
    id: "ai-agents",
    title: "Agentes de IA – Atendimento e campanhas automatizadas",
    description: "Criação de múltiplos agentes de IA: desde atendimento básico até análise profunda de campanhas de mídia paga. Um dos agentes é capaz de analisar dados, sugerir otimizações e até estruturar campanhas em Meta Ads com base nos resultados atuais. Os agentes são treinados com dados históricos de performance e melhores práticas do setor, permitindo decisões baseadas em evidências e recomendações contextuais que consideram o histórico específico de cada cliente.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["ChatGPT", "Langflow", "Relevance AI", "n8n"]
  },
  {
    id: "qr-system",
    title: "Sistema de QR Code com Instância Automatizada",
    description: "Desenvolvimento de plataforma que gera QR Codes únicos para cada cliente, ativando uma nova instância integrada via Evolution API. Permite criação de ambientes personalizados com lógica pré-configurada para uso imediato. A solução é especialmente valiosa para eventos e campanhas multicanal, onde cada QR code direcionará o usuário para uma experiência personalizada com base em seu perfil e ponto de entrada na campanha.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Lovable", "Evolution API", "n8n"]
  },
  {
    id: "lead-capture",
    title: "Site de Captação com Lovable – Portfólio com Lead Tracking",
    description: "Landing page criada com Lovable com foco em captação de leads para prestação de serviços. Integrações de tracking e formulário com envio direto ao CRM e ao WhatsApp. A solução inclui análise de comportamento do usuário no site para determinar interesses específicos, permitindo que o atendimento subsequente seja personalizado com base nas páginas visitadas e tempo gasto em cada seção, aumentando significativamente as taxas de conversão.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Lovable", "Webhooks", "CRM personalizado"]
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Início
          </Button>
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#1c3454]">
          Portfólio de Automação & IA
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[#6caddf]">
          Projetos inovadores que combinam automação inteligente, IA e soluções no-code para transformar negócios.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationPortfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
