import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="https://i.ibb.co/TH1yvv8/kure-logo.png" alt="Kure Saúde Logo" className="h-10 mr-2" />
            <span className="text-2xl font-bold tracking-tight">Kure Saúde</span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-muted transition-colors duration-200">Início</Link></li>
              <li><Link to="/saude-digital" className="hover:text-muted transition-colors duration-200">Saúde Digital</Link></li>
              <li><Link to="/gestao-de-projetos" className="hover:text-muted transition-colors duration-200">Gestão de Projetos</Link></li>
              <li><Link to="/cursos" className="hover:text-muted transition-colors duration-200">Cursos</Link></li>
              <li><Link to="/materiais-educativos" className="hover:text-muted transition-colors duration-200">Materiais Educativos</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;