import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { to: "/", label: t.home },
    { to: "/saude-digital", label: t.saudeDigital },
    { to: "/gestao-de-projetos", label: t.gestaoProjetos },
    { to: "/cursos", label: t.cursos },
    { to: "/materiais-educativos", label: t.materiaisEducativos },
    { to: "/sobre-nos", label: t.quemSomos },
    { to: "/contato", label: t.contato },
    { to: "/blog", label: t.blog },
  ];

  const getCountryCode = (lang) => {
    switch(lang) {
      case 'pt': return 'BR';
      case 'en': return 'US';
      case 'sv': return 'SE';
      default: return 'BR';
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="https://i.ibb.co/TH1yvv8/kure-logo.png" alt="Kure Saúde Logo" className="h-10 mr-2" />
            <span className="text-2xl font-bold text-primary tracking-tight">Kure Saúde</span>
          </Link>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-primary">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}>
            <ul className="flex flex-col md:flex-row md:space-x-6">
              {menuItems.map((item) => (
                <li key={item.to} className="py-2 md:py-0">
                  <Link
                    to={item.to}
                    className="block px-4 md:px-0 text-gray-600 hover:text-primary transition-colors duration-200 font-medium relative group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button onClick={toggleLanguage} className="ml-4 text-gray-600 hover:text-primary">
            <ReactCountryFlag
              countryCode={getCountryCode(language)}
              svg
              style={{
                width: '1.5em',
                height: '1.5em',
              }}
              title={language.toUpperCase()}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;