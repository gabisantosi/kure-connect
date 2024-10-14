const Services = () => {
  const services = [
    { title: "Consultoria em Telemedicina", description: "Implementação e otimização de sistemas de telemedicina." },
    { title: "Análise de Dados de Saúde", description: "Utilização de big data para melhorar os resultados dos pacientes." },
    { title: "Integração de Sistemas", description: "Conectando diferentes plataformas de saúde para um cuidado mais eficiente." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Nossos Serviços</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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