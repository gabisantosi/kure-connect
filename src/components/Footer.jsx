const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Kure Saúde Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;