import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Contato = () => {
  const handleEmailClick = () => {
    const emailAddress = 'gabrielasilva@kuresaude.com';
    const subject = 'Contato via site Kure Saúde';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Entre em Contato</h1>
      <div className="max-w-md mx-auto text-center">
        <p className="mb-6">Clique no botão abaixo para nos enviar um e-mail diretamente do seu cliente de e-mail preferido.</p>
        <Button onClick={handleEmailClick} className="flex items-center">
          <Mail className="mr-2" />
          Enviar E-mail
        </Button>
      </div>
    </div>
  );
};

export default Contato;