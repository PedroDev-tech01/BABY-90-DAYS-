import { TemplatePreset } from '../types';

export const TEMPLATES: TemplatePreset[] = [
  {
    id: 'empresa-inovadora',
    title: 'Site Institucional / Empresa',
    category: 'business',
    badge: 'Mais Popular',
    description: 'Ideal para consultorias, agências, startups e empresas de tecnologia ou serviços profissionais.',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    config: {
      id: 'empresa-inovadora',
      category: 'business',
      name: 'Nexus Consultoria',
      slogan: 'Estratégias inteligentes para acelerar o seu negócio',
      description: 'Ajudamos empresas de médio e grande porte a escalarem suas operações com tecnologia e inteligência financeira.',
      primaryColor: '#2563eb', // Blue
      secondaryColor: '#0f172a',
      themeMode: 'light',
      logoText: 'NEXUS',
      
      heroTitle: 'Transforme o futuro do seu negócio com dados e estratégia',
      heroSubtitle: 'Soluções sob medida para otimizar processos, aumentar margens e acelerar o crescimento sustentável da sua empresa.',
      heroCtaText: 'Agendar Consultoria Grátis',
      heroSecondaryCta: 'Conhecer Nossos Serviços',
      heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      
      showAbout: true,
      showServices: true,
      showPortfolio: true,
      showTestimonials: true,
      showContact: true,
      showPricing: false,
      
      aboutTitle: 'Sobre a Nexus Consultoria',
      aboutText: 'Com mais de 10 anos de mercado e atendendo mais de 300 clientes corporativos no Brasil e América Latina, a Nexus combina conhecimento analítico avançado com execução ágil.',
      aboutImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      
      services: [
        {
          id: 's1',
          title: 'Transformação Digital',
          description: 'Modernização de arquiteturas de sistemas, migração para nuvem e otimização de fluxos operacionais.',
          price: 'Sob Consulta'
        },
        {
          id: 's2',
          title: 'Inteligência Financeira',
          description: 'Modelagem financeira, reestruturação de capital e planejamento estratégico de longo prazo.',
          price: 'Sob Consulta'
        },
        {
          id: 's3',
          title: 'Gestão de Performance',
          description: 'Implementação de OKRs, KPIs e dashboards em tempo real para tomada de decisão acelerada.',
          price: 'Sob Consulta'
        }
      ],
      
      projects: [
        {
          id: 'p1',
          title: 'Reestruturação Logística Tech',
          category: 'Operações',
          image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
          description: 'Aumento de 40% na eficiência de entrega de uma multinacional de e-commerce.'
        },
        {
          id: 'p2',
          title: 'Plataforma Fintech B2B',
          category: 'Tecnologia',
          image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
          description: 'Lançamento de ecossistema financeiro para gestão de fornecedores.'
        }
      ],
      
      testimonials: [
        {
          id: 't1',
          author: 'Mariana Silva',
          role: 'CEO na Vetta Group',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
          content: 'A Nexus reestruturou nossa operação e reduzimos custos operacionais em 28% no primeiro semestre.',
          rating: 5
        },
        {
          id: 't2',
          author: 'Carlos Andrade',
          role: 'Diretor Financeiro',
          avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
          content: 'Equipe extremamente profissional e alinhada com os nossos prazos. O ROI foi imediato.',
          rating: 5
        }
      ],
      
      phone: '(11) 98765-4321',
      email: 'contato@nexusconsultoria.com.br',
      address: 'Av. Paulista, 1000 - São Paulo, SP',
      whatsapp: '5511987654321',
      instagram: '@nexusconsultoria'
    }
  },
  {
    id: 'portfolio-criativo',
    title: 'Portfólio Pessoal / Profissional',
    category: 'portfolio',
    badge: 'Criativo & Moderno',
    description: 'Perfeito para designers, desenvolvedores, fotógrafos, arquitetos e profissionais autônomos.',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    config: {
      id: 'portfolio-criativo',
      category: 'portfolio',
      name: 'Lucas Almeida',
      slogan: 'Product Designer & UI/UX Specialist',
      description: 'Criando experiências digitais memoráveis com foco em usabilidade e design centrado em pessoas.',
      primaryColor: '#7c3aed', // Purple
      secondaryColor: '#18181b',
      themeMode: 'light',
      logoText: 'LUCAS.DESIGN',
      
      heroTitle: 'Design que conecta produtos inovadores às pessoas',
      heroSubtitle: 'Especialista em criar interfaces intuitivas, sistemas de design elegantes e protótipos de alta fidelidade para startups globais.',
      heroCtaText: 'Ver Projetos',
      heroSecondaryCta: 'Falar Comigo',
      heroImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
      
      showAbout: true,
      showServices: true,
      showPortfolio: true,
      showTestimonials: true,
      showContact: true,
      showPricing: false,
      
      aboutTitle: 'Sobre Mim',
      aboutText: 'Tenho 7 anos de experiência projetando aplicativos web e mobile. Já trabalhei com clientes nos EUA, Europa e Brasil transformando conceitos complexos em produtos fáceis de usar.',
      aboutImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      
      services: [
        {
          id: 's1',
          title: 'Design de Interfaces (UI)',
          description: 'Criação de telas visuais modernas, adaptáveis para mobile e desktop, alinhadas à sua identidade de marca.'
        },
        {
          id: 's2',
          title: 'Pesquisa de Usuário (UX)',
          description: 'Mapeamento de jornada do cliente, testes de usabilidade e arquitetura de informação.'
        },
        {
          id: 's3',
          title: 'Design Systems',
          description: 'Construção de bibliotecas reutilizáveis de componentes no Figma para padronizar o produto.'
        }
      ],
      
      projects: [
        {
          id: 'p1',
          title: 'Fintech Mobile App',
          category: 'Mobile UX/UI',
          image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
          description: 'Aplicativo de investimentos com gráficos interativos e carteira inteligente.'
        },
        {
          id: 'p2',
          title: 'E-commerce de Moda Sustentável',
          category: 'Web Design',
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
          description: 'Experiência de compra responsiva focada em contar a história da marca.'
        },
        {
          id: 'p3',
          title: 'Dashboard de Analytics B2B',
          category: 'SaaS Platform',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
          description: 'Visualização de métricas complexas com foco em eficiência e redução de carga cognitiva.'
        }
      ],
      
      testimonials: [
        {
          id: 't1',
          author: 'Beatriz Costa',
          role: 'Head of Product na FinNext',
          avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
          content: 'O Lucas elevou nosso produto a um novo patamar visual. A entrega foi impecável e muito rápida.',
          rating: 5
        }
      ],
      
      phone: '(21) 99887-6655',
      email: 'lucas@almeidadesign.com',
      address: 'Rio de Janeiro, RJ (Atendimento Remoto)',
      whatsapp: '5521998876655',
      instagram: '@lucasalmeida.ui'
    }
  },
  {
    id: 'landing-produto',
    title: 'Landing Page de Produto / SaaS',
    category: 'landing',
    badge: 'Alta Conversão',
    description: 'Focada em apresentar um produto digital, curso, aplicativo ou serviço com forte chamada para ação.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    config: {
      id: 'landing-produto',
      category: 'landing',
      name: 'FlowTask Pro',
      slogan: 'O gerenciador de projetos simples e produtivo para sua equipe',
      description: 'Organize tarefas, automatize rotinas e acompanhe o progresso de seus projetos em um só lugar.',
      primaryColor: '#059669', // Emerald
      secondaryColor: '#022c22',
      themeMode: 'light',
      logoText: 'FlowTask',
      
      heroTitle: 'Gerencie projetos sem estresse e multiplique os resultados da equipe',
      heroSubtitle: 'A plataforma definitiva para organizar fluxos de trabalho, prazos e entregas sem complicação. Comece em menos de 2 minutos.',
      heroCtaText: 'Testar Grátis por 14 Dias',
      heroSecondaryCta: 'Ver Demonstração em Vídeo',
      heroImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
      
      showAbout: true,
      showServices: true,
      showPortfolio: false,
      showTestimonials: true,
      showContact: true,
      showPricing: true,
      
      aboutTitle: 'Por que o FlowTask é diferente?',
      aboutText: 'Eliminamos a complexidade excessiva das ferramentas tradicionais. O FlowTask combina quadros Kanban intuitivos, cronogramas visuais e relatórios automáticos.',
      aboutImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      
      services: [
        {
          id: 's1',
          title: 'Quadros Kanban Flexíveis',
          description: 'Visualize suas tarefas em colunas customizáveis com drag-and-drop rápido e prazos definidos.'
        },
        {
          id: 's2',
          title: 'Automações Sem Código',
          description: 'Crie regras automáticas para mover tarefas, notificar no Slack e atribuir responsáveis.'
        },
        {
          id: 's3',
          title: 'Relatórios de Tempo e Produtividade',
          description: 'Acompanhe onde as horas são gastas e identifique gargalos na operação com clareza.'
        }
      ],
      
      projects: [],
      
      testimonials: [
        {
          id: 't1',
          author: 'Fernando Rocha',
          role: 'Fundador na Agência Spark',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
          content: 'Nossa produtividade aumentou 35% nas primeiras duas semanas de uso do FlowTask!',
          rating: 5
        }
      ],
      
      phone: '0800 777 8899',
      email: 'suporte@flowtaskapp.com',
      address: 'São Paulo, SP - Av. Faria Lima, 2000',
      whatsapp: '5511977778888',
      instagram: '@flowtask.app'
    }
  },
  {
    id: 'restaurante-gastronomia',
    title: 'Restaurante / Cafeteria',
    category: 'restaurant',
    badge: 'Visual Atraente',
    description: 'Design apetitoso para bares, restaurantes, cafeterias, hamburguerias e delivery.',
    thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    config: {
      id: 'restaurante-gastronomia',
      category: 'restaurant',
      name: 'Bistro do Vale',
      slogan: 'Sabores autênticos com ingredientes frescos e selecionados',
      description: 'Cozinha artesanal aconchegante para almoço, jantar especial e cartas de vinhos exclusivas.',
      primaryColor: '#ea580c', // Orange
      secondaryColor: '#27272a',
      themeMode: 'light',
      logoText: 'BISTRÔ DO VALE',
      
      heroTitle: 'Uma experiência gastronômica inesquecível para seus sentidos',
      heroSubtitle: 'Gastronomia artesanal, ambiente acolhedor e um menu cuidadosamente elaborado com insumos locais de produtores parceiros.',
      heroCtaText: 'Fazer Reserva Online',
      heroSecondaryCta: 'Ver Nosso Cardápio',
      heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      
      showAbout: true,
      showServices: true, // Used as Menu Highlights
      showPortfolio: false,
      showTestimonials: true,
      showContact: true,
      showPricing: false,
      
      aboutTitle: 'Nossa História & Filosofia',
      aboutText: 'Fundado em 2018, o Bistrô do Vale nasceu da paixão pela culinária de memória afetuosa com técnicas contemporâneas. Cada prato conta uma história.',
      aboutImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
      
      services: [
        {
          id: 's1',
          title: 'Risoto de Cogumelos Frescos',
          description: 'Arroz arbóreo cremoso com cogumelos do paris, shimeji, azeite trufado e queijo parmesão maturado 24 meses.',
          price: 'R$ 68,00',
          image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=400&q=80'
        },
        {
          id: 's2',
          title: 'Filé Mignon ao Molho Rôti',
          description: 'Grelhado no ponto desejado, acompanhado de mousseline de batata baroa e aspargos salteados na manteiga.',
          price: 'R$ 84,00',
          image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80'
        },
        {
          id: 's3',
          title: 'Torta Cremosa de Chocolate 70%',
          description: 'Sobremesa autoral com base de amêndoas, ganache intensa e calda quente de frutas vermelhas silvestres.',
          price: 'R$ 29,00',
          image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80'
        }
      ],
      
      projects: [],
      
      testimonials: [
        {
          id: 't1',
          author: 'Camila & Gabriel',
          role: 'Clientes Frequentes',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
          content: 'O melhor risoto da cidade! O atendimento é impecável e a carta de vinhos é maravilhosa.',
          rating: 5
        }
      ],
      
      phone: '(19) 3888-9900',
      email: 'reservas@bistrodovale.com.br',
      address: 'Rua das Flores, 450 - Centro Histórico',
      whatsapp: '5519988889900',
      instagram: '@bistrodovale.oficial'
    }
  },
  {
    id: 'servicos-saude-bemestar',
    title: 'Prestador de Serviços / Clínica / Estética',
    category: 'services',
    badge: 'Elegante & Confiável',
    description: 'Ótimo para clínicas médicas, dentistas, psicólogos, estúdios de beleza, personal trainers e advogados.',
    thumbnail: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    config: {
      id: 'servicos-saude-bemestar',
      category: 'services',
      name: 'Clínica Lumina',
      slogan: 'Odontologia estética e saúde integrativa com conforto e dedicação',
      description: 'Atendimento humanizado com tecnologia avançada para cuidar do seu sorriso e bem-estar.',
      primaryColor: '#0891b2', // Cyan / Teal
      secondaryColor: '#164e63',
      themeMode: 'light',
      logoText: 'LUMINA',
      
      heroTitle: 'Seu sorriso e saúde em mãos especializadas com tecnologia e conforto',
      heroSubtitle: 'Tratamentos modernos, sem dor e adaptados ao seu ritmo em um ambiente acolhedor e seguro.',
      heroCtaText: 'Agendar Avaliação',
      heroSecondaryCta: 'Conheça os Tratamentos',
      heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
      
      showAbout: true,
      showServices: true,
      showPortfolio: true,
      showTestimonials: true,
      showContact: true,
      showPricing: false,
      
      aboutTitle: 'Conheça a Clínica Lumina',
      aboutText: 'Com uma equipe multidisciplinar altamente qualificada, oferecemos um padrão diferenciado de atendimento, com tratamentos preventivos e estéticos de ponta.',
      aboutImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      
      services: [
        {
          id: 's1',
          title: 'Lentes de Contato e Facetas',
          description: 'Correção de formato, cor e alinhamento dos dentes para um sorriso natural e harmonioso.'
        },
        {
          id: 's2',
          title: 'Clareamento Dental a Laser',
          description: 'Técnica rápida e indolor para clarear os dentes com resultados visíveis na primeira sessão.'
        },
        {
          id: 's3',
          title: 'Ortodontia Invisível (Invisalign)',
          description: 'Alinhadores transparentes sob medida que garantem praticidade e estática discreta durante o tratamento.'
        }
      ],
      
      projects: [
        {
          id: 'p1',
          title: 'Harmonização do Sorriso',
          category: 'Estética',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
          description: 'Transformação completa de alinhamento e tom.'
        }
      ],
      
      testimonials: [
        {
          id: 't1',
          author: 'Renata Mendonça',
          role: 'Paciente',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
          content: 'Sempre tive medo de ir ao dentista, mas a Dra. Juliana e sua equipe foram de uma paciência fantástica. Recomendo de olhos fechados!',
          rating: 5
        }
      ],
      
      phone: '(31) 3344-5566',
      email: 'contato@clinicalumina.com.br',
      address: 'Rua da Bahia, 1200 - Belo Horizonte, MG',
      whatsapp: '5531933445566',
      instagram: '@clinicalumina'
    }
  }
];
