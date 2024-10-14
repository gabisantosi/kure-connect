import React from 'react';

const Services = () => {
  const services = [
    { 
      title: "Saúde Digital", 
      description: "Implementação de soluções digitais para melhorar a eficiência e qualidade dos serviços de saúde." 
    },
    { 
      title: "Tecnologia em Saúde", 
      description: "Consultoria em adoção e integração de tecnologias inovadoras no setor de saúde." 
    },
    { 
      title: "Desenvolvimento de Programas de Saúde", 
      description: "Criação e implementação de programas personalizados para atender às necessidades específicas de instituições de saúde." 
    },
    { 
      title: "Metodologias Ágeis em Saúde", 
      description: "Aplicação de princípios ágeis para melhorar a gestão e entrega de projetos no setor de saúde." 
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Nossos Serviços de Consultoria</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;