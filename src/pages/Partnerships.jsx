import React from 'react';

const Partnerships = () => {
  const partners = [
    { name: "Hospital Sírio-Libanês" },
    { name: "Hospital Israelita Albert Einstein" },
    { name: "Hospital Alemão Oswaldo Cruz" },
    { name: "Hospital Moinhos de Vento" },
    { name: "Hospital Samaritano" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Nossos Parceiros</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-2">{partner.name}</h2>
            {/* Placeholder para logo do parceiro */}
            <div className="w-32 h-32 bg-gray-200 mx-auto rounded-full flex items-center justify-center">
              <span className="text-gray-500">Logo</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partnerships;