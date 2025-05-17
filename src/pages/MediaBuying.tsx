
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, BrainCircuit, Link2, Database, Settings, LineChart } from "lucide-react";

const MediaBuying = () => {
  const [language, setLanguage] = useState<"en" | "pt" | "es">("en");
  
  const content = {
    en: {
      title: "🚀 Paid Media Services Powered by Technology",
      subtitle: "Strategic Growth through Data, AI & Automation",
      description: "Hi! I'm Ericka Karen, a Paid Media Strategist who leverages cutting-edge technology, automation, and AI to turn your advertising investments into scalable, predictable growth engines.",
      experience: "Built on over 5 years of experience managing paid campaigns across Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads, and Pinterest Ads.",
      backButton: "Back to Home",
      contactButton: "Contact Me",
      whatIDeliverTitle: "What I Deliver:",
      whyChooseMeTitle: "Why Choose Me?",
      technologiesTitle: "Technologies I Master:",
      clientFeedbackTitle: "Client Feedback:",
      callToAction: "Let's leverage the power of technology and paid media strategy to accelerate your growth!",
      services: [
        {
          icon: <BrainCircuit className="h-10 w-10 text-[#6caddf]" />,
          title: "Strategic Paid Media Planning",
          description: "Campaigns designed for qualified traffic, lead generation, and sales growth aligned to your unique business objectives."
        },
        {
          icon: <Database className="h-10 w-10 text-[#6caddf]" />,
          title: "Advanced Tracking & Analytics",
          description: "Seamless integration of Google Analytics 4, Meta Conversion API, and industry-leading tracking tech."
        },
        {
          icon: <Settings className="h-10 w-10 text-[#6caddf]" />,
          title: "Tech-Driven Automation",
          description: "Using no-code tools to automate campaign reporting, alerts, and workflows — saving you time and increasing agility."
        },
        {
          icon: <Link2 className="h-10 w-10 text-[#6caddf]" />,
          title: "Cross-Channel Management",
          description: "Integrated management of paid media across multiple platforms to maximize reach and conversion."
        }
      ],
      whyChooseMe: [
        "Hands-on career managing campaigns with monthly budgets exceeding $500K, delivering consistent 3x-4x growth in revenue for clients.",
        "Unique combination of marketing strategy expertise and technical skills that bridge paid media with automation and AI innovation.",
        "Proven ability to reduce cost per lead and increase return on ad spend using data, technology, and continuous optimization.",
        "Proactive and collaborative communication style — you'll always know the status and insights of your campaigns."
      ],
      testimonials: [
        {
          text: "Ericka Karen is a dedicated professional with strong expertise in paid media and sales through media platforms, with a particular focus on Google.",
          author: "Henri Tex"
        },
        {
          text: "An extremely competent and dedicated professional. She actively seeks out and applies market innovations in her daily work.",
          author: "Amanda Carvalho"
        }
      ]
    },
    pt: {
      title: "🚀 Serviços de Mídia Paga Potencializados por Tecnologia",
      subtitle: "Crescimento Estratégico através de Dados, IA e Automação",
      description: "Olá! Sou Ericka Karen, uma Estrategista de Mídia Paga que utiliza tecnologia de ponta, automação e IA para transformar seus investimentos em publicidade em motores de crescimento escaláveis e previsíveis.",
      experience: "Com mais de 5 anos de experiência gerenciando campanhas pagas no Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads e Pinterest Ads.",
      backButton: "Voltar para Início",
      contactButton: "Entre em Contato",
      whatIDeliverTitle: "O Que Eu Entrego:",
      whyChooseMeTitle: "Por Que Me Escolher?",
      technologiesTitle: "Tecnologias que Domino:",
      clientFeedbackTitle: "Feedback de Clientes:",
      callToAction: "Vamos aproveitar o poder da tecnologia e da estratégia de mídia paga para acelerar seu crescimento!",
      services: [
        {
          icon: <BrainCircuit className="h-10 w-10 text-[#6caddf]" />,
          title: "Planejamento Estratégico de Mídia",
          description: "Campanhas projetadas para tráfego qualificado, geração de leads e crescimento de vendas alinhados aos seus objetivos de negócio."
        },
        {
          icon: <Database className="h-10 w-10 text-[#6caddf]" />,
          title: "Rastreamento e Análise Avançada",
          description: "Integração perfeita do Google Analytics 4, API de Conversão do Meta e tecnologia de rastreamento líder do setor."
        },
        {
          icon: <Settings className="h-10 w-10 text-[#6caddf]" />,
          title: "Automação Tecnológica",
          description: "Usando ferramentas no-code para automatizar relatórios, alertas e fluxos de trabalho — economizando tempo e aumentando agilidade."
        },
        {
          icon: <Link2 className="h-10 w-10 text-[#6caddf]" />,
          title: "Gerenciamento Multicanal",
          description: "Gerenciamento integrado de mídia paga em múltiplas plataformas para maximizar alcance e conversão."
        }
      ],
      whyChooseMe: [
        "Carreira prática gerenciando campanhas com orçamentos mensais superiores a $500K, entregando crescimento consistente de 3x-4x em receita para clientes.",
        "Combinação única de expertise em estratégia de marketing e habilidades técnicas que unem mídia paga com automação e inovação em IA.",
        "Capacidade comprovada de reduzir custo por lead e aumentar retorno sobre investimento usando dados, tecnologia e otimização contínua.",
        "Estilo de comunicação proativo e colaborativo — você sempre saberá o status e os insights das suas campanhas."
      ],
      testimonials: [
        {
          text: "Ericka Karen é uma profissional dedicada com forte expertise em mídia paga e vendas através de plataformas de mídia, com foco particular no Google.",
          author: "Henri Tex"
        },
        {
          text: "Uma profissional extremamente competente e dedicada. Ela busca ativamente e aplica inovações do mercado em seu trabalho diário.",
          author: "Amanda Carvalho"
        }
      ]
    },
    es: {
      title: "🚀 Servicios de Medios Pagos Impulsados por Tecnología",
      subtitle: "Crecimiento Estratégico a través de Datos, IA y Automatización",
      description: "¡Hola! Soy Ericka Karen, una Estratega de Medios Pagos que aprovecha tecnología de vanguardia, automatización e IA para convertir tus inversiones publicitarias en motores de crecimiento escalables y predecibles.",
      experience: "Con más de 5 años de experiencia gestionando campañas pagas en Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads y Pinterest Ads.",
      backButton: "Volver al Inicio",
      contactButton: "Contáctame",
      whatIDeliverTitle: "Lo Que Ofrezco:",
      whyChooseMeTitle: "¿Por Qué Elegirme?",
      technologiesTitle: "Tecnologías que Domino:",
      clientFeedbackTitle: "Opiniones de Clientes:",
      callToAction: "¡Aprovechemos el poder de la tecnología y la estrategia de medios pagos para acelerar tu crecimiento!",
      services: [
        {
          icon: <BrainCircuit className="h-10 w-10 text-[#6caddf]" />,
          title: "Planificación Estratégica de Medios",
          description: "Campañas diseñadas para tráfico calificado, generación de leads y crecimiento de ventas alineados con tus objetivos de negocio."
        },
        {
          icon: <Database className="h-10 w-10 text-[#6caddf]" />,
          title: "Seguimiento y Análisis Avanzado",
          description: "Integración perfecta de Google Analytics 4, API de Conversión de Meta y tecnología de seguimiento líder en la industria."
        },
        {
          icon: <Settings className="h-10 w-10 text-[#6caddf]" />,
          title: "Automatización Tecnológica",
          description: "Usando herramientas no-code para automatizar informes de campaña, alertas y flujos de trabajo — ahorrando tiempo y aumentando agilidad."
        },
        {
          icon: <Link2 className="h-10 w-10 text-[#6caddf]" />,
          title: "Gestión Multicanal",
          description: "Gestión integrada de medios pagos en múltiples plataformas para maximizar el alcance y la conversión."
        }
      ],
      whyChooseMe: [
        "Carrera práctica gestionando campañas con presupuestos mensuales que superan los $500K, generando un crecimiento constante de 3x a 4x en ingresos para clientes.",
        "Combinación única de experiencia en estrategia de marketing y habilidades técnicas que unen los medios pagos con la automatización y la innovación en IA.",
        "Capacidad comprobada para reducir el costo por lead y aumentar el retorno de inversión utilizando datos, tecnología y optimización continua.",
        "Estilo de comunicación proactivo y colaborativo — siempre sabrás el estado y las perspectivas de tus campañas."
      ],
      testimonials: [
        {
          text: "Ericka Karen es una profesional dedicada con gran experiencia en medios pagos y ventas a través de plataformas de medios, con un enfoque particular en Google.",
          author: "Henri Tex"
        },
        {
          text: "Una profesional extremadamente competente y dedicada. Busca activamente y aplica innovaciones del mercado en su trabajo diario.",
          author: "Amanda Carvalho"
        }
      ]
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => {
      if (prev === "en") return "pt";
      if (prev === "pt") return "es";
      return "en";
    });
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      <div className="absolute top-4 right-4">
        <Button 
          variant="outline" 
          className="rounded-full bg-[#6caddf] text-white hover:bg-[#5a9ac8]" 
          onClick={toggleLanguage}
        >
          {language === "en" ? "PT" : language === "pt" ? "ES" : "EN"}
        </Button>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> {content[language].backButton}
          </Button>
        </Link>
        
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-[#1c3454]">
          {content[language].title}
        </h1>
        <p className="text-lg md:text-xl mb-4 md:mb-6 text-[#6caddf]">
          {content[language].subtitle}
        </p>
        
        <div className="p-4 md:p-6 rounded-lg mb-8 md:mb-12 bg-[#6caddf]">
          <p className="text-base md:text-lg text-[#1c3454] mb-3 md:mb-4">
            {content[language].description}
          </p>
          <p className="text-base md:text-lg text-[#1c3454]">
            {content[language].experience}
          </p>
        </div>
        
        <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">
          🎯 {content[language].whatIDeliverTitle}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          {content[language].services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="mb-2">
                  {service.icon}
                </div>
                <CardTitle className="text-[#1c3454]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-[#6caddf]">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">
            🎯 {content[language].whyChooseMeTitle}
          </h2>
          <ul className="space-y-4 text-[#1c3454]">
            {content[language].whyChooseMe.map((reason, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#6caddf] mr-2">•</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">
            🎯 {content[language].clientFeedbackTitle}
          </h2>
          <div className="space-y-6">
            {content[language].testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#f5f7fa] p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="italic text-[#1c3454]">"{testimonial.text}"</p>
                <p className="text-[#6caddf] mt-2">— {testimonial.author}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-[#1c3454] mb-4">
              {content[language].callToAction}
            </p>
            <Link to={`/${language}/contact`}>
              <Button className="bg-[#6caddf] hover:bg-[#5a9ac8] text-white font-medium">
                {content[language].contactButton}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaBuying;
