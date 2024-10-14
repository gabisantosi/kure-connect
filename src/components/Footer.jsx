const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Kure Saúde. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;