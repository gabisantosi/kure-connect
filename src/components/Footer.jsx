const Footer = () => {
  return (
    <footer className="bg-accent text-secondary mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Kure Saúde. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;