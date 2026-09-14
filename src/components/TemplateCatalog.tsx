import React, { useState } from 'react';
import { TEMPLATES } from '../data/templates';
import { TemplatePreset, WebsiteCategory } from '../types';
import { ArrowRight, CheckCircle, Sparkles, Filter, Eye, Sliders } from 'lucide-react';

interface Props {
  onSelectTemplate: (template: TemplatePreset) => void;
  onCustomizeTemplate: (template: TemplatePreset) => void;
}

const CATEGORIES: { id: WebsiteCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Todos os Modelos' },
  { id: 'business', label: 'Empresas & Institucional' },
  { id: 'portfolio', label: 'Portfólio & Criativos' },
  { id: 'landing', label: 'Landing Page & Produto' },
  { id: 'restaurant', label: 'Restaurante & Gastronomia' },
  { id: 'services', label: 'Prestador de Serviços & Saúde' },
];

export const TemplateCatalog: React.FC<Props> = ({ onSelectTemplate, onCustomizeTemplate }) => {
  const [selectedCategory, setSelectedCategory] = useState<WebsiteCategory | 'all'>('all');

  const filteredTemplates = selectedCategory === 'all'
    ? TEMPLATES
    : TEMPLATES.filter(t => t.category === selectedCategory);

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Modelos Prontos de Alta Performance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Escolha o modelo ideal para seu projeto
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Todos os modelos são 100% responsivos, personalizáveis e otimizados para conversão.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white dark:bg-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-700 border border-slate-200 dark:border-zinc-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((tpl) => (
            <div
              key={tpl.id}
              className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-zinc-800">
                  <img
                    src={tpl.thumbnail}
                    alt={tpl.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-slate-900/80 text-white backdrop-blur-md">
                    {tpl.badge}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition">
                    {tpl.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">
                    {tpl.description}
                  </p>

                  <div className="space-y-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Estrutura completa (Hero, Sobre, Serviços, Contato)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Formulário e botão de WhatsApp pré-configurado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                <button
                  onClick={() => onSelectTemplate(tpl)}
                  className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-900 dark:text-white font-semibold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>Visualizar</span>
                </button>
                <button
                  onClick={() => onCustomizeTemplate(tpl)}
                  className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <Sliders className="w-4 h-4" />
                  <span>Personalizar</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
