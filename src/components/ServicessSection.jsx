import React from 'react';
import { Button } from './ui/button';

const ServicesSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Estou vindo do site...";
    const whatsappUrl = `https://wa.me/5514999998888?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      title: "Escadas de Ferro",
      description: "Escadas de ferro em Botucatu com estrutura resistente, acabamento moderno e projeto funcional.",
      details: "A **Taborda Calhas e Serralheria** oferece diversos **modelos de escadas de ferro em Botucatu**, com design moderno, estrutura segura e excelente acabamento. Atendemos obras residenciais, comerciais e industriais com soluções funcionais e sob medida. Escolha o modelo ideal para seu projeto e conte com instalação precisa, durabilidade e visual elegante. Solicite seu orçamento com quem é especialista em estrutura metálica.",
      image: "https://images.unsplash.com/photo-1636393952094-3bc1e0cf8a79?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Escada Marinheiro de Ferro e Aço",
      description: "Escada marinheiro de ferro e aço em Botucatu com segurança, durabilidade e instalação técnica.",
      details: "A Taborda Calhas e Serralheria oferece escada marinheiro em Botucatu com estrutura metálica robusta, ideal para acesso vertical em indústrias, galpões e reservatórios. Desenvolvida com foco em segurança, resistência e durabilidade, atende às exigências técnicas de ambientes profissionais. Instalação precisa, fixação segura e acabamento resistente à corrosão. Solicite seu orçamento e garanta acesso confiável com quem é referência em estruturas metálicas.",
      image: "https://images.unsplash.com/photo-1753596726704-5c4bd0357742?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Escada Caracol",
      description: "Escada caracol de ferro e aço em Botucatu com design moderno, segurança e aproveitamento de espaço.",
      details: "A Taborda Calhas e Serralheria projeta e instala escadas caracol de ferro e aço em Botucatu, unindo funcionalidade e elegância. Ideal para ambientes compactos, essa estrutura permite economia de espaço com segurança e estilo. Design moderno, estrutura resistente e acabamento de alto padrão. Solicite seu orçamento e transforme seu ambiente com uma solução prática, bonita e durável para todos os estilos de projeto.",
      image: "https://images.pexels.com/photos/2480481/pexels-photo-2480481.jpeg?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Cobertura de Policarbonato",
      description: "Cobertura de policarbonato em Botucatu com instalação sob medida e alto padrão de acabamento.",
      details: "A **Taborda Calhas e Serralheria** é especialista em **cobertura de policarbonato em Botucatu**, ideal para varandas, garagens e áreas externas. Leves, resistentes e elegantes, nossas coberturas oferecem proteção contra sol e chuva com excelente passagem de luz natural. Instalação personalizada, variedade de modelos e acabamento profissional. Solicite seu orçamento com a melhor serralheria da região e valorize seu imóvel!",
      image: "https://images.unsplash.com/photo-1531053326607-9d349096d887?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Estrutura Metálica",
      description: "Serralheria em Botucatu: Soluções metálicas sob medida para sua obra!",
      details: "A **Taborda Calhas e Serralheria** é referência em **estrutura metálica em Botucatu**, atendendo obras residenciais, comerciais e industriais. Fabricamos e instalamos mezaninos, galpões, coberturas e suportes metálicos com agilidade, precisão e excelente acabamento. Trabalhamos com projetos sob medida, oferecendo resistência e durabilidade para sua construção. Solicite um orçamento sem compromisso e garanta uma estrutura confiável e segura para sua obra!",
      image: "https://images.unsplash.com/photo-1527288567356-a9f997f12871?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Corrimão",
      description: "Corrimão em Botucatu com design moderno, segurança e instalação sob medida.",
      details: "A **Taborda Calhas e Serralheria** oferece **corrimão em Botucatu** com fabricação e instalação sob medida. Trabalhamos com ferro e aço, entregando segurança, acessibilidade e design moderno para escadas, rampas e varandas. Atendimento rápido, materiais de alta durabilidade e acabamento impecável. Solicite um orçamento sem compromisso e valorize seu imóvel com os corrimãos da Taborda Calhas e Serralheria!",
      image: "https://images.unsplash.com/photo-1648815546030-6a5792d4fa38?w=600&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 bg-white" id="servicos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Serralheria com Expertise em Soluções Metálicas Sob Medida em Botucatu!
          </h2>
          <p className="text-xl text-red-600 font-semibold">
            Portões, Telhados e Muito Mais – Aqui, Seu Projeto Ganha Forma e Força.
          </p>
          <p className="text-gray-600 mt-4 max-w-4xl mx-auto">
            A **Taborda Calhas e Serralheria** empresa de calhas e rufos em Botucatu, é especializada em serviços de **serralheria em Botucatu**, com fabricação e instalação de **portões (pivotantes, deslizantes e basculantes)**, **grades**, **estruturas metálicas**, **mezaninos**, **calhas**, **rufos** e **telhados completos**. Trabalhamos com qualidade, agilidade e preço justo. Solicite um orçamento sem compromisso e conte com quem entende de construção e reforma em ferro e aço!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/30 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                  {service.details}
                </p>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Orçamento!
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
