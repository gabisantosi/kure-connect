import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Consultoria Especializada em Saúde Digital</h1>
      <p className="text-xl mb-8">
        Oferecemos soluções de consultoria personalizadas em saúde digital, tecnologia e inovação para otimizar processos, melhorar a qualidade dos serviços e impulsionar a transformação digital no setor de saúde.
      </p>
      <Link to="/contato">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Agende uma Consultoria
        </Button>
      </Link>
      
      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">Pronto para Transformar sua Gestão em Saúde Digital?</h2>
        <p className="mb-6">
          Entre em contato conosco hoje para uma avaliação gratuita e descubra como nossa consultoria pode ajudar sua instituição a alcançar novos patamares de excelência em saúde digital e tecnologia.
        </p>
        <Link to="/contato">
          <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Solicite uma Proposta
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Home;