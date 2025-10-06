import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: "21",
      label: "Anos de Experiência",
      prefix: "+"
    },
    {
      number: "635",
      label: "Clientes Atendidos",
      prefix: "+"
    },
    {
      number: "15",
      label: "Cidades Atendidas",
      prefix: "+"
    },
    {
      number: "474",
      label: "Portões Instalados",
      prefix: "+"
    },
    {
      number: "2,852",
      label: "Metragem de Calhas e Rufos Instalados",
      prefix: "+"
    }
  ];

  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos Números!
          </h2>
          <p className="text-xl text-gray-300">
            Histórias de sucesso, obras bem-feitas e clientes satisfeitos do início ao fim.
          </p>
          <p className="text-gray-400 mt-4 max-w-4xl mx-auto">
            A Taborda Calhas e Serralheria, empresa de **calhas e rufos em Botucatu** é referência em **soluções metálicas,** coleciona projetos realizados com qualidade e acabamento técnico. Nossa experiência se reflete em cada estrutura, portão, cobertura ou calha entregue com precisão. Atendemos residências e comércios com dedicação e eficiência. Resultados consistentes, aprovação dos clientes e compromisso com a excelência são o que sustentam a força da nossa marca.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-red-600 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                <span className="text-2xl md:text-3xl font-bold">
                  {stat.prefix}{stat.number.charAt(0)}
                </span>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">
                {stat.prefix}{stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1531053326607-9d349096d887?w=800&h=400&fit=crop&crop=center" 
            alt="Taborda Calhas e Serralheria - Trabalho de qualidade"
            className="rounded-lg shadow-xl max-w-2xl w-full h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
