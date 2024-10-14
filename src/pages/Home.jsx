import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-muted rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-secondary">Consultoria Especializada em Saúde Digital</h1>
        <p className="text-xl mb-8 text-secondary">
          Oferecemos soluções de consultoria personalizadas em saúde digital, tecnologia e inovação para otimizar processos, melhorar a qualidade dos serviços e impulsionar a transformação digital no setor de saúde.
        </p>
        <Link to="/contato">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded">
            Agende uma Consultoria
          </Button>
        </Link>
      </div>
      
      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 text-secondary">Nossos Serviços de Consultoria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Saúde Digital</h3>
            <p>Implementação de soluções digitais para melhorar a eficiência e qualidade dos serviços de saúde.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Tecnologia em Saúde</h3>
            <p>Consultoria em adoção e integração de tecnologias inovadoras no setor de saúde.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Programas de Saúde</h3>
            <p>Desenvolvimento de programas personalizados para atender às necessidades específicas de instituições de saúde.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Metodologias Ágeis</h3>
            <p>Aplicação de princípios ágeis para melhorar a gestão e entrega de projetos no setor de saúde.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
