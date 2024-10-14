import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contato = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement email sending logic here
    // Send the form data to gabrielasilva@kuresaude.com
    console.log('Enviando email para gabrielasilva@kuresaude.com');
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);
    
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Entre em Contato</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Nome</label>
          <Input 
            id="name" 
            type="text" 
            required 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">E-mail</label>
          <Input 
            id="email" 
            type="email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Mensagem</label>
          <Textarea 
            id="message" 
            required 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <Button type="submit">Enviar Mensagem</Button>
      </form>
    </div>
  );
};

export default Contato;