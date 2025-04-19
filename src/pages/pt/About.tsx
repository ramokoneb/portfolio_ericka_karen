import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Target, BrainCircuit, Bot, LineChart } from "lucide-react";

const About = () => {
  const expertiseAreas = [{
    title: "Mídia Paga e Performance",
    items: ["Meta Ads, Google Ads, TikTok Ads, Pinterest Ads", "Estratégias Full Funnel, otimização de ROAS e CAC", "Testes A/B, criativos adaptativos e campanhas de mensagens"]
  }, {
    title: "Automação e No-Code",
    items: ["n8n, Make, Zapier", "Integração entre WhatsApp, CRMs, APIs e plataformas de mídia", "FlutterFlow, Lovable, Supabase, Firebase"]
  }, {
    title: "IA e Lógica Inteligente",
    items: ["Agentes conversacionais e analíticos com LLMs", "IA para análise de campanhas e criação de criativos", "Scoring de leads, atendimento automatizado, otimização autônoma de anúncios"]
  }, {
    title: "Dados e Rastreamento",
    items: ["Meta Pixel, CAPI, Google Tag Manager", "ctwaclid, Supabase para tracking de campanhas", "Dashboards em Looker Studio e relatórios automatizados"]
  }];
  const achievements = ["+963% de ROAS com reestruturação de campanhas para e-commerce", "+462% de aumento em conversas no WhatsApp com tracking inteligente", "-118% de CPL para instituição de ensino usando Performance Max", "Break-even em 3 meses para marca internacional com canal de vendas próprio", "Automação completa de atendimento e follow-up com IA e no-code"];

  return <div className="min-h-screen bg-[#1A3554] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/pt">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Início
          </Button>
        </Link>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="w-48 h-48 rounded-full mx-auto overflow-hidden border-4 border-[#6CAAD9]">
              <img alt="Ericka Karen" className="w-full h-full object-cover" src="/lovable-uploads/c50dc637-9f5b-40f7-bf8a-adb3743f5ff8.png" />
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4 text-[#6CAAD9]">👩‍💻 Sobre Ericka Karen</h1>
            <p className="text-xl mb-6">Onde performance, tecnologia e criatividade se encontram para escalar negócios</p>
            <p className="text-lg mb-6">
              Com mais de uma década de experiência no marketing digital, sou uma profissional especializada em mídia paga, automação e inteligência artificial aplicada a negócios. Minha trajetória começou em 2014 na área criativa, com foco em conteúdo e redes sociais. Mas foi em 2019 que dei um passo estratégico: migrei para o universo da performance, onde comecei a construir soluções orientadas por dados para gerar resultados reais — de leads qualificados a faturamento exponencial.
            </p>
            <p className="text-lg">
              De lá pra cá, atendi empresas de diversos portes e segmentos, sempre com um objetivo claro: escalar negócios com inteligência.
            </p>
          </div>
        </div>

        <Card className="bg-[#1C3454] border-[#6CAAD9] mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-[#6CAAD9]">🎯 O que me move</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Eu acredito que o futuro da performance está na união entre dados, automação e tecnologia acessível. Por isso, desenvolvo soluções que conectam mídia paga, fluxos automatizados e agentes inteligentes de IA, otimizando a operação digital de ponta a ponta — da captação à conversão.
            </p>
          </CardContent>
        </Card>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-[#6CAAD9]">💼 Meus projetos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-[#1C3454] border-[#6CAAD9]">
              <CardHeader>
                <CardTitle>Zona de Conversão Digital</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Agência de performance especializada em campanhas de mídia paga com foco em ROI, escala e resultados mensuráveis. Além da gestão de tráfego, desenvolve soluções tecnológicas voltadas para o mercado de marketing digital, unindo performance, automação e inteligência de dados para pequenas e médias empresas.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#1C3454] border-[#6CAAD9]">
              <CardHeader>
                <CardTitle>Nocodeverse</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Laboratório de automação e inteligência artificial para negócios que querem escalar com tecnologia sem código. Cria soluções personalizadas com n8n, Make, Supabase e IA aplicada, otimizando processos, atendimento e tomada de decisão em diferentes áreas além do marketing.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-[#6CAAD9]">🧠 Expertise Técnica</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {expertiseAreas.map((area, index) => <Card key={index} className="bg-[#1C3454] border-[#6CAAD9]">
                <CardHeader>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    {area.items.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-[#6CAAD9]">📁 Resultados entregues</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => <Card key={index} className="bg-[#1C3454] border-[#6CAAD9]">
                <CardContent className="pt-6">
                  <p className="text-lg">{achievement}</p>
                </CardContent>
              </Card>)}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-[#6CAAD9]">🚀 O que posso construir com você</h2>
          <Card className="bg-[#1C3454] border-[#6CAAD9]">
            <CardContent className="pt-6">
              <p className="mb-4">Se você busca crescimento previsível, escalável e inteligente, posso ajudar você a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Escalar campanhas com foco em resultados</li>
                <li>Automatizar processos para ganhar tempo e reduzir erros</li>
                <li>Usar inteligência artificial para tomar decisões melhores e mais rápidas</li>
                <li>Conectar suas ferramentas, dados e canais em um só fluxo eficiente</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#6CAAD9]">🤝 Vamos conversar?</h2>
          <Card className="bg-[#1C3454] border-[#6CAAD9]">
            <CardContent className="pt-6">
              <p className="text-lg">
                Estou pronta para colaborar com empresas, startups ou agências que enxergam na tecnologia e na performance o caminho mais direto para o crescimento. Seja em português, inglês ou espanhol — vamos levar sua operação digital para o próximo nível.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>;
};

export default About;
