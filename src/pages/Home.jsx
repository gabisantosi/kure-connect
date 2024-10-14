import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-muted rounded-lg p-8 shadow-lg">
        <h1 className="text-5xl font-bold mb-6 text-secondary leading-tight">Consultoria Especializada em <span className="text-primary">Saúde Digital</span></h1>
        <p className="text-xl mb-8 text-secondary leading-relaxed">
          Oferecemos soluções de consultoria personalizadas em saúde digital, tecnologia e inovação para otimizar processos, melhorar a qualidade dos serviços e impulsionar a transformação digital no setor de saúde.
        </p>
        <Link to="/contato">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-full text-lg transition-all duration-200 transform hover:scale-105">
            Agende uma Consultoria
          </Button>
        </Link>
      </div>
      
      <section className="mt-20">
        <h2 className="text-4xl font-semibold mb-10 text-secondary text-center">Nossos Serviços de Consultoria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Saúde Digital", description: "Implementação de soluções digitais para melhorar a eficiência e qualidade dos serviços de saúde." },
            { title: "Tecnologia em Saúde", description: "Consultoria em adoção e integração de tecnologias inovadoras no setor de saúde." },
            { title: "Programas de Saúde", description: "Desenvolvimento de programas personalizados para atender às necessidades específicas de instituições de saúde." },
            { title: "Metodologias Ágeis", description: "Aplicação de princípios ágeis para melhorar a gestão e entrega de projetos no setor de saúde." }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
              <p className="text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;