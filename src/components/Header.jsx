import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Kure Saúde Digital</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-muted">Início</Link></li>
              <li><Link to="/servicos" className="hover:text-muted">Saúde Digital</Link></li>
              <li><Link to="/tecnologia" className="hover:text-muted">Tecnologia</Link></li>
              <li><Link to="/programas" className="hover:text-muted">Programas</Link></li>
              <li><Link to="/metodologias" className="hover:text-muted">Metodologias Ágeis</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;