
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PortfolioSection } from "@/components/media-buying/PortfolioSection";
import { ContactSection } from "@/components/media-buying/ContactSection";

interface CaseItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const mediaBuyingCases: CaseItem[] = [
  {
    title: "Loja Virtual Febracis — Da Crise ao Crescimento Exponencial",
    description: "Após 6 meses de prejuízos em mídia paga, implementamos abordagens estratégicas alcançando R$77.000 em receita mensal (crescimento de 267%) com 963% de ROAS. A estratégia envolveu uma revisão completa da estrutura de campanha, segmentação avançada de público e implementação de um sistema de rastreamento personalizado que permitiu otimização precisa do orçamento de mídia, resultando em uma transformação completa dos resultados do e-commerce.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Google Ads", "ROAS", "E-commerce"]
  },
  {
    title: "Urban Effort — De Zero ao Ponto de Equilíbrio em 3 Meses",
    description: "Marca americana de chapéus vendendo apenas na Amazon criou seu próprio canal de vendas atingindo o ponto de equilíbrio em menos de 90 dias com +291% de crescimento nas receitas. Desenvolvemos uma estratégia multicanal focada na construção de consciência de marca e conversão direta, usando Meta Ads e Google Ads de forma sincronizada para alcançar clientes potenciais em diferentes momentos da jornada de compra.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Google Ads", "E-commerce"]
  },
  {
    title: "Borogodó Brasil — Recuperação de Receita em 30 Dias",
    description: "Após uma queda drástica nas vendas, estratégias focadas de Meta Ads alcançaram +36% de visitas únicas, +24% de vendas, +40% de receita e +13% de ticket médio em apenas um mês. A abordagem incluiu uma reestruturação completa de campanhas com foco na segmentação por interesses e comportamento, criação de funis específicos para diferentes categorias de produtos e implementação de remarketing avançado para recuperação de carrinhos abandonados.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "E-commerce", "Receita"]
  },
  {
    title: "Vamos — +50% em Vendas com Aquisição Inteligente",
    description: "Empresa de aluguel de veículos pesados escalou sua base de clientes com segmentação geográfica e demográfica direcionada, alcançando +50% em vendas em um único mês. A estratégia envolveu mapeamento detalhado de clientes potenciais por região, criação de campanhas geolocalizadas com mensagens personalizadas por setor, e um sistema de qualificação de leads que priorizava contatos com maior probabilidade de fechamento.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Geração de Leads", "Vendas"]
  },
  {
    title: "Unileão — 118% de Redução no CPL com Performance Max",
    description: "Instituição educacional otimizou a geração de leads com campanhas Performance Max, alcançando 118% de redução no custo por lead e ROI positivo no primeiro mês. O projeto incluiu implementação avançada do Google Ads com foco em Performance Max, criação de ativos criativos otimizados para diferentes segmentos de público, integração com CRM para rastreamento de conversão de matrículas e otimização contínua baseada em dados de qualidade de leads.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Google Ads", "Educação", "Performance Max"]
  },
  {
    title: "Rastreamento Inteligente de WhatsApp — +462% em Conversas",
    description: "Implementação de rastreamento via ctwaclid em campanhas de Meta Ads levou a um aumento de +462,16% em conversas iniciadas e redução de 81,34% no custo por mensagem enviada em apenas uma semana. O sistema personalizado permitiu identificação precisa da origem dos leads de WhatsApp, possibilitando otimização e escalabilidade em campanhas focadas em custo por conversa iniciada, além de melhor atribuição de resultados.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "WhatsApp", "Rastreamento"]
  }
];

const Cases = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6 bg-[#6caddf]/10 text-[#1c3454] hover:bg-[#6caddf]/20 transition-colors">
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

export default Cases;
