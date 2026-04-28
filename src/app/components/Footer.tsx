import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8 lg:mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3 sm:mb-4 lg:mb-6">
              <span className="text-2xl" style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}>
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Dev</span>
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Deals</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformando ideias em soluções digitais inovadoras e impactantes.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-3 sm:mb-4 lg:mb-6">Serviços</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400">
              <li><a href="#servicos" className="hover:text-white transition">Desenvolvimento Web</a></li>
              <li><a href="#servicos" className="hover:text-white transition">Apps Mobile</a></li>
              <li><a href="#servicos" className="hover:text-white transition">E-commerce</a></li>
              <li><a href="#servicos" className="hover:text-white transition">UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-3 sm:mb-4 lg:mb-6">Empresa</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400">
              <li><a href="#sobre" className="hover:text-white transition">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-white transition">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-3 sm:mb-4 lg:mb-6">Redes Sociais</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/devdeals.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 sm:pt-6 lg:pt-8 text-center text-gray-400">
          <p>&copy; 2026 DevDeals. Todos os direitos reservados. Desenvolvido por DevDeals</p>
        </div>
      </div>
    </footer>
  );
}
