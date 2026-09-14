import React, { useState } from 'react';
import { WebsiteConfig } from '../types';
import { 
  Phone, Mail, MapPin, Instagram, MessageCircle, ArrowRight, Check, Star, 
  Menu, X, ExternalLink, Send, Sparkles, User, Calendar, ShieldCheck
} from 'lucide-react';

interface Props {
  config: WebsiteConfig;
  isEditorOpen?: boolean;
  onOpenEditor?: () => void;
}

export const WebsitePreview: React.FC<Props> = ({ config, isEditorOpen, onOpenEditor }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Hex to RGB or style helper
  const primaryStyle = { backgroundColor: config.primaryColor };
  const primaryText = { color: config.primaryColor };
  const primaryBorder = { borderColor: config.primaryColor };

  return (
    <div className={`min-h-screen font-sans ${config.themeMode === 'dark' ? 'bg-zinc-950 text-zinc-100' : 'bg-slate-50 text-slate-900'} transition-colors duration-300`}>
      {/* Top Banner if inside preview bar */}
      {onOpenEditor && (
        <div className="bg-slate-900 text-white text-xs py-2 px-4 flex items-center justify-between border-b border-slate-800 sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-slate-300">Modo de Visualização Interativo:</span>
            <span className="font-semibold text-white">{config.name}</span>
          </div>
          <button
            onClick={onOpenEditor}
            className="flex items-center gap-1.5 px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition text-xs shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {isEditorOpen ? 'Painel de Edição Aberto' : 'Personalizar Este Site'}
          </button>
        </div>
      )}

      {/* Navigation Header */}
      <header className={`sticky ${onOpenEditor ? 'top-8' : 'top-0'} z-40 backdrop-blur-md ${config.themeMode === 'dark' ? 'bg-zinc-900/90 border-zinc-800' : 'bg-white/90 border-slate-200'} border-b shadow-xs transition-all`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-md text-lg"
              style={primaryStyle}
            >
              {config.logoText.charAt(0)}
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight block">
                {config.logoText}
              </span>
              {config.slogan && (
                <span className="text-xs text-slate-500 font-medium hidden sm:block line-clamp-1">
                  {config.slogan}
                </span>
              )}
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            {config.showAbout && (
              <button 
                onClick={() => scrollToSection('sobre')} 
                className="hover:opacity-80 transition hover:text-blue-600 cursor-pointer"
              >
                Sobre
              </button>
            )}
            {config.showServices && (
              <button 
                onClick={() => scrollToSection('servicos')} 
                className="hover:opacity-80 transition hover:text-blue-600 cursor-pointer"
              >
                {config.category === 'restaurant' ? 'Cardápio' : 'Serviços'}
              </button>
            )}
            {config.showPortfolio && config.projects.length > 0 && (
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="hover:opacity-80 transition hover:text-blue-600 cursor-pointer"
              >
                Portfólio
              </button>
            )}
            {config.showPricing && (
              <button 
                onClick={() => scrollToSection('planos')} 
                className="hover:opacity-80 transition hover:text-blue-600 cursor-pointer"
              >
                Planos
              </button>
            )}
            {config.showTestimonials && config.testimonials.length > 0 && (
              <button 
                onClick={() => scrollToSection('depoimentos')} 
                className="hover:opacity-80 transition hover:text-blue-600 cursor-pointer"
              >
                Depoimentos
              </button>
            )}
            {config.showContact && (
              <button 
                onClick={() => scrollToSection('contato')} 
                className="hover:opacity-80 transition hover:text-blue-600 cursor-pointer"
              >
                Contato
              </button>
            )}
          </nav>

          {/* Action Header Button */}
          <div className="hidden md:flex items-center gap-3">
            {config.whatsapp && (
              <a
                href={`https://wa.me/${config.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white shadow-sm hover:shadow transition text-sm cursor-pointer"
                style={primaryStyle}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Falar no WhatsApp</span>
              </a>
            )}
          </div>

          {/* Mobile menu trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-slate-200 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-4 space-y-3">
            {config.showAbout && (
              <button onClick={() => scrollToSection('sobre')} className="block w-full text-left py-2 text-slate-700 dark:text-slate-200 font-medium">
                Sobre
              </button>
            )}
            {config.showServices && (
              <button onClick={() => scrollToSection('servicos')} className="block w-full text-left py-2 text-slate-700 dark:text-slate-200 font-medium">
                {config.category === 'restaurant' ? 'Cardápio' : 'Serviços'}
              </button>
            )}
            {config.showPortfolio && config.projects.length > 0 && (
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left py-2 text-slate-700 dark:text-slate-200 font-medium">
                Portfólio
              </button>
            )}
            {config.showPricing && (
              <button onClick={() => scrollToSection('planos')} className="block w-full text-left py-2 text-slate-700 dark:text-slate-200 font-medium">
                Planos
              </button>
            )}
            {config.showTestimonials && (
              <button onClick={() => scrollToSection('depoimentos')} className="block w-full text-left py-2 text-slate-700 dark:text-slate-200 font-medium">
                Depoimentos
              </button>
            )}
            {config.showContact && (
              <button onClick={() => scrollToSection('contato')} className="block w-full text-left py-2 text-slate-700 dark:text-slate-200 font-medium">
                Contato
              </button>
            )}
            {config.whatsapp && (
              <a
                href={`https://wa.me/${config.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-white shadow-sm"
                style={primaryStyle}
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            )}
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-12 md:pt-20 pb-16 md:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              {config.slogan && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-zinc-700">
                  <span className="w-2 h-2 rounded-full" style={primaryStyle}></span>
                  {config.slogan}
                </div>
              )}

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                {config.heroTitle}
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
                {config.heroSubtitle}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 sm:items-center">
                <button
                  onClick={() => scrollToSection('contato')}
                  className="px-7 py-4 rounded-xl font-bold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition duration-200 text-base flex items-center justify-center gap-2 cursor-pointer"
                  style={primaryStyle}
                >
                  <span>{config.heroCtaText}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                {config.heroSecondaryCta && (
                  <button
                    onClick={() => scrollToSection('servicos')}
                    className="px-6 py-4 rounded-xl font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-800 dark:text-slate-200 transition text-base flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{config.heroSecondaryCta}</span>
                  </button>
                )}
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-200 dark:border-zinc-800 grid grid-cols-3 gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Atendimento Garantido</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>Avaliação 5.0 Estrelas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-500" />
                  <span>Resposta Rápida</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800">
                  <img
                    src={config.heroImage}
                    alt={config.name}
                    className="w-full h-[380px] sm:h-[460px] object-cover object-center transform hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md p-4 rounded-xl border border-slate-200/50 dark:border-zinc-700/50 shadow-lg flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0 font-bold" style={primaryStyle}>
                      ✓
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">{config.name}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-300">Pronto para atender você com máxima excelência.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      {config.showAbout && (
        <section id="sobre" className={`py-16 md:py-24 ${config.themeMode === 'dark' ? 'bg-zinc-900' : 'bg-white'} border-y border-slate-200/60 dark:border-zinc-800`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-zinc-700">
                  <img
                    src={config.aboutImage}
                    alt={config.aboutTitle}
                    className="w-full h-[360px] object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800" style={primaryText}>
                  Quem Somos
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  {config.aboutTitle}
                </h2>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {config.aboutText}
                </p>

                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700/60">
                    <span className="text-2xl font-black block" style={primaryText}>100%</span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Compromisso com Qualidade</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700/60">
                    <span className="text-2xl font-black block" style={primaryText}>+500</span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Clientes Atendidos</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* SERVICES / MENU SECTION */}
      {config.showServices && config.services.length > 0 && (
        <section id="servicos" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800" style={primaryText}>
                {config.category === 'restaurant' ? 'Nossos Pratos Principais' : 'Nossos Serviços'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {config.category === 'restaurant' ? 'Cardápio de Destaque' : 'Soluções feitas para atender sua necessidade'}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base">
                Confira em detalhes tudo o que oferecemos com alto padrão e transparência.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {config.services.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-2xl p-6 transition duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl ${
                    config.themeMode === 'dark' 
                      ? 'bg-zinc-900 border border-zinc-800 hover:border-zinc-700' 
                      : 'bg-white border border-slate-200 hover:border-slate-300'
                  } flex flex-col justify-between`}
                >
                  <div>
                    {item.image && (
                      <div className="mb-4 rounded-xl overflow-hidden h-44">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      {item.price && (
                        <span className="text-sm font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-zinc-800 shrink-0" style={primaryText}>
                          {item.price}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedService(item.title);
                      scrollToSection('contato');
                    }}
                    className="w-full py-2.5 rounded-xl font-semibold text-xs border border-slate-200 dark:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-800 transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Solicitar Informações</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PORTFOLIO / GALLERY SECTION */}
      {config.showPortfolio && config.projects.length > 0 && (
        <section id="portfolio" className={`py-16 md:py-24 ${config.themeMode === 'dark' ? 'bg-zinc-900' : 'bg-slate-100'} border-y border-slate-200/60 dark:border-zinc-800`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white dark:bg-zinc-800" style={primaryText}>
                Galeria de Trabalhos
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Projetos e Resultados Recentes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.projects.map((proj) => (
                <div key={proj.id} className="group rounded-2xl overflow-hidden shadow-md bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-md">
                      {proj.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-1">{proj.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PRICING SECTION (FOR SAAS / LANDING) */}
      {config.showPricing && (
        <section id="planos" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800" style={primaryText}>
                Planos & Investimento
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Escolha o plano perfeito para você
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Basic */}
              <div className="rounded-2xl p-6 border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold">Iniciante</h3>
                  <div className="my-4">
                    <span className="text-3xl font-black">R$ 49</span>
                    <span className="text-slate-500 text-sm"> /mês</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 mb-6">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Até 3 projetos</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Suporte via e-mail</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Atualizações mensais</li>
                  </ul>
                </div>
                <button onClick={() => scrollToSection('contato')} className="w-full py-3 rounded-xl font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-sm transition">
                  Assinar Iniciante
                </button>
              </div>

              {/* Pro */}
              <div className="rounded-2xl p-6 border-2 border-blue-600 bg-white dark:bg-zinc-900 shadow-xl flex flex-col justify-between relative transform lg:-translate-y-2">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider">
                  Recomendado
                </div>
                <div>
                  <h3 className="text-lg font-bold">Profissional</h3>
                  <div className="my-4">
                    <span className="text-3xl font-black" style={primaryText}>R$ 99</span>
                    <span className="text-slate-500 text-sm"> /mês</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 mb-6">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Projetos ilimitados</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Suporte VIP no WhatsApp</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Automações avançadas</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Relatórios customizados</li>
                  </ul>
                </div>
                <button onClick={() => scrollToSection('contato')} className="w-full py-3 rounded-xl font-bold text-white text-sm shadow-md transition" style={primaryStyle}>
                  Começar Agora
                </button>
              </div>

              {/* Enterprise */}
              <div className="rounded-2xl p-6 border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold">Empresarial</h3>
                  <div className="my-4">
                    <span className="text-3xl font-black">Personalizado</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 mb-6">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Múltiplas contas</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Gerente dedicado</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> SLA de 99.9%</li>
                  </ul>
                </div>
                <button onClick={() => scrollToSection('contato')} className="w-full py-3 rounded-xl font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-sm transition">
                  Falar com Consultor
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TESTIMONIALS SECTION */}
      {config.showTestimonials && config.testimonials.length > 0 && (
        <section id="depoimentos" className={`py-16 md:py-24 ${config.themeMode === 'dark' ? 'bg-zinc-900/60' : 'bg-slate-50'} border-t border-slate-200/60 dark:border-zinc-800`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-200/60 dark:bg-zinc-800" style={primaryText}>
                O que Dizem os Clientes
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Depoimentos e Avaliações
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {config.testimonials.map((test) => (
                <div key={test.id} className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-md space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm italic leading-relaxed">
                    "{test.content}"
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <img src={test.avatar} alt={test.author} className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-zinc-700" />
                    <div>
                      <h4 className="font-bold text-sm">{test.author}</h4>
                      <p className="text-xs text-slate-500">{test.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTACT SECTION */}
      {config.showContact && (
        <section id="contato" className={`py-16 md:py-24 ${config.themeMode === 'dark' ? 'bg-zinc-900' : 'bg-white'} border-t border-slate-200 dark:border-zinc-800`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Contact Information */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800" style={primaryText}>
                    Fale Conosco
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3">
                    Entre em Contato Hoje Mesmo
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
                    Estamos à disposição para tirar dúvidas, fazer um orçamento ou agendar um atendimento.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {config.phone && (
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80">
                      <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs text-slate-500 font-medium block">Telefone</span>
                        <a href={`tel:${config.phone.replace(/\D/g, '')}`} className="font-bold text-sm hover:underline">
                          {config.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {config.email && (
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80">
                      <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs text-slate-500 font-medium block">E-mail</span>
                        <a href={`mailto:${config.email}`} className="font-bold text-sm hover:underline">
                          {config.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {config.address && (
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80">
                      <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs text-slate-500 font-medium block">Endereço</span>
                        <span className="font-bold text-sm">{config.address}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Direct Whatsapp button */}
                {config.whatsapp && (
                  <a
                    href={`https://wa.me/${config.whatsapp.replace(/\D/g, '')}?text=Ol%C3%A1!%20Encontrei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-bold text-white shadow-md hover:shadow-lg transition cursor-pointer"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Iniciar Conversa no WhatsApp</span>
                  </a>
                )}
              </div>

              {/* Interactive Contact Form */}
              <div className="lg:col-span-7">
                <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xl">
                  <h3 className="text-xl font-bold mb-1">Envie uma Mensagem</h3>
                  <p className="text-xs text-slate-500 mb-6">
                    {selectedService ? `Interesse em: ${selectedService}` : 'Preencha o formulário abaixo para receber nosso retorno rápido.'}
                  </p>

                  {formSubmitted ? (
                    <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2">
                      <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto font-bold text-xl">
                        ✓
                      </div>
                      <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-100">Mensagem Enviada com Sucesso!</h4>
                      <p className="text-xs text-emerald-700 dark:text-emerald-300">
                        Obrigado pelo contato, {contactForm.name}. Responderemos em até 24 horas.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitContact} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold mb-1">Seu Nome *</label>
                          <input
                            type="text"
                            required
                            placeholder="Ex: Ana Souza"
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-1">Seu E-mail *</label>
                          <input
                            type="email"
                            required
                            placeholder="ana@email.com"
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold mb-1">Telefone / WhatsApp</label>
                        <input
                          type="text"
                          placeholder="(11) 99999-8888"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold mb-1">Como podemos ajudar?</label>
                        <textarea
                          rows={4}
                          placeholder="Descreva brevemente o que você precisa..."
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl font-bold text-white shadow-md hover:shadow-lg transition text-sm flex items-center justify-center gap-2 cursor-pointer"
                        style={primaryStyle}
                      >
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensagem</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <span className="text-lg font-bold text-white block">{config.logoText}</span>
            <p className="leading-relaxed text-slate-400">
              {config.description || config.slogan}
            </p>
          </div>

          <div>
            <span className="text-white font-bold block mb-3 uppercase tracking-wider text-[11px]">Navegação</span>
            <ul className="space-y-2">
              {config.showAbout && <li><button onClick={() => scrollToSection('sobre')} className="hover:text-white">Sobre</button></li>}
              {config.showServices && <li><button onClick={() => scrollToSection('servicos')} className="hover:text-white">Serviços</button></li>}
              {config.showPortfolio && <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-white">Portfólio</button></li>}
              {config.showContact && <li><button onClick={() => scrollToSection('contato')} className="hover:text-white">Contato</button></li>}
            </ul>
          </div>

          <div>
            <span className="text-white font-bold block mb-3 uppercase tracking-wider text-[11px]">Contato</span>
            <ul className="space-y-1.5">
              {config.phone && <li>{config.phone}</li>}
              {config.email && <li>{config.email}</li>}
              {config.address && <li>{config.address}</li>}
            </ul>
          </div>

          <div>
            <span className="text-white font-bold block mb-3 uppercase tracking-wider text-[11px]">Redes Sociais</span>
            {config.instagram && (
              <a href={`https://instagram.com/${config.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:text-white text-xs">
                <Instagram className="w-4 h-4" />
                <span>{config.instagram}</span>
              </a>
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-slate-500">
          <p>© {new Date().getFullYear()} {config.name}. Todos os direitos reservados.</p>
          <p className="mt-2 sm:mt-0">Criado com o Criador de Sites Inteligente</p>
        </div>
      </footer>
    </div>
  );
};
