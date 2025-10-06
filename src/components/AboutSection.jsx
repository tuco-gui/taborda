import React from 'react';
import { Button } from './ui/button';

const AboutSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Estou vindo do site...";
    const whatsappUrl = `https://wa.me/5514999998888?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1636229557985-a68a8a2154dc?w=600&h=400&fit=crop&crop=center" 
                alt="Taborda Calhas e Serralheria"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Serralheria em Botucatu: Portas de Aço, Calhas e Estruturas Metálicas!
            </h2>
            
            <h3 className="text-xl text-red-600 font-semibold mb-8">
              Soluções completas e personalizadas em portões, estruturas metálicas, coberturas, mezaninos e muito mais.
            </h3>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                A **Taborda Calhas e Serralheria**, localizada em Botucatu, oferece soluções completas em serralheria e calhas e rufos com excelência, pontualidade e preços justos. Com anos de experiência no mercado, atuamos na fabricação e instalação de **portões automáticos e manuais**, **grades de proteção**, **estruturas metálicas**, **coberturas** e muito mais.
              </p>
              
              <p>
                Trabalhamos com projetos personalizados, sempre priorizando a segurança, durabilidade e acabamento impecável em cada serviço. Atendemos residências, comércios e indústrias com mão de obra qualificada e materiais de alta qualidade.
              </p>
              
              <p>
                Seja para reformas, construções novas ou manutenções, conte com a eficiência e o compromisso da Taborda Calhas e Serralheria. Solicite seu orçamento sem compromisso e descubra por que somos referência em **serralheria em Botucatu** e região.
              </p>
            </div>

            <div className="mt-8">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-300"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
