import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone, MapPin, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white text-sm py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(14) 3622-1234</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>(14) 99999-8888</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>R. das Flores, 123 - Centro, Botucatu - SP, 18600-123</span>
            </div>
          </div>
          <div className="flex space-x-3">
            <a href="#" className="text-white hover:text-gray-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.31-.623-.31-1.547c0-1.447.839-2.528 1.885-2.528.888 0 1.318.667 1.318 1.466 0 .893-.568 2.229-.861 3.467-.245 1.038.52 1.886 1.544 1.886 1.854 0 3.279-1.954 3.279-4.777 0-2.498-1.795-4.244-4.356-4.244-2.967 0-4.71 2.226-4.71 4.524 0 .896.344 1.856.775 2.378a.304.304 0 01.069.292c-.076.315-.245.994-.278 1.133-.043.183-.145.222-.334.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.967-.527-2.292-1.155l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.017 0z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">TABORDA</h1>
                <p className="text-sm text-red-600 font-medium">CALHAS E SERRALHERIA</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-red-600 font-medium transition-colors">Home</a>
              <a href="#quem-somos" className="text-slate-700 hover:text-red-600 font-medium transition-colors">Quem Somos</a>
              <a href="#produtos" className="text-slate-700 hover:text-red-600 font-medium transition-colors">Produtos</a>
              <a href="#servicos" className="text-slate-700 hover:text-red-600 font-medium transition-colors">Serviços</a>
              <a href="#depoimentos" className="text-slate-700 hover:text-red-600 font-medium transition-colors">Depoimentos</a>
              <a href="#portfolio" className="text-slate-700 hover:text-red-600 font-medium transition-colors">Portfólio</a>
              <a href="#contato" className="text-slate-700 hover:text-red-600 font-medium transition-colors">Contato</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-3">
                <a href="#home" className="text-slate-700 hover:text-red-600 font-medium transition-colors">Home</a>
                <a href="#quem-somos" className="text-slate-700 hover:text-red-600 font-medium transition-colors">Quem Somos</a>
                <a href="#produtos" className="text-slate-700 hover:text-red-600 font-medium transition-colors">Produtos</a>
                <a href="#servicos" className="text-slate-700 hover:text-red-600 font-medium transition-colors">Serviços</a>
                <a href="#depoimentos" className="text-slate-700 hover:text-red-600 font-medium transition-colors">Depoimentos</a>
                <a href="#portfolio" className="text-slate-700 hover:text-red-600 font-medium transition-colors">Portfólio</a>
                <a href="#contato" className="text-slate-700 hover:text-red-600 font-medium transition-colors">Contato</a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
