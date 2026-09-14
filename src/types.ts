export type WebsiteCategory = 'business' | 'portfolio' | 'landing' | 'restaurant' | 'services';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName?: string;
  price?: string;
  image?: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface WebsiteConfig {
  id: string;
  category: WebsiteCategory;
  name: string;
  slogan: string;
  description: string;
  primaryColor: string; // Tailwind hex or class name
  secondaryColor: string;
  themeMode: 'light' | 'dark';
  logoText: string;
  
  // Hero section
  heroTitle: string;
  heroSubtitle: string;
  heroCtaText: string;
  heroSecondaryCta: string;
  heroImage: string;
  
  // Sections visibility
  showAbout: boolean;
  showServices: boolean;
  showPortfolio: boolean;
  showTestimonials: boolean;
  showContact: boolean;
  showPricing: boolean;
  
  // Custom content
  aboutTitle: string;
  aboutText: string;
  aboutImage: string;
  
  services: ServiceItem[];
  projects: PortfolioProject[];
  testimonials: TestimonialItem[];
  
  // Contact Info
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  instagram: string;
}

export interface TemplatePreset {
  id: string;
  title: string;
  category: WebsiteCategory;
  badge: string;
  description: string;
  thumbnail: string;
  config: WebsiteConfig;
}
