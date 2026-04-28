import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

interface NavbarProps {
  whatsappNumber: string;
  onWhatsAppClick: (message: string) => void;
}

export default function Navbar({ whatsappNumber, onWhatsAppClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 w-full bg-white/70 backdrop-blur-lg border-b border-white/20 z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <a href="/" className="flex items-center">
            <span className="text-xl sm:text-2xl" style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Dev</span>
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Deals</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            <a href="#servicos" className="text-gray-700 hover:text-purple-600 transition font-medium">Serviços</a>
            <a href="#sobre" className="text-gray-700 hover:text-purple-600 transition font-medium">Sobre</a>
            <a href="#contato" className="text-gray-700 hover:text-purple-600 transition font-medium">Contato</a>
            <motion.button
              onClick={() => onWhatsAppClick('Olá! Gostaria de começar um projeto com a DevDeals.')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(147, 51, 234, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Começar Projeto
            </motion.button>
          </div>

          <button
            className="lg:hidden p-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-6 space-y-4 border-t border-gray-100">
            <a href="#servicos" className="block text-gray-700 hover:text-purple-600 py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
            <a href="#sobre" className="block text-gray-700 hover:text-purple-600 py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
            <a href="#contato" className="block text-gray-700 hover:text-purple-600 py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Contato</a>
            <button
              onClick={() => {
                onWhatsAppClick('Olá! Gostaria de começar um projeto com a DevDeals.');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-xl transition-all font-medium cursor-pointer"
            >
              Começar Projeto
            </button>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
