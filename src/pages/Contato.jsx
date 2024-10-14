import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contato = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o e-mail
    console.log('Formulário enviado');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Entre em Contato</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Nome</label>
          <Input id="name" type="text" required />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">E-mail</label>
          <Input id="email" type="email" required />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Mensagem</label>
          <Textarea id="message" required />
        </div>
        <Button type="submit">Enviar Mensagem</Button>
      </form>
    </div>
  );
};

export default Contato;