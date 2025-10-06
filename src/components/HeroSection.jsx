import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Portões de Aço e Ferro Sob Medida!",
      subtitle: "Transforme seu espaço com portões resistentes, modernos e sob medida. Aproveite condições especiais, acabamento de qualidade e instalação rápida. Solicite agora e surpreenda-se com o melhor custo-benefício da região!",
      image: "https://images.unsplash.com/photo-1531053326607-9d349096d887?w=1200&h=800&fit=crop&crop=center",
      ctaText: "Orçamento!"
    },
    {
      title: "Construção e Reforma de Telhados!",
      subtitle: "Seu telhado novo ou reformado com rapidez, qualidade e materiais resistentes. Atendemos residências e comércios com mão de obra especializada. Peça já seu orçamento e dê ao seu imóvel a proteção que ele merece!",
      image: "https://images.unsplash.com/photo-1527288567356-a9f997f12871?w=1200&h=800&fit=crop&crop=center",
      ctaText: "Orçamento!"
    },
    {
      title: "Construção de Mezaninos em Aço!",
      subtitle: "Transforme seu ambiente com mezaninos modernos, seguros e personalizados. Ideal para residências, comércios ou indústrias. Aproveite nossa mão de obra especializada e condições imperdíveis. Solicite agora seu orçamento e otimize seu espaço com elegância!",
      image: "https://images.unsplash.com/photo-1648815546030-6a5792d4fa38?w=1200&h=800&fit=crop&crop=center",
      ctaText: "Orçamento!"
    },
    {
      title: "Calhas e Rufos!",
      subtitle: "Evite infiltrações e danos com calhas e rufos de alta durabilidade. Atendimento rápido, fabricação sob medida e instalação precisa para residências e comércios. Solicite seu orçamento agora e garanta proteção e acabamento impecável!",
      image: "https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?w=1200&h=800&fit=crop&crop=center",
      ctaText: "Orçamento!"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleWhatsAppClick = () => {
    const message = "Estou vindo do site...";
    const whatsappUrl = `https://wa.me/5514999998888?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative h-screen overflow-hidden" id="home">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-slate-900/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-200">
                {slide.subtitle}
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {slide.ctaText}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 transition-colors z-20"
      >
        <ChevronLeft className="w-12 h-12" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 transition-colors z-20"
      >
        <ChevronRight className="w-12 h-12" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-red-600' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
