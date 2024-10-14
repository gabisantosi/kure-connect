const Partnerships = () => {
  const partners = [
    { name: "Hospital Digital", description: "Parceria para implementação de prontuários eletrônicos." },
    { name: "TechSaúde", description: "Colaboração em projetos de inteligência artificial para diagnósticos." },
    { name: "Clínica Conectada", description: "Fornecimento de soluções de telemedicina personalizadas." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Nossas Parcerias</h1>
      <div className="space-y-6">
        {partners.map((partner, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{partner.name}</h2>
            <p>{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partnerships;