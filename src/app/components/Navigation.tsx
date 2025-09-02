'use client';

import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Hamburger Menu */}
      <div 
        className="fixed top-4 left-4 z-50 cursor-pointer p-2 md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white mb-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#04001C] bg-opacity-95 z-40 flex flex-col items-center justify-center md:hidden">
          <button 
            className={`text-xl py-4 ${activeSection === 'home' ? 'text-blue-400' : 'text-white'}`}
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button 
            className={`text-xl py-4 ${activeSection === 'projetos' ? 'text-blue-400' : 'text-white'}`}
            onClick={() => scrollToSection('projetos')}
          >
            Projetos
          </button>
          <button 
            className={`text-xl py-4 ${activeSection === 'sobreMim' ? 'text-blue-400' : 'text-white'}`}
            onClick={() => scrollToSection('sobreMim')}
          >
            Mais sobre mim
          </button>
          <button 
            className={`text-xl py-4 ${activeSection === 'contatos' ? 'text-blue-400' : 'text-white'}`}
            onClick={() => scrollToSection('contatos')}
          >
            Contatos
          </button>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 w-full bg-[#04001C] z-50 justify-end py-4 px-8">
        <button 
          className={`mx-4 ${activeSection === 'home' ? 'text-blue-400' : 'text-white'}`}
          onClick={() => scrollToSection('home')}
        >
          Home
        </button>
        <button 
          className={`mx-4 ${activeSection === 'projetos' ? 'text-blue-400' : 'text-white'}`}
          onClick={() => scrollToSection('projetos')}
        >
          Projetos
        </button>
        <button 
          className={`mx-4 ${activeSection === 'sobreMim' ? 'text-blue-400' : 'text-white'}`}
          onClick={() => scrollToSection('sobreMim')}
        >
          Mais sobre mim e Contatos
        </button>
        
      </nav>
    </>
  );
};

export default Navigation;