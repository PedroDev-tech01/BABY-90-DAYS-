import React, { useState } from 'react';
import { CONTENT } from '../data/translations';
import { DocumentPagePreview } from './DocumentPagePreview';
import { WhatsAppFeedbacks } from './WhatsAppFeedbacks';
import { 
  Check, ShieldCheck, Heart, Moon, Clock, ShieldAlert, 
  Users, Sparkles, Activity, FileText, ShoppingCart, CheckCircle, 
  Printer, ArrowRight, Download, BookOpen, ChevronDown, ChevronUp, 
  X, Lock, Briefcase, Eye, Info, AlertTriangle, FileCheck, HelpCircle,
  ChevronLeft, ChevronRight, Maximize2, ZoomIn, Droplet, Calendar,
  CheckSquare, Layers
} from 'lucide-react';

interface Props {
  onBackToApp?: () => void;
}

export const Baby90LandingPage: React.FC<Props> = () => {
  const [selectedPreviewModule, setSelectedPreviewModule] = useState('capa');
  const [isPageZoomOpen, setIsPageZoomOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  
  const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/H107204418F';

  const t = CONTENT;

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getKitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-sky-600" />;
      case 'ShoppingCart': return <ShoppingCart className="w-5 h-5 text-sky-600" />;
      case 'Droplet': return <Droplet className="w-5 h-5 text-sky-600" />;
      case 'Moon': return <Moon className="w-5 h-5 text-sky-600" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-sky-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-sky-600" />;
      case 'HelpCircle': return <HelpCircle className="w-5 h-5 text-sky-600" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-sky-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-sky-600" />;
      case 'CheckSquare': return <CheckSquare className="w-5 h-5 text-sky-600" />;
      case 'Users': return <Users className="w-5 h-5 text-sky-600" />;
      default: return <FileText className="w-5 h-5 text-sky-600" />;
    }
  };

  const activeScreenshot = t.pdfPreview.screenshots.find(
    (s) => s.id === selectedPreviewModule
  ) || t.pdfPreview.screenshots[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased font-sans selection:bg-sky-100 selection:text-sky-900 pb-20 sm:pb-0">
      
      {/* 0. TOP ANNOUNCEMENT BANNER */}
      <div className="bg-slate-900 text-white text-xs font-semibold py-2.5 px-4 sticky top-0 z-40 shadow-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-center sm:text-left">
          
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-sky-300">{t.topBanner.discount}</span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="hidden md:inline text-slate-300">{t.topBanner.instantDelivery}</span>
          </div>

          <div className="flex items-center gap-3 mx-auto sm:mx-0">
            <span className="hidden lg:inline text-slate-300 text-xs font-medium">{t.topBanner.guarantee}</span>
            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold px-3 py-1 rounded-lg text-xs transition cursor-pointer inline-block shadow-2xs"
            >
              {t.topBanner.cta}
            </a>
          </div>
        </div>
      </div>

      {/* HEADER / NAVIGATION */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-10 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 text-left cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center font-black text-sm shadow-sm group-hover:bg-sky-500 transition">
                90
              </div>
              <div>
                <span className="font-black text-lg tracking-tight text-slate-900 block leading-tight">
                  {t.header.logo}
                </span>
                <span className="text-[10px] font-bold text-sky-700 tracking-wide uppercase block">
                  Newborn Organization Kit
                </span>
              </div>
            </button>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-600">
            <button onClick={() => scrollToSection('kit-showcase')} className="hover:text-sky-600 transition cursor-pointer">
              {t.header.navInside}
            </button>
            <button onClick={() => scrollToSection('screenshots')} className="hover:text-sky-600 transition cursor-pointer">
              Preview
            </button>
            <button onClick={() => scrollToSection('cronograma')} className="hover:text-sky-600 transition cursor-pointer">
              {t.header.navTimeline}
            </button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-emerald-600 transition cursor-pointer flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Reviews</span>
            </button>
            <button onClick={() => scrollToSection('para-quem')} className="hover:text-sky-600 transition cursor-pointer">
              {t.header.navWhoFor}
            </button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-sky-600 transition cursor-pointer">
              {t.header.navFaq}
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-500 text-white font-extrabold px-4 py-2 rounded-xl text-xs sm:text-sm shadow-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <span>{t.header.buyNow}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-12 md:pt-14 pb-16 md:pb-20 overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Avatar + Category Badges */}
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-sky-100 text-sky-900 border border-sky-200 shadow-2xs">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 shrink-0" />
                  <span>{t.hero.avatarBadge}</span>
                </div>
                
                <div className="block">
                  <span className="text-xs font-black text-slate-800 bg-white px-3 py-1 rounded-md border border-slate-200 uppercase tracking-wider inline-block">
                    {t.hero.productTag}
                  </span>
                </div>
              </div>

              {/* Main Emotional Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.16]">
                {t.hero.headline}
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                {t.hero.subheadline}
              </p>

              {/* Core Benefits Pills (Replacing 85+ pages focus) */}
              <div className="flex flex-wrap gap-2 pt-1">
                {t.hero.benefitPills.map((pill, idx) => (
                  <span 
                    key={idx} 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-slate-800 text-xs font-bold border border-slate-200 shadow-2xs"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>{pill}</span>
                  </span>
                ))}
              </div>

              {/* Discreet Specs Note */}
              <div className="text-xs text-slate-500 font-medium flex items-center gap-2">
                <span className="font-mono bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                  {t.hero.specsPill}
                </span>
              </div>

              {/* Clean Pricing & Direct CTA Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-md space-y-4">
                
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    {t.hero.price}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-md border border-emerald-200">
                    {t.hero.paymentType}
                  </span>
                  <span className="text-xs text-slate-500 font-medium ml-auto flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" /> Guaranteed Secure Checkout
                  </span>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={HOTMART_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 px-6 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-black text-base sm:text-lg shadow-sm transition cursor-pointer flex items-center justify-center gap-2 text-center"
                  >
                    <Download className="w-5 h-5" />
                    <span>{t.hero.ctaPrimary}</span>
                  </a>

                  <button
                    onClick={() => scrollToSection('kit-showcase')}
                    className="py-4 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer border border-slate-200"
                  >
                    <Eye className="w-4 h-4 text-sky-600" />
                    <span>{t.hero.ctaSecondary}</span>
                  </button>
                </div>

                {/* Badges Under CTA */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-600">
                  {t.hero.badgesUnderCta.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-slate-700 bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{b}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Right Column: Visual Before/After Box */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white border border-slate-200 shadow-xl p-6 space-y-5 relative">
                
                <div className="text-center space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded bg-sky-100 text-sky-800 inline-block">
                    PRACTICAL TRANSFORMATION
                  </span>
                  <h3 className="text-xl font-black text-slate-900">
                    From Overwhelmed to Organized
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {/* Before */}
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
                    <div className="text-center">
                      <span className="font-extrabold text-amber-900 block uppercase tracking-wider text-[11px]">
                        {t.hero.transformationBefore.title}
                      </span>
                      <span className="text-[10px] text-amber-700 font-medium">
                        {t.hero.transformationBefore.subtitle}
                      </span>
                    </div>
                    <ul className="space-y-2 text-slate-700 text-[11px]">
                      {t.hero.transformationBefore.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 leading-snug">
                          <span className="text-amber-600 font-bold shrink-0">✕</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* After */}
                  <div className="p-4 rounded-2xl bg-emerald-50/90 border-2 border-emerald-500 space-y-3 shadow-xs">
                    <div className="text-center">
                      <span className="font-black text-emerald-900 block uppercase tracking-wider text-[11px]">
                        {t.hero.transformationAfter.title}
                      </span>
                      <span className="text-[10px] text-emerald-700 font-medium">
                        {t.hero.transformationAfter.subtitle}
                      </span>
                    </div>
                    <ul className="space-y-2 text-slate-800 font-medium text-[11px]">
                      {t.hero.transformationAfter.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 leading-snug">
                          <span className="text-emerald-600 font-bold shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Kit Summary Card */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between gap-3 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-xl shrink-0">
                      📦
                    </div>
                    <div>
                      <span className="font-extrabold text-sm text-white block">BABY90 Newborn Kit</span>
                      <span className="text-[11px] text-slate-300">Complete Printable & Mobile System</span>
                    </div>
                  </div>
                  <span className="text-sky-300 font-black text-sm shrink-0">{t.hero.price}</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. POSITIONING SECTION: YOUR PRACTICAL ORGANIZATION SYSTEM */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
              {t.systemPositioning.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {t.systemPositioning.title}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {t.systemPositioning.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.systemPositioning.cards.map((card, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-2xs hover:border-sky-300 transition">
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center">
                  {getKitIcon(card.iconName)}
                </div>
                <h3 className="font-extrabold text-lg text-slate-900">{card.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. SHOW WHAT'S INSIDE THE KIT: "Everything You Need in One Place" */}
      <section id="kit-showcase" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
              {t.kitShowcase.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              {t.kitShowcase.title}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {t.kitShowcase.subtitle}
            </p>
          </div>

          {/* 9-Item Organized Kit Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.kitShowcase.items.map((item, idx) => (
              <div 
                key={item.id} 
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md hover:border-sky-300 transition group"
              >
                <div className="space-y-3">
                  
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded bg-sky-100 text-sky-800">
                      {item.badge}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-bold">
                      #{idx + 1}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 group-hover:bg-sky-100 transition">
                      {getKitIcon(item.iconName)}
                    </div>
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                    {item.tag}
                  </span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Included
                  </span>
                </div>

              </div>
            ))}
          </div>

          {/* Banner Under Showcase */}
          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-white border-2 border-sky-400 shadow-md text-center space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-black uppercase text-sky-700 tracking-wider">All 9 Tools Included In One Download</span>
              <h3 className="text-xl font-black text-slate-900">Instant Access for a One-Time Payment of $9.99</h3>
              <p className="text-xs sm:text-sm text-slate-600">No subscriptions, no hidden fees. Download instantly and keep forever.</p>
            </div>

            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-sm sm:text-base shadow-sm transition cursor-pointer inline-flex items-center gap-2"
            >
              <span>Get My BABY90 Kit — $9.99</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* 4. REAL LIVE DOCUMENT PREVIEW (6 PAGES) */}
      <section id="screenshots" className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
              {t.pdfPreview.badge}
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              {t.pdfPreview.title}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {t.pdfPreview.subtitle}
            </p>
          </div>

          {/* Sequence Tabs (1 to 6) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 max-w-6xl mx-auto">
            {t.pdfPreview.screenshots.map((sc, idx) => {
              const isSelected = selectedPreviewModule === sc.id;
              return (
                <button
                  key={sc.id}
                  onClick={() => setSelectedPreviewModule(sc.id)}
                  className={`p-3 rounded-2xl text-xs font-bold transition cursor-pointer text-left flex flex-col justify-between gap-2 border ${
                    isSelected
                      ? 'bg-sky-50 border-sky-500 text-sky-950 shadow-sm ring-2 ring-sky-500/20'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                      isSelected ? 'bg-sky-600 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {idx === 0 ? 'p. 1' : idx === 1 ? 'checklist' : idx === 2 ? 'log' : idx === 3 ? 'sleep' : idx === 4 ? 'doctor' : 'budget'}
                    </span>
                  </div>
                  <span className="font-extrabold text-[11px] leading-tight line-clamp-2">
                    {sc.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Document Preview Stage */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left/Main Column: Visual Document Page */}
            <div className="lg:col-span-7 flex flex-col items-center space-y-4">
              
              {/* Toolbar */}
              <div className="w-full flex items-center justify-between bg-slate-100/80 px-4 py-2.5 rounded-2xl border border-slate-200 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-slate-500 font-bold">
                    Page {t.pdfPreview.screenshots.findIndex(s => s.id === selectedPreviewModule) + 1} of 6
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-600 font-medium truncate max-w-[180px] sm:max-w-[240px]">
                    {activeScreenshot.title}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      const curIdx = t.pdfPreview.screenshots.findIndex(s => s.id === selectedPreviewModule);
                      const nextIdx = (curIdx - 1 + t.pdfPreview.screenshots.length) % t.pdfPreview.screenshots.length;
                      setSelectedPreviewModule(t.pdfPreview.screenshots[nextIdx].id);
                    }}
                    title="Previous page"
                    className="p-1.5 rounded-lg bg-white hover:bg-slate-200 border border-slate-200 text-slate-700 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      const curIdx = t.pdfPreview.screenshots.findIndex(s => s.id === selectedPreviewModule);
                      const nextIdx = (curIdx + 1) % t.pdfPreview.screenshots.length;
                      setSelectedPreviewModule(t.pdfPreview.screenshots[nextIdx].id);
                    }}
                    title="Next page"
                    className="p-1.5 rounded-lg bg-white hover:bg-slate-200 border border-slate-200 text-slate-700 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => setIsPageZoomOpen(true)}
                    className="ml-1 p-1.5 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-1 text-[11px] font-bold cursor-pointer shadow-2xs"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Zoom</span>
                  </button>
                </div>
              </div>

              {/* Realistic Document Sheet with Shadow & Watermark */}
              <div 
                className="w-full relative group cursor-pointer"
                onClick={() => setIsPageZoomOpen(true)}
              >
                {/* Watermark Tag */}
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md text-amber-300 font-mono font-black text-[9px] px-3 py-1 rounded-full border border-amber-300/40 tracking-wider shadow-md z-20 flex items-center gap-1.5 pointer-events-none">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>{t.pdfPreview.watermark}</span>
                </div>

                {/* Hover Overlay Hint */}
                <div className="absolute inset-0 bg-sky-950/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl z-10 flex items-center justify-center">
                  <span className="bg-slate-900 text-white text-xs font-extrabold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-sky-400" />
                    Click to view full-size page
                  </span>
                </div>

                {/* Actual Page Component */}
                <DocumentPagePreview pageId={activeScreenshot.id} onOpenZoom={() => setIsPageZoomOpen(true)} />
              </div>

              <span className="text-[11px] text-slate-400 font-medium italic text-center">
                Tip: Click on the preview or use the Zoom button to inspect full details
              </span>

            </div>

            {/* Right Column: Module Details & Excerpt */}
            <div className="lg:col-span-5 bg-slate-50 rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-7 space-y-6 flex flex-col justify-between">
              <div className="space-y-5">
                
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-900 text-white inline-block mb-2">
                    {activeScreenshot.label}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">
                    {activeScreenshot.title}
                  </h3>
                  <span className="text-xs font-bold text-sky-700 block mt-1">
                    {activeScreenshot.pageRange}
                  </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {activeScreenshot.description}
                </p>

                <div className="space-y-2.5 pt-1">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Kit Highlights:
                  </h4>
                  <div className="space-y-2">
                    {activeScreenshot.highlights.map((hl, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5 text-xs font-medium text-slate-800 shadow-2xs">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-1 relative">
                  <span className="text-[10px] font-mono text-sky-900 font-bold uppercase block">
                    Kit Excerpt:
                  </span>
                  <p className="text-xs font-serif text-slate-800 italic leading-relaxed">
                    "{activeScreenshot.sampleExcerpt}"
                  </p>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4 border-t border-slate-200">
                <a
                  href={HOTMART_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-sm shadow-sm transition cursor-pointer flex items-center justify-center gap-2 text-center"
                >
                  <span>{t.pdfPreview.ctaInside}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex items-center justify-center gap-3 text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Instant Digital Access
                  </span>
                  <span>•</span>
                  <span>7-Day Guarantee</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. 90-DAY TIMELINE ROADMAP */}
      <section id="cronograma" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
              {t.timeline.badge}
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              {t.timeline.title}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {t.timeline.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.timeline.steps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded bg-sky-600 text-white">
                      {step.phase}
                    </span>
                    <span className="text-xs font-bold text-slate-500">{step.period}</span>
                  </div>

                  <h3 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{step.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">{t.timeline.keyFocusLabel}</span>
                  {step.keyFocus.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                      <span className="text-sky-600 font-bold">•</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. PRINTABLE TOOLS & BONUS MATERIALS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              {t.bonusesSection.badge}
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              {t.bonusesSection.title}
            </h2>
            <p className="text-slate-600 text-base">
              {t.bonusesSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.bonusesSection.items.map((bonus, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
                
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded bg-sky-100 text-sky-800">
                      {bonus.number}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                    {getKitIcon(bonus.iconName)}
                  </div>

                  <h3 className="font-extrabold text-base text-slate-900">{bonus.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{bonus.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-200 text-center">
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                    {t.bonusesSection.includedFreeText}
                  </span>
                </div>

              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-2">
            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-base shadow-sm transition cursor-pointer inline-flex items-center gap-2"
            >
              <span>{t.bonusesSection.cta}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>

      {/* 7. HOW IT WORKS (3 Simple Steps) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
              {t.howItWorks.badge}
            </span>
            <h2 className="text-3xl font-black text-slate-900">{t.howItWorks.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3 shadow-xs">
                <div className="w-12 h-12 rounded-full bg-sky-600 text-white font-black text-lg flex items-center justify-center mx-auto shadow-sm">
                  {step.number}
                </div>
                <h3 className="font-extrabold text-lg text-slate-900">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7.5. REAL WHATSAPP PARENT REVIEWS & FEEDBACK */}
      <div id="reviews">
        <WhatsAppFeedbacks />
      </div>

      {/* 8. WHO IT IS FOR / NOT FOR */}
      <section id="para-quem" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
              {t.whoIsItFor.badge}
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Is the BABY90 Kit Right for You?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* WHO IT'S FOR */}
            <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/70 border-2 border-emerald-500 space-y-4">
              <h3 className="text-xl font-extrabold text-emerald-900 flex items-center gap-2">
                <Check className="w-6 h-6 text-emerald-600 shrink-0" />
                <span>{t.whoIsItFor.titleFor}</span>
              </h3>
              <ul className="space-y-3">
                {t.whoIsItFor.forItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WHO IT'S NOT FOR */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-300 space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <X className="w-6 h-6 text-slate-400 shrink-0" />
                <span>{t.whoIsItFor.titleNotFor}</span>
              </h3>
              <ul className="space-y-3">
                {t.whoIsItFor.notForItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <span className="text-slate-400 font-bold shrink-0">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 9. 7-DAY MONEY-BACK GUARANTEE */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-slate-200 shadow-md flex flex-col sm:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-3xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <div className="space-y-3 text-center sm:text-left flex-1">
              <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 inline-block">
                {t.guarantee.badge}
              </span>
              <h2 className="text-2xl font-black text-slate-900">{t.guarantee.title}</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.guarantee.desc}</p>
              
              <ul className="space-y-1.5 pt-1 text-xs font-semibold text-slate-700">
                {t.guarantee.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ ACCORDION */}
      <section id="faq" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
              {t.faq.badge}
            </span>
            <h2 className="text-3xl font-black text-slate-900">{t.faq.title}</h2>
            <p className="text-slate-600 text-sm">{t.faq.subtitle}</p>
          </div>

          <div className="space-y-3">
            {t.faq.items.map((item, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 transition"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 flex justify-between items-center gap-4 cursor-pointer hover:bg-slate-100"
                >
                  <span>{item.question}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="w-5 h-5 text-sky-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {openFaqIndex === idx && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. FINAL HIGH-CONVERTING CTA BOX */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-sky-500/20 text-sky-300 border border-sky-400/30">
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>{t.ctaSection.avatarBadge}</span>
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              {t.ctaSection.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.ctaSection.subtitle}
            </p>
          </div>

          <div className="max-w-md mx-auto p-6 rounded-3xl bg-slate-800/90 border border-slate-700 shadow-2xl space-y-5">
            <div className="space-y-1">
              <span className="text-4xl font-black text-white">{t.ctaSection.price}</span>
              <span className="text-xs text-slate-300 block mt-1">{t.ctaSection.priceDetails}</span>
            </div>

            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-base shadow-lg transition cursor-pointer block text-center"
            >
              {t.ctaSection.button}
            </a>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.ctaSection.securityText}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium pt-2">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-sky-400" /> Instant Digital Access
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-sky-400" /> Printable & Phone-Friendly
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-sky-400" /> 7-Day Refund Guarantee
            </span>
          </div>

        </div>
      </section>

      {/* 12. MEDICAL DISCLAIMER & SAFETY */}
      <section className="py-10 bg-slate-100 border-t border-slate-200 text-slate-500 text-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 font-bold text-slate-700">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{t.medicalDisclaimer.title}</span>
          </div>
          <p className="leading-relaxed">
            {t.medicalDisclaimer.text}
          </p>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-10 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <span className="font-extrabold text-white text-sm block">BABY90</span>
            <p className="text-slate-400">{t.footer.copyright} {t.footer.rights}</p>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button 
              onClick={() => setIsLegalModalOpen(true)}
              className="hover:text-white transition cursor-pointer"
            >
              Terms of Use & Privacy
            </button>
            <span>•</span>
            <button 
              onClick={() => setIsLegalModalOpen(true)}
              className="hover:text-white transition cursor-pointer"
            >
              Refund Policy (7 Days)
            </button>
          </div>
        </div>
      </footer>

      {/* DOCUMENT FULL PAGE ZOOM MODAL */}
      {isPageZoomOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 overflow-y-auto">
          {/* Top Bar */}
          <div className="max-w-4xl w-full mx-auto flex items-center justify-between gap-4 text-white pb-3 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold bg-sky-500 text-slate-950 px-2.5 py-0.5 rounded">
                PAGE {t.pdfPreview.screenshots.findIndex(s => s.id === selectedPreviewModule) + 1} OF 6
              </span>
              <span className="text-sm font-bold text-slate-200 hidden sm:inline">
                {activeScreenshot.title}
              </span>
            </div>

            {/* Quick Page Picker + Close */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl">
                {t.pdfPreview.screenshots.map((sc, i) => (
                  <button
                    key={sc.id}
                    onClick={() => setSelectedPreviewModule(sc.id)}
                    className={`w-7 h-7 rounded-lg text-xs font-bold transition cursor-pointer flex items-center justify-center ${
                      selectedPreviewModule === sc.id
                        ? 'bg-sky-500 text-slate-950 font-black'
                        : 'text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsPageZoomOpen(false)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
                title="Close Zoom"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Zoom Area */}
          <div className="my-auto py-4 flex items-center justify-center relative max-w-4xl w-full mx-auto">
            {/* Prev Button */}
            <button
              onClick={() => {
                const curIdx = t.pdfPreview.screenshots.findIndex(s => s.id === selectedPreviewModule);
                const nextIdx = (curIdx - 1 + t.pdfPreview.screenshots.length) % t.pdfPreview.screenshots.length;
                setSelectedPreviewModule(t.pdfPreview.screenshots[nextIdx].id);
              }}
              className="absolute left-0 sm:-left-12 p-3 rounded-full bg-slate-800/90 hover:bg-slate-700 text-white shadow-xl z-20 cursor-pointer"
              title="Previous Page"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Document Sheet */}
            <div className="w-full max-w-[580px] shadow-2xl rounded-2xl ring-1 ring-white/10">
              <DocumentPagePreview pageId={activeScreenshot.id} />
            </div>

            {/* Next Button */}
            <button
              onClick={() => {
                const curIdx = t.pdfPreview.screenshots.findIndex(s => s.id === selectedPreviewModule);
                const nextIdx = (curIdx + 1) % t.pdfPreview.screenshots.length;
                setSelectedPreviewModule(t.pdfPreview.screenshots[nextIdx].id);
              }}
              className="absolute right-0 sm:-right-12 p-3 rounded-full bg-slate-800/90 hover:bg-slate-700 text-white shadow-xl z-20 cursor-pointer"
              title="Next Page"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar */}
          <div className="max-w-4xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-300 text-xs pt-3 border-t border-slate-800">
            <span className="italic text-slate-400">
              "{activeScreenshot.sampleExcerpt}"
            </span>
            <div className="flex items-center gap-2">
              <a
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black transition cursor-pointer inline-block"
              >
                Get My BABY90 Kit — $9.99
              </a>
            </div>
          </div>
        </div>
      )}

      {/* LEGAL & TERMS MODAL */}
      {isLegalModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-lg text-slate-900">Terms & 7-Day Refund Policy</h3>
              <button 
                onClick={() => setIsLegalModalOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="text-xs text-slate-600 space-y-3 max-h-60 overflow-y-auto pr-2 leading-relaxed">
              <p><strong>1. Digital Delivery:</strong> BABY90 is a digital organization product delivered electronically immediately upon payment confirmation via Hotmart.</p>
              <p><strong>2. 7-Day Guarantee:</strong> If you are not satisfied with the material, you may request a 100% refund within 7 days from the purchase date through Hotmart customer support.</p>
              <p><strong>3. Non-Medical Purpose:</strong> This kit is strictly for personal organization and educational routine management. It is not clinical medical advice.</p>
            </div>

            <button
              onClick={() => setIsLegalModalOpen(false)}
              className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl text-xs hover:bg-slate-800"
            >
              Understood
            </button>
          </div>
        </div>
      )}

      {/* MOBILE STICKY BUY BAR */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 z-30 flex items-center justify-between gap-3 shadow-lg">
        <div>
          <span className="text-xs font-black text-slate-900 leading-tight block">BABY90 Kit</span>
          <span className="text-xs font-black text-sky-600">{t.hero.price}</span>
        </div>
        <a
          href={HOTMART_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer text-center"
        >
          <Download className="w-4 h-4" />
          <span>Get My Kit — $9.99</span>
        </a>
      </div>

    </div>
  );
};
