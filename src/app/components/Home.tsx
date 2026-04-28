import { Code2, Smartphone, ShoppingCart, Palette, CheckCircle, ArrowRight, Zap, Shield, Headphones, Star, Send, Mail, Phone, Building, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomeProps {
  onWhatsAppClick: (message: string) => void;
}

export default function Home({ onWhatsAppClick }: HomeProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    mensagem: ''
  });
  const [countryCode, setCountryCode] = useState('+351');

  // Animação de contagem
  const [revenueCount, setRevenueCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [daysCount, setDaysCount] = useState(0);

  useEffect(() => {
    // Animação para +350%
    const revenueInterval = setInterval(() => {
      setRevenueCount(prev => {
        if (prev >= 350) {
          clearInterval(revenueInterval);
          return 350;
        }
        return prev + 15;
      });
    }, 15);

    // Animação para 30+
    const clientsInterval = setInterval(() => {
      setClientsCount(prev => {
        if (prev >= 30) {
          clearInterval(clientsInterval);
          return 30;
        }
        return prev + 1;
      });
    }, 30);

    // Animação para 15 dias
    const daysInterval = setInterval(() => {
      setDaysCount(prev => {
        if (prev >= 15) {
          clearInterval(daysInterval);
          return 15;
        }
        return prev + 1;
      });
    }, 40);

    return () => {
      clearInterval(revenueInterval);
      clearInterval(clientsInterval);
      clearInterval(daysInterval);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Adicionar integração com Google Sheets aqui
    const fullData = {
      ...formData,
      telefoneCompleto: `${countryCode} ${formData.telefone}`
    };
    console.log('Dados do formulário:', fullData);
    alert('Formulário enviado! (Integração pendente)');
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const services = [
    {
      icon: Code2,
      title: 'Desenvolvimento Web',
      description: 'Websites modernos, responsivos e otimizados para SEO. Transformamos sua visão em realidade digital.',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      icon: Smartphone,
      title: 'Aplicativos Mobile',
      description: 'Apps nativos e híbridos para iOS e Android. Experiência fluida em qualquer dispositivo.',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Lojas virtuais completas com integração de pagamento, gestão de estoque e muito mais.',
      image: 'https://images.unsplash.com/photo-1758522484646-c8694d1784fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Design de interfaces intuitivas e identidade visual marcante para sua marca.',
      image: 'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Alta Performance',
      description: 'Códigos otimizados e infraestrutura escalável para garantir velocidade máxima.',
      features: [
        'Carregamento ultra rápido',
        'Otimização de recursos',
        'Infraestrutura escalável'
      ]
    },
    {
      icon: Shield,
      title: 'Segurança Avançada',
      description: 'Proteção completa de dados com as melhores práticas de segurança do mercado.',
      features: [
        'Criptografia de ponta',
        'Proteção contra ataques',
        'Backup automático'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Foco em Conversão',
      description: 'Soluções otimizadas para maximizar vendas e gerar mais receita.',
      features: [
        'UX otimizada para conversão',
        'Analytics e métricas',
        'Integração com pagamentos'
      ]
    },
    {
      icon: Star,
      title: 'Qualidade Premium',
      description: 'Padrões de excelência em cada linha de código e pixel de design.',
      features: [
        'Código limpo e documentado',
        'Design pixel-perfect',
        'Testes rigorosos'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 via-blue-50/40 to-purple-50/30 -z-10"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200/30 rounded-full filter blur-3xl opacity-40 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl opacity-40 -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Transformamos
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Ideias</span> em
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Realidade Digital</span>
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Desenvolvimento de websites, aplicativos e e-commerce de alto impacto. Soluções personalizadas que impulsionam seu negócio.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.button
                  onClick={() => onWhatsAppClick('Olá! Gostaria de iniciar um projeto com a DevDeals.')}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full shadow-lg font-semibold cursor-pointer relative group flex items-center gap-2 min-w-fit"
                  whileHover={{
                    width: "100%",
                    boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <span className="relative z-10">Iniciar Projeto</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:ml-auto transition-all duration-400" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </motion.button>
              </motion.div>

              <motion.div
                className="grid grid-cols-3 gap-4 sm:gap-8 mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    +{revenueCount}%
                  </div>
                  <div className="text-gray-600 mt-2 font-medium text-sm sm:text-base">Receita Gerada</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {clientsCount}+
                  </div>
                  <div className="text-gray-600 mt-2 font-medium text-sm sm:text-base">Clientes Ativos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {daysCount} dias
                  </div>
                  <div className="text-gray-600 mt-2 font-medium text-sm sm:text-base">Prazo Médio</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-3xl blur-2xl opacity-20"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770777843445-2a1621b1201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Equipe trabalhando"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50/50 to-purple-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">
              Nossos Serviços
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Soluções Completas para Seu Negócio</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de serviços digitais com tecnologias de ponta
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-3">
                      <service.icon className="w-7 h-7 text-purple-600" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <motion.button
                    onClick={() => onWhatsAppClick(`Olá! Gostaria de saber mais sobre ${service.title}.`)}
                    className="inline-flex items-center gap-2 text-purple-600 font-semibold cursor-pointer group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-blue-50/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">
              Diferenciais
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Por Que Escolher a DevDeals?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Excelência técnica aliada a um atendimento personalizado
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all"
                variants={fadeInUp}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/30 to-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1613068687893-5e85b4638b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Desenvolvimento"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4 px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">
                Sobre Nós
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Especialistas em Inovação Digital</h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
                A DevDeals é uma agência digital focada em entregar soluções tecnológicas de alto impacto. Nossa equipe é formada por desenvolvedores, designers e estrategistas apaixonados por transformar ideias em produtos digitais excepcionais.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Utilizamos as tecnologias mais modernas do mercado, como React, Node.js, TypeScript e muito mais, para garantir que seu projeto seja escalável, seguro e preparado para o futuro.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Metodologia Ágil</h4>
                    <p className="text-gray-600">Desenvolvimento iterativo com entregas rápidas e feedback contínuo</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Código Limpo</h4>
                    <p className="text-gray-600">Seguimos as melhores práticas de programação e arquitetura</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Foco em Resultados</h4>
                    <p className="text-gray-600">Cada projeto é desenvolvido pensando no ROI do cliente</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 via-purple-50/40 to-blue-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">
              Contato
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Vamos Conversar Sobre Seu Projeto?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato em breve
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-10 text-white mb-8">
                <h3 className="text-3xl font-bold mb-6">Entre em Contato</h3>
                <p className="text-purple-100 mb-8 text-lg">
                  Estamos prontos para transformar suas ideias em realidade digital. Fale com nossa equipe!
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:contato@devdeals.com" className="text-purple-100 hover:text-white transition">
                        contato@devdeals.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Telefone</div>
                      <a href="tel:+351912345678" className="text-purple-100 hover:text-white transition">
                        +351 91 234 5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Localização</div>
                      <div className="text-purple-100">Lisboa, Portugal</div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-10 border-t border-white/20">
                  <div className="font-semibold mb-4">Ou fale conosco pelo WhatsApp</div>
                  <motion.button
                    onClick={() => onWhatsAppClick('Olá! Gostaria de conversar sobre um projeto.')}
                    className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 cursor-pointer"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Phone className="w-5 h-5" />
                    Abrir WhatsApp
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-3xl border border-gray-200 p-10 shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                      placeholder="Digite seu nome"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-gray-700 font-semibold mb-2">
                    Nome da Empresa
                  </label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-gray-700 font-semibold mb-2">
                    Telefone *
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-shrink-0">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="w-32 px-3 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition appearance-none bg-white cursor-pointer"
                      >
                        <option value="+351">🇵🇹 +351</option>
                        <option value="+55">🇧🇷 +55</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+34">🇪🇸 +34</option>
                        <option value="+33">🇫🇷 +33</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+39">🇮🇹 +39</option>
                        <option value="+41">🇨🇭 +41</option>
                        <option value="+31">🇳🇱 +31</option>
                        <option value="+32">🇧🇪 +32</option>
                        <option value="+54">🇦🇷 +54</option>
                        <option value="+52">🇲🇽 +52</option>
                        <option value="+244">🇦🇴 +244</option>
                      </select>
                    </div>
                    <div className="relative flex-1">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                        placeholder="91 234 5678"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-gray-700 font-semibold mb-2">
                    Detalhes do Projeto *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition resize-none"
                    placeholder="Conte-nos sobre seu projeto, objetivos e expectativas..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 cursor-pointer relative overflow-hidden group"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Send className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Enviar Mensagem</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
