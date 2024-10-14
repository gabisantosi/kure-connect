import { Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <p className="text-sm mb-4">&copy; {new Date().getFullYear()} Kure Saúde. Todos os direitos reservados.</p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/kuresaude" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.facebook.com/kuresaude" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;