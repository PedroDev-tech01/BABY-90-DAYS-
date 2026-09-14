import React, { useState } from 'react';
import { WebsiteConfig } from '../types';
import { Sparkles, Wand2, ArrowRight, CheckCircle2, LayoutTemplate, Palette, Globe } from 'lucide-react';

interface Props {
  onGenerate: (config: WebsiteConfig) => void;
}

const QUICK_PROMPTS = [
  {
    title: 'Escritório de Advocacia',
    category: 'business' as const,
    color: '#1e3a8a',
    icon: '⚖️',
    prompt: 'Escritório de Advocacia Especializado em Direito Civil e Trabalhista',
    config: {
      name: 'Valente & Associados Advocacia',
      logoText: 'VALENTE',
      slogan: 'Defesa dos seus direitos com excelência jurídica e transparência',
      heroTitle: 'Soluções jurídicas estratégicas e personalizadas para você e sua empresa',
      heroSubtitle: 'Atuação especializada em Direito Empresarial, Trabalhista, Família e Contratos com mais de 15 anos de tradição.',
      heroCtaText: 'Falar com Advogado',
      heroSecondaryCta: 'Conheça Nossas Áreas',
      primaryColor: '#1e3a8a',
      heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
      aboutTitle: 'Sobre Nosso Escritório',
      aboutText: 'Com uma equipe pautada pela ética e compromisso, acompanhamos nossos clientes em todas as instâncias garantindo assessoria consultiva e litigiosa eficaz.',
      phone: '(11) 3100-2000',
      email: 'contato@valenteadvocacia.com.br',
      address: 'Av. Paulista, 1800 - Conjunto 121 - São Paulo, SP',
      whatsapp: '5511931002000',
      instagram: '@valente.advocacia'
    }
  },
  {
    title: 'Estúdio de Psicologia & Saúde Mental',
    category: 'services' as const,
    color: '#0d9488',
    icon: '🧠',
    prompt: 'Atendimento Psicológico Presencial e Online',
    config: {
      name: 'Espaço Mente & Equilíbrio',
      logoText: 'EQUILÍBRIO',
      slogan: 'Cuidado humano e bem-estar emocional para todas as fases da vida',
      heroTitle: 'Acolhimento profissional para sua saúde mental e autoconhecimento',
      heroSubtitle: 'Psicoterapia individual, de casal e orientação de carreira com atendimento presencial e consultas online seguras.',
      heroCtaText: 'Agendar Primeira Consulta',
      heroSecondaryCta: 'Saiba Mais Sobre Psicoterapia',
      primaryColor: '#0d9488',
      heroImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
      aboutTitle: 'Sobre o Espaço',
      aboutText: 'Oferecemos um ambiente seguro e confidencial com técnicas baseadas em evidências científicas como Terapia Cognitivo-Comportamental (TCC) e Psicanálise.',
      phone: '(21) 3222-4455',
      email: 'contato@menteoequilíbrio.com.br',
      address: 'Rua Visconde de Pirajá, 500 - Ipanema, Rio de Janeiro, RJ',
      whatsapp: '5521932224455',
      instagram: '@espaco.menteequilibrio'
    }
  },
  {
    title: 'Fotografia & Filmes de Casamento',
    category: 'portfolio' as const,
    color: '#db2777',
    icon: '📸',
    prompt: 'Portfólio de Fotógrafo Profissional de Casamentos e Eventos',
    config: {
      name: 'Gabriel Rios Fotografia',
      logoText: 'RIOS.FOTO',
      slogan: 'Eternizando momentos únicos e histórias de amor autênticas',
      heroTitle: 'Fotografia documental e emocionante de casamentos e ensaios',
      heroSubtitle: 'Capturando sorrisos espontâneos, olhares sinceros e detalhes inesquecíveis pelo Brasil e no exterior.',
      heroCtaText: 'Solicitar Orçamento',
      heroSecondaryCta: 'Ver Galeria de Fotos',
      primaryColor: '#db2777',
      heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      aboutTitle: 'Sobre o Fotógrafo',
      aboutText: 'Com 8 anos cobrindo mais de 200 casamentos, busco contar histórias sem poses forçadas, valorizando a luz natural e a essência do casal.',
      phone: '(31) 98877-1122',
      email: 'gabriel@riosfotografia.com',
      address: 'Belo Horizonte, MG (Atendimento Nacional)',
      whatsapp: '5531988771122',
      instagram: '@gabrielrios.foto'
    }
  },
  {
    title: 'Academia & Studio Crossfit',
    category: 'business' as const,
    color: '#dc2626',
    icon: '🏋️',
    prompt: 'Site para Studio de Treinamento Funcional e Fitness',
    config: {
      name: 'IronFit Studio',
      logoText: 'IRONFIT',
      slogan: 'Superação diária, comunidade forte e resultados reais',
      heroTitle: 'Transforme seu corpo, mente e disposição com treinos de alta performance',
      heroSubtitle: 'Aulas em grupo com treinadores certificados, acompanhamento de metas e infraestrutura completa.',
      heroCtaText: 'Ganhar 3 Dias Grátis',
      heroSecondaryCta: 'Ver Grade de Horários',
      primaryColor: '#dc2626',
      heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
      aboutTitle: 'Nossa Estrutura',
      aboutText: 'Espaço de 500m² equipado com o que há de melhor em equipamentos funcionais, vestiários modernos e avaliação física computadorizada.',
      phone: '(11) 4004-9090',
      email: 'contato@ironfitstudio.com.br',
      address: 'Rua Augusta, 1200 - Consolação, São Paulo, SP',
      whatsapp: '5511940049090',
      instagram: '@ironfit.studio'
    }
  }
];

