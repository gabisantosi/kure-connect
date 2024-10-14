import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://i.ibb.co/yX3yvb5/photo-02.jpg" 
          alt="Kure Saúde Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Consultoria Especializada em Saúde
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Oferecemos soluções de consultoria personalizadas em saúde digital, tecnologia e inovação para otimizar processos e melhorar a qualidade dos serviços.
            </p>
            <Link to="/contato">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-full text-lg transition-all duration-200 transform hover:scale-105">
                Agende uma Consultoria
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      {/* Services Section */}
      <div className="container mx-auto px-4 py-20">
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
      </div>

      {/* Agende uma Consultoria Section */}
      <div className="bg-primary/10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-6 text-center text-primary">Agende uma Consultoria Personalizada</h2>
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            Transforme sua organização de saúde com nossa expertise em saúde digital e gestão de projetos. 
            Nossa equipe de consultores especializados está pronta para ajudar você a:
          </p>
          <ul className="list-disc list-inside mb-8 text-lg max-w-2xl mx-auto">
            <li>Otimizar processos clínicos e administrativos</li>
            <li>Implementar soluções tecnológicas inovadoras</li>
            <li>Melhorar a experiência do paciente e a qualidade do atendimento</li>
            <li>Reduzir custos operacionais e aumentar a eficiência</li>
          </ul>
          <p className="text-center mb-8">
            Agende agora uma consultoria gratuita de 30 minutos e descubra como podemos impulsionar sua instituição de saúde para o futuro digital.
          </p>
          <div className="text-center">
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Nh9Aw-Ck_Ow5Ld4Aw1Ht9Ck_Ow5Ld4Aw1Ht=?gv=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-full text-lg transition-all duration-200 transform hover:scale-105">
                Agende sua Consultoria Gratuita
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
