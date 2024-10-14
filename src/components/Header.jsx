import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Kure Saúde</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-secondary">Início</Link></li>
              <li><Link to="/servicos" className="hover:text-secondary">Serviços</Link></li>
              <li><Link to="/parcerias" className="hover:text-secondary">Parcerias</Link></li>
              <li><Link to="/contato" className="hover:text-secondary">Contato</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;