export const PromptWizard: React.FC<Props> = ({ onGenerate }) => {
  const [customInput, setCustomInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    setLoading(true);

    setTimeout(() => {
      // Build tailored site based on prompt keywords
      const title = customInput.trim();
      const generatedConfig: WebsiteConfig = {
        id: 'generated-' + Date.now(),
        category: 'business',
        name: title.length > 25 ? title.substring(0, 25) : title,
        slogan: 'Soluções profissionais sob medida para você',
        description: `Site profissional e moderno para ${title}.`,
        primaryColor: '#2563eb',
        secondaryColor: '#0f172a',
        themeMode: 'light',
        logoText: title.substring(0, 10).toUpperCase(),
        heroTitle: `${title}: Excelência e Compromisso com Seus Resultados`,
        heroSubtitle: `Conheça nossos serviços, história e entre em contato direto pelo WhatsApp ou formulário online.`,
        heroCtaText: 'Falar Conosco no WhatsApp',
        heroSecondaryCta: 'Ver Nossos Serviços',
        heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        showAbout: true,
        showServices: true,
        showPortfolio: true,
        showTestimonials: true,
        showContact: true,
        showPricing: false,
        aboutTitle: 'Sobre Nossa Atuação',
        aboutText: `Trabalhamos com dedicação diária para entregar os melhores resultados aos nossos clientes, combinando tecnologia, atendimento ágil e valores transparentes.`,
        aboutImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
        services: [
          { id: '1', title: 'Atendimento Personalizado', description: 'Solução sob medida desenvolvida de acordo com a sua necessidade específica.' },
          { id: '2', title: 'Consultoria Especializada', description: 'Orientação técnica de alto nível com profissionais de vasta experiência.' },
          { id: '3', title: 'Suporte Continuado', description: 'Acompanhamento pós-entrega para garantir a máxima satisfação.' }
        ],
        projects: [
          {
            id: 'p1',
            title: 'Projeto em Destaque',
            category: 'Geral',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
            description: 'Exemplo de trabalho entregue com sucesso.'
          }
        ],
        testimonials: [
          {
            id: 't1',
            author: 'Marcos Souza',
            role: 'Cliente Atendido',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
            content: 'Excelente atendimento e agilidade no cumprimento de prazos. Recomendo fortemente!',
            rating: 5
          }
        ],
        phone: '(11) 99999-8888',
        email: 'contato@seusite.com.br',
        address: 'São Paulo, SP - Brasil',
        whatsapp: '5511999998888',
        instagram: '@seusite.oficial'
      };

      setLoading(false);
      onGenerate(generatedConfig);
    }, 800);
  };

  const handleSelectQuickPreset = (preset: typeof QUICK_PROMPTS[0]) => {
    const fullConfig: WebsiteConfig = {
      id: 'quick-' + Date.now(),
      category: preset.category,
      name: preset.config.name,
      slogan: preset.config.slogan,
      description: preset.prompt,
      primaryColor: preset.config.primaryColor,
      secondaryColor: '#0f172a',
      themeMode: 'light',
      logoText: preset.config.logoText,
      heroTitle: preset.config.heroTitle,
      heroSubtitle: preset.config.heroSubtitle,
      heroCtaText: preset.config.heroCtaText,
      heroSecondaryCta: preset.config.heroSecondaryCta,
      heroImage: preset.config.heroImage,
      showAbout: true,
      showServices: true,
      showPortfolio: preset.category === 'portfolio',
      showTestimonials: true,
      showContact: true,
      showPricing: false,
      aboutTitle: preset.config.aboutTitle,
      aboutText: preset.config.aboutText,
      aboutImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      services: [
        { id: 's1', title: 'Atendimento Principal', description: 'Serviço sob medida com alta qualidade e agilidade.' },
        { id: 's2', title: 'Consultoria Especializada', description: 'Suporte focado em gerar o máximo impacto positivo.' },
        { id: 's3', title: 'Acompanhamento Exclusivo', description: 'Processo transparente do início ao fim.' }
      ],
      projects: [],
      testimonials: [
        {
          id: 't1',
          author: 'Patricia Lima',
          role: 'Cliente',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
          content: 'O atendimento foi incrível e superou todas as expectativas!',
          rating: 5
        }
      ],
      phone: preset.config.phone,
      email: preset.config.email,
      address: preset.config.address,
      whatsapp: preset.config.whatsapp,
      instagram: preset.config.instagram
    };

    onGenerate(fullConfig);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden my-8">
      
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
          <Wand2 className="w-4 h-4 text-blue-400" />
          <span>Criador Rápido de Sites</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
          Qual site você quer criar hoje?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
          Escreva o segmento do seu negócio ou selecione uma das sugestões abaixo para gerar a estrutura completa do seu site instantaneamente.
        </p>

        {/* Custom Input Form */}
        <form onSubmit={handleCustomSubmit} className="pt-2 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
            <input
              type="text"
              placeholder="Ex: Site de Advocacia, Consultoria de TI, Petshop..."
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              className="flex-1 px-5 py-3.5 bg-transparent text-white placeholder-slate-400 font-medium text-sm focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading || !customInput.trim()}
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold text-sm transition flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-md"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Gerando Site...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Gerar Meu Site</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Quick Presets Grid */}
        <div className="pt-8">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">
            Ou escolha um segmento de destaque:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {QUICK_PROMPTS.map((p, idx) => (
              <div
                key={idx}
                onClick={() => handleSelectQuickPreset(p)}
                className="group p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <h3 className="font-bold text-base text-white group-hover:text-blue-300 transition mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {p.prompt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                  <span>Usar modelo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
