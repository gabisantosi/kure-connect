import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário ou agendar uma reunião
    console.log('Formulário enviado:', { name, email, message });
    // Limpar o formulário após o envio
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Entre em Contato</h1>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Nome</label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">E-mail</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Mensagem</label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Enviar Mensagem</Button>
        </form>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Agende uma Reunião</h2>
          <p className="mb-4">Para agendar uma reunião no Google Meet, por favor, clique no botão abaixo:</p>
          <Button
            as="a"
            href="https://calendly.com/seu-link-do-calendly"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Reunião
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;