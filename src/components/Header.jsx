import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight">Kure Saúde</Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-muted transition-colors duration-200">Início</Link></li>
              <li><Link to="/servicos" className="hover:text-muted transition-colors duration-200">Saúde Digital</Link></li>
              <li><Link to="/tecnologia" className="hover:text-muted transition-colors duration-200">Tecnologia</Link></li>
              <li><Link to="/programas" className="hover:text-muted transition-colors duration-200">Programas</Link></li>
              <li><Link to="/metodologias" className="hover:text-muted transition-colors duration-200">Metodologias Ágeis</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;