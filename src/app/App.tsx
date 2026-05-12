import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  // Configure o número do WhatsApp aqui (formato: 351912345678)
  const whatsappNumber = '+351963057340';

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="size-full min-h-0 overflow-y-auto overflow-x-hidden bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-purple-50/30">
      <Analytics />
      <Navbar whatsappNumber={whatsappNumber} onWhatsAppClick={handleWhatsAppClick} />
      <Home onWhatsAppClick={handleWhatsAppClick} />
      <Footer />
      <WhatsAppButton phoneNumber={whatsappNumber} />
    </div>
  );
}
