
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { ContactSection } from "@/components/media-buying/ContactSection";

const About = () => {
  const expertiseAreas = [{
    title: "Mídia Paga e Performance",
    items: ["Meta Ads, Google Ads, TikTok Ads, Pinterest Ads", "Estratégias de Funil Completo, otimização de ROAS e CAC", "Testes A/B, criativos adaptativos e campanhas de mensagem"]
  }, {
    title: "Automação e No-Code",
    items: ["n8n, Make, Zapier", "Integração entre WhatsApp, CRMs, APIs e plataformas de mídia", "FlutterFlow, Lovable, Supabase, Firebase"]
  }, {
    title: "IA e Lógica Inteligente",
    items: ["Agentes conversacionais e analíticos com LLMs", "IA para análise de campanhas e geração criativa", "Lead scoring, atendimento automatizado, otimização autônoma de anúncios"]
  }, {
    title: "Dados e Tracking",
    items: ["Meta Pixel, CAPI, Google Tag Manager", "ctwaclid, Supabase para rastreamento de campanhas", "Dashboards no Looker Studio e relatórios automatizados"]
  }];
  const achievements = ["+963% ROAS com reestruturação de campanha de e-commerce", "+462% aumento em conversas do WhatsApp com rastreamento inteligente", "-118% CPL para instituição educacional usando Performance Max", "Break-even em 3 meses para marca internacional com canal de vendas próprio", "Automação completa de atendimento e follow-up com IA e no-code"];

  return (
    <div className="min-h-screen w-full relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6 hover:bg-white/10">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Início
          </Button>
        </Link>

        <div className="glass-card p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8">
            <div className="flex justify-center md:justify-start">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden profile-image">
                <img 
                  alt="Ericka Karen" 
                  className="w-full h-full object-cover" 
                  src="/lovable-uploads/c50dc637-9f5b-40f7-bf8a-adb3743f5ff8.png" 
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-darker">Sobre Ericka Karen</h1>
              <p className="text-lg md:text-xl mb-4 text-primary-dark font-bold">Onde performance, tecnologia e criatividade se encontram para escalar negócios</p>
              <p className="text-base md:text-lg mb-4 text-primary-darker leading-relaxed">
                Com mais de uma década de experiência em marketing digital, sou uma profissional especializada em mídia paga, automação e inteligência artificial aplicada aos negócios. Minha jornada começou em 2014 na área criativa, com foco em conteúdo e mídias sociais. Mas foi em 2019 que dei um passo estratégico: migrei para o universo da performance, onde comecei a construir soluções orientadas por dados para gerar resultados reais — desde leads qualificados até receita exponencial.
              </p>
              <p className="text-base md:text-lg text-primary-darker leading-relaxed">
                Desde então, atendi empresas de diversos tamanhos e segmentos, sempre com um objetivo claro: escalar negócios com inteligência.
              </p>
            </div>
          </div>

          <Card className="mb-6 glass-card">
            <CardHeader>
              <CardTitle>O que me move</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base md:text-lg text-primary-darker leading-relaxed">
                Acredito que o futuro da performance está na união entre dados, automação e tecnologia acessível. Por isso, desenvolvo soluções que conectam mídia paga, fluxos automatizados e agentes inteligentes de IA, otimizando operações digitais de ponta a ponta — da captação de leads à conversão.
              </p>
            </CardContent>
          </Card>

          <section className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-darker">Meus projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Zona de Conversão Digital</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-darker">Agência de performance especializada em campanhas de mídia paga com foco em ROI, escala e resultados mensuráveis. Além da gestão de tráfego, desenvolve soluções tecnológicas voltadas para o mercado de marketing digital, combinando performance, automação e inteligência de dados para pequenas e médias empresas.</p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Nocodeverse</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-darker">Laboratório de automação e inteligência artificial para empresas que buscam escalar com tecnologia no-code. Cria soluções personalizadas com n8n, Make, Supabase e IA aplicada, otimizando processos, atendimento ao cliente e tomada de decisões em diferentes áreas além do marketing.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-darker">Expertise Técnica</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {expertiseAreas.map((area, index) => (
                <Card key={index} className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-primary-darker">
                      {area.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-darker">Resultados Entregues</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="glass-card">
                  <CardContent className="pt-6 text-primary-darker">
                    <p className="text-sm md:text-base">{achievement}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-darker">O que posso construir com você</h2>
            <Card className="glass-card">
              <CardContent className="pt-6">
                <p className="mb-4 text-primary-darker">Se você busca crescimento previsível, escalável e inteligente, posso ajudá-lo a:</p>
                <ul className="list-disc pl-6 space-y-2 text-primary-darker">
                  <li>Escalar campanhas com foco em resultados</li>
                  <li>Automatizar processos para economizar tempo e reduzir erros</li>
                  <li>Utilizar inteligência artificial para tomar decisões melhores e mais rápidas</li>
                  <li>Conectar suas ferramentas, dados e canais em um único fluxo eficiente</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-darker">Vamos conversar?</h2>
            <Card className="glass-card">
              <CardContent className="pt-6">
                <p className="text-lg text-primary-darker">
                  Estou pronta para colaborar com empresas, startups ou agências que enxergam a tecnologia e a performance como o caminho mais direto para o crescimento. Seja em português, inglês ou espanhol — vamos levar sua operação digital para o próximo nível.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
        
        <ContactSection
          title="Vamos Escalar Seu Negócio"
          description="Pronto para desbloquear o poder da IA, automação e estratégia de mídia paga? Vamos construir sua próxima campanha de alto desempenho."
          buttonText="Entre em Contato"
          contactPath="/pt/contact"
        />
      </div>
    </div>
  );
};

export default About;
