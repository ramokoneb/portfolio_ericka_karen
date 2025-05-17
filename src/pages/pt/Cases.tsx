
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PortfolioSection } from "@/components/media-buying/PortfolioSection";

interface CaseItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const mediaBuyingCases: CaseItem[] = [
  {
    title: "Loja Virtual Febracis — Da Crise ao Crescimento Exponencial",
    description: "Após 6 meses de prejuízo em mídia paga, implementamos abordagens estratégicas alcançando R$77.000 em faturamento mensal (267% de crescimento) com ROAS de 963%. A estratégia envolveu revisão completa da estrutura de campanhas, segmentação avançada de públicos e implementação de um sistema de tracking personalizado que permitiu otimização precisa do orçamento de mídia, resultando em uma transformação completa dos resultados do e-commerce.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Google Ads", "ROAS", "E-commerce"]
  },
  {
    title: "Urban Effort — Do Zero ao Breakeven em 3 Meses",
    description: "Marca americana de bonés que vendia apenas na Amazon criou canal próprio de vendas atingindo breakeven em menos de 90 dias com +291% de crescimento no faturamento. Desenvolvemos uma estratégia multicanal focada em construção de reconhecimento de marca e conversão direta, utilizando Meta Ads e Google Ads de forma sincronizada para atingir potenciais clientes em diferentes momentos da jornada de compra.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Google Ads", "E-commerce"]
  },
  {
    title: "Borogodó Brasil — Reviravolta no Faturamento em 30 Dias",
    description: "Após queda drástica nas vendas, estratégias focadas em Meta Ads alcançaram +36% em visitas únicas, +24% em vendas, +40% em receita e +13% em ticket médio em apenas um mês. A abordagem incluiu reestruturação completa das campanhas com foco em segmentação por interesse e comportamento, criação de funis específicos para diferentes categorias de produtos e implementação de retargeting avançado para recuperação de carrinhos abandonados.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "E-commerce", "Faturamento"]
  },
  {
    title: "Vamos — +50% nas Vendas com Aquisição Inteligente",
    description: "Empresa de aluguel de veículos pesados escalou sua base de clientes com segmentação geográfica e demográfica direcionada, alcançando +50% nas vendas em um único mês. A estratégia envolveu mapeamento detalhado dos potenciais clientes por região, criação de campanhas geo-localizadas com mensagens personalizadas por setor de atuação e um sistema de qualificação de leads que priorizava contatos com maior probabilidade de fechamento.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Geração de Leads", "Vendas"]
  },
  {
    title: "Unileão — Redução de 118% no CPL com Performance Max",
    description: "Instituição educacional otimizou captação de leads com campanhas Performance Max, alcançando 118% de redução no custo por lead e ROI positivo já no primeiro mês. O projeto incluiu implementação avançada do Google Ads com foco em Performance Max, criação de creative assets otimizados para diferentes segmentos de público, integração com CRM para acompanhamento de conversão em matrículas e otimização contínua baseada em dados de qualidade dos leads.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Google Ads", "Educação", "Performance Max"]
  },
  {
    title: "Rastreamento Inteligente no WhatsApp — +462% em Conversas",
    description: "Implementação de rastreamento via ctwaclid nas campanhas de Meta Ads levou a um aumento de +462,16% nas conversas iniciadas e redução de 81,34% no custo por mensagem enviada em apenas uma semana. O sistema personalizado permitiu identificação precisa da origem dos leads de WhatsApp, possibilitando otimização e escalabilidade nas campanhas com foco em custo por conversa iniciada, além de melhor atribuição de resultados.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "WhatsApp", "Rastreamento"]
  }
];

const Cases = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Início
          </Button>
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#1c3454]">
          Casos de Sucesso em Mídia Paga
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[#6caddf]">
          Resultados reais alcançados com abordagens estratégicas e soluções inovadoras.
        </p>
        
        <PortfolioSection items={mediaBuyingCases} />
      </div>
    </div>
  );
};

export default Cases;
