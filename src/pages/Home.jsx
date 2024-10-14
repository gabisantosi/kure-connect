import React from 'react';
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const clients = [
    { name: "Hospital Sírio-Libanês", logo: "https://example.com/sirio-libanes-logo.png" },
    { name: "Hospital Israelita Albert Einstein", logo: "https://example.com/einstein-logo.png" },
    { name: "Hospital Alemão Oswaldo Cruz", logo: "https://example.com/oswaldo-cruz-logo.png" },
    { name: "Hospital Moinhos de Vento", logo: "https://example.com/moinhos-de-vento-logo.png" },
    { name: "Organização Pan-Americana de Saúde", logo: "https://i.ibb.co/4jyDC9S/opas.jpg" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden pt-16">
        <img 
          src="https://i.ibb.co/yX3yvb5/photo-02.jpg" 
          alt="Kure Saúde Hero" 
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white mt-32">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t.heroDescription}
            </p>
            <a
              href="#agende-consultoria"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-full text-lg transition-all duration-200 transform hover:scale-105">
                {t.scheduleConsultation}
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-semibold mb-10 text-secondary text-center">{t.servicesTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: t.digitalHealth, description: t.digitalHealthDescription },
            { title: t.healthTechnology, description: t.healthTechnologyDescription },
            { title: t.healthPrograms, description: t.healthProgramsDescription },
            { title: t.agileMethodologies, description: t.agileMethodologiesDescription }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
              <p className="text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clients Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center text-secondary">Nossos Clientes</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={client.logo} alt={client.name} className="w-32 h-32 object-contain mb-4" />
                <p className="text-center font-medium">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Agende uma Consultoria Section */}
      <div id="agende-consultoria" className="bg-gradient-to-r from-primary/10 to-primary/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-6 text-center text-primary">{t.scheduleConsultationTitle}</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center text-center">
                <CalendarDays className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t.flexibility}</h3>
                <p>{t.chooseDate}</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t.thirtyMinutes}</h3>
                <p>{t.focusedSession}</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t.experts}</h3>
                <p>{t.talkToConsultants}</p>
              </div>
            </div>
            <p className="text-center text-lg mb-8">
              {t.transformYourOrganization}
            </p>
            <div className="text-center">
              <a
                href="https://calendar.app.google/tXX6YZGYhjn2oiej9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105">
                  {t.scheduleFreeConsultation}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;