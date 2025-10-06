import React from 'react';
import { Button } from './ui/button';

const QuemSomosSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Estou vindo do site...";
    const whatsappUrl = `https://wa.me/5514999998888?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const features = [
    {
      title: "Preços Competitivos",
      description: "Soluções sob medida com o melhor custo-benefício da região.",
      details: "Na **Taborda Calhas e Serralheria**, empresa de calhas e rufos em Botucatu, você encontra o equilíbrio ideal entre **preço competitivo** e alta qualidade. Como referência em **serralheria em Botucatu**, entregamos projetos personalizados para residências, comércios e indústrias, com materiais resistentes e acabamento impecável. Tudo com agilidade, transparência e atenção ao seu orçamento. Faça mais com menos. Escolha a confiança e economia da **Taborda Calhas e Serralheria**."
    },
    {
      title: "Soluções Sob Medida",
      description: "Projetos exclusivos que combinam funcionalidade, estética e excelente custo-benefício.",
      details: "Na **Taborda Calhas e Serralheria**, empresa de calhas e rufos em Botucatu, cada detalhe é pensado para você. Somos especialistas em **soluções sob medida** que valorizam seu espaço com segurança, beleza e durabilidade. Como destaque em **serralheria em Botucatu**, criamos portões, grades e estruturas metálicas personalizadas, com acabamento superior e atendimento ágil. Seu projeto, do seu jeito, com a confiança e excelência da **Taborda Calhas e Serralheria**."
    },
    {
      title: "Pagamento Facilitado",
      description: "Realize seu projeto com flexibilidade, segurança e o melhor custo-benefício.",
      details: "Descubra, na **Taborda Calhas e Serralheria**, a melhor **serralheria em Botucatu**, facilidades de pagamento que tornam seus projetos mais acessíveis. Especialistas em **soluções personalizadas para residências e comércios**, unimos qualidade superior com condições flexíveis de pagamento. Nossa equipe é comprometida com excelência, entregando resultados que aliam conforto, segurança e ótimo custo-benefício. Transforme seu espaço com confiança e facilidade."
    },
    {
      title: "Pós-Venda",
      description: "Suporte e atenção total mesmo após a finalização do seu projeto.",
      details: "Na **Taborda Calhas e Serralheria**, empresa de calhas e rufos em Botucatu, o compromisso vai além da entrega. Nosso **pós-venda** garante suporte, orientações e atenção personalizada sempre que você precisar. Como referência em **serralheria em Botucatu**, oferecemos soluções duráveis com acompanhamento completo. Sua satisfação é prioridade antes, durante e depois do serviço. Confie em quem entrega mais que produtos: confie em relacionamento, confiança e responsabilidade."
    },
    {
      title: "Atendimento Personalizado",
      description: "Cada cliente é único e cada projeto também.",
      details: "Na **Taborda Calhas e Serralheria**, empresa de calhas e rufos em Botucatu, cada projeto é único. Atuamos como **serralheria em Botucatu** para clientes residenciais, comerciais e industriais, sempre com **atendimento personalizado**, agilidade e excelente custo-benefício. Do portão da sua casa à estrutura metálica do seu negócio, entregamos confiança, durabilidade e acabamento impecável. Escolha a Taborda Calhas e Serralheria e transforme seu espaço com quem realmente entende do assunto."
    },
    {
      title: "Qualidade Garantida",
      description: "Materiais de primeira linha e mão de obra especializada.",
      details: "Utilizamos apenas materiais de alta qualidade e nossa equipe possui anos de experiência em serralheria e metalurgia. Cada projeto passa por rigoroso controle de qualidade, garantindo durabilidade e segurança. Oferecemos garantia em todos os nossos serviços e produtos, proporcionando total tranquilidade aos nossos clientes."
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="quem-somos">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Quem Somos!
            </h2>
            
            <h3 className="text-xl text-red-600 font-semibold mb-8">
              Excelência em serviços de serralheria em Botucatu, Calhas e Rufos, com qualidade, segurança e compromisso.
            </h3>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                A Taborda Calhas e Serralheria empresa de **calhas e rufos em Botucatu**, é referência como serralheria e funilaria industrial, oferecendo soluções sob medida em portões, grades, estruturas metálicas, calhas, rufos e muito mais. Com 21 anos de experiência, unimos qualidade, agilidade e atendimento personalizado para garantir a satisfação total de nossos clientes.
              </p>
              
              <p>
                Utilizamos materiais de alta durabilidade e seguimos rigorosos padrões de segurança. Nosso compromisso é entregar projetos eficientes e com excelente custo-benefício. Se você procura uma **serralheria em Botucatu** confiável, fale com a Taborda Calhas e Serralheria. Estamos prontos para transformar seu **projeto em realidade com profissionalismo e dedicação.**
              </p>
            </div>

            <div className="mt-8">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-300"
              >
                Entre em Contato!
              </Button>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1636229557985-a68a8a2154dc?w=600&h=500&fit=crop&crop=center" 
              alt="Taborda Calhas e Serralheria - Equipe profissional"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Features Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Qualidade, Preço Justo e Confiabilidade em Botucatu!
            </h2>
            <p className="text-xl text-red-600 font-semibold">
              Soluções completas em metal com atendimento personalizado e custo-benefício imbatível
            </p>
            <p className="text-gray-600 mt-4">
              A **Taborda Calhas e Serralheria** se destaca como referência em **serralheria em Botucatu**, unindo **preço competitivo**, materiais de qualidade e entrega no prazo. Oferecemos atendimento confiável, projetos sob medida e acabamento impecável. Seja para portões, grades, coberturas, calhas e rufos ou estruturas metálicas, aqui você encontra experiência, agilidade e compromisso. Faça a escolha certa!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 font-semibold">
                  {feature.description}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {feature.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomosSection;
