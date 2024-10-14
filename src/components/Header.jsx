import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="https://i.ibb.co/TH1yvv8/kure-logo.png" alt="Kure Saúde Logo" className="h-10 mr-2" />
            <span className="text-2xl font-bold text-primary tracking-tight">Kure Saúde</span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              {[
                { to: "/", label: "Início" },
                { to: "/saude-digital", label: "Saúde Digital" },
                { to: "/gestao-de-projetos", label: "Gestão de Projetos" },
                { to: "/cursos", label: "Cursos" },
                { to: "/materiais-educativos", label: "Materiais Educativos" },
                { to: "/sobre-nos", label: "Quem Somos" },
                { to: "/contato", label: "Contato" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium relative group"
                  >
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;