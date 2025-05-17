
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface Case {
  id: string;
  title: string;
  category: "media" | "automation";
  description: string;
  results: string[];
  image: string;
  tags: string[];
}

const caseStudies: Case[] = [
  {
    id: "febracis-store",
    title: "Loja Virtual Febracis — Da Crise ao Crescimento Exponencial",
    category: "media",
    description: "Após 6 meses de prejuízo em mídia paga, implementou-se abordagens estratégicas alcançando R$77.000 em faturamento mensal (267% de crescimento) com ROAS de 963% usando Meta Ads e Google Ads.",
    results: ["267% de crescimento em receita", "963% ROAS", "Lucrativo após 6 meses de perdas"],
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Google Ads", "ROAS", "E-commerce"]
  },
  {
    id: "urban-effort",
    title: "Urban Effort — Do Zero ao Breakeven em 3 Meses",
    category: "media",
    description: "Marca americana de bonés que vendia apenas na Amazon criou canal próprio de vendas atingindo breakeven em menos de 90 dias com +291% de crescimento no faturamento através de campanhas estratégicas.",
    results: ["Breakeven em 90 dias", "291% de crescimento em receita", "Novo canal de vendas estabelecido"],
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Google Ads", "E-commerce"]
  },
  {
    id: "borogodo",
    title: "Borogodó Brasil — Reviravolta no Faturamento em 30 Dias",
    category: "media",
    description: "Após queda drástica nas vendas, estratégias focadas em Meta Ads alcançaram +36% em visitas únicas, +24% em vendas, +40% em receita e +13% em ticket médio em apenas um mês.",
    results: ["+36% em visitas únicas", "+24% em vendas", "+40% em receita", "+13% em ticket médio"],
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "E-commerce", "Receita"]
  },
  {
    id: "whatsapp-automation",
    title: "Automação de WhatsApp – +80% de atendimentos automatizados",
    category: "automation",
    description: "Solução de automação desenvolvida para atendimento via WhatsApp, com chatbot inteligente capaz de lidar com 80% das perguntas frequentes. Redução de 95% no tempo de resposta e aumento na satisfação do atendimento.",
    results: ["80% de atendimentos automatizados", "95% de redução no tempo de resposta", "Aumento na satisfação"],
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["WhatsApp API", "n8n", "NLP", "Chatbot"]
  },
  {
    id: "lead-scoring",
    title: "Sistema de Pontuação de Leads com IA – +65% de eficiência",
    category: "automation",
    description: "Sistema de pontuação de leads baseado em machine learning, treinado com padrões de comportamento de usuários reais. Melhorou a eficiência do time de vendas em 65%, priorizando leads com maior chance de conversão.",
    results: ["+65% de eficiência na equipe de vendas", "Maiores taxas de conversão", "Melhor qualidade de leads"],
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["n8n", "Supabase", "Machine Learning", "LLMs"]
  },
  {
    id: "tracking-system",
    title: "Smart Tracking com Meta API – +462% em conversas",
    category: "automation",
    description: "Implementação de rastreamento via ctwaclid para identificar com precisão os anúncios que geravam conversas no WhatsApp. Aumento de +462,16% no volume de conversas e redução de -81,34% no custo por mensagem enviada em uma semana.",
    results: ["+462% em conversas", "-81% no custo por mensagem", "Atribuição avançada"],
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Meta API", "n8n", "Supabase", "Analytics"]
  }
];

const Cases = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const filteredCases = activeTab === "all" 
    ? caseStudies 
    : caseStudies.filter(c => c.category === activeTab);
  
  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Início
          </Button>
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#1c3454]">
          Estudos de Caso
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[#6caddf]">
          Resultados reais alcançados com abordagens estratégicas e soluções inovadoras.
        </p>
        
        <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all" className="text-[#1c3454]">Todos os Casos</TabsTrigger>
            <TabsTrigger value="media" className="text-[#1c3454]">Mídia Paga</TabsTrigger>
            <TabsTrigger value="automation" className="text-[#1c3454]">Automação & IA</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseItem={caseItem} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="media" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseItem={caseItem} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="automation" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseItem={caseItem} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const CaseCard = ({ caseItem }: { caseItem: Case }) => {
  return (
    <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
      <div className="h-48 overflow-hidden">
        <img 
          src={caseItem.image} 
          alt={caseItem.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-[#1c3454]">{caseItem.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{caseItem.description}</p>
        <div className="mb-4">
          <h4 className="font-semibold text-[#6caddf] mb-2">Resultados:</h4>
          <ul className="list-disc pl-5">
            {caseItem.results.map((result, index) => (
              <li key={index} className="text-gray-600">{result}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {caseItem.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-[#6caddf]/10 text-[#6caddf] rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full text-[#6caddf] border-[#6caddf] hover:bg-[#6caddf] hover:text-white"
        >
          Ver Estudo Completo <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Cases;
