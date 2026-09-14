import React, { useState } from 'react';
import { WebsiteConfig } from '../types';
import { 
  X, Palette, Layout, Type, PhoneCall, Sparkles, Check, RefreshCw, 
  Plus, Trash2, Eye, EyeOff, Layers, Image as ImageIcon
} from 'lucide-react';

interface Props {
  config: WebsiteConfig;
  onChangeConfig: (newConfig: WebsiteConfig) => void;
  onClose: () => void;
  onReset: () => void;
}

const COLOR_PRESETS = [
  { name: 'Azul Executivo', hex: '#2563eb' },
  { name: 'Roxo Criativo', hex: '#7c3aed' },
  { name: 'Verde Esmeralda', hex: '#059669' },
  { name: 'Laranja Gastronômico', hex: '#ea580c' },
  { name: 'Ciano Saúde', hex: '#0891b2' },
  { name: 'Rosa Moderno', hex: '#e11d48' },
  { name: 'Preto Elegante', hex: '#18181b' },
  { name: 'Âmbar Dourado', hex: '#d97706' },
];

const HERO_IMAGE_PRESETS = [
  { label: 'Negócios / Escritório', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Design & Tecnologia', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Gastronomia & Restaurante', url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Saúde & Estética', url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Educação & Cursos', url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80' },
];

export const EditorDrawer: React.FC<Props> = ({ config, onChangeConfig, onClose, onReset }) => {
  const [activeTab, setActiveTab] = useState<'general' | 'hero' | 'sections' | 'services' | 'contact'>('general');

  const updateField = <K extends keyof WebsiteConfig>(field: K, value: WebsiteConfig[K]) => {
    onChangeConfig({
      ...config,
      [field]: value,
    });
  };

  const handleAddService = () => {
    const newService = {
      id: 'service-' + Date.now(),
      title: 'Novo Serviço',
      description: 'Descrição detalhada do novo serviço oferecido.',
      price: 'R$ 100,00'
    };
    onChangeConfig({
      ...config,
      services: [...config.services, newService]
    });
  };

  const handleRemoveService = (id: string) => {
    onChangeConfig({
      ...config,
      services: config.services.filter(s => s.id !== id)
    });
  };

  const handleUpdateService = (id: string, field: 'title' | 'description' | 'price', value: string) => {
    onChangeConfig({
      ...config,
      services: config.services.map(s => s.id === id ? { ...s, [field]: value } : s)
    });
  };

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[420px] bg-white dark:bg-zinc-900 border-l border-slate-200 dark:border-zinc-800 shadow-2xl z-50 flex flex-col transition-transform">
      {/* Drawer Header */}
      <div className="p-4 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between bg-slate-900 text-white">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-400" />
          <span className="font-bold text-sm">Personalizar Site em Tempo Real</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={onReset} 
            title="Restaurar padrão"
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer text-xs flex items-center gap-1"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Restaurar</span>
          </button>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-zinc-800 overflow-x-auto bg-slate-50 dark:bg-zinc-950 p-1 gap-1 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('general')}
          className={`flex-1 py-2 px-2.5 rounded-lg transition whitespace-nowrap flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'general' ? 'bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span>Marca & Cores</span>
        </button>
        <button
          onClick={() => setActiveTab('hero')}
          className={`flex-1 py-2 px-2.5 rounded-lg transition whitespace-nowrap flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'hero' ? 'bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Type className="w-3.5 h-3.5" />
          <span>Hero Principal</span>
        </button>
        <button
          onClick={() => setActiveTab('sections')}
          className={`flex-1 py-2 px-2.5 rounded-lg transition whitespace-nowrap flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'sections' ? 'bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Seções</span>
        </button>
        <button
          onClick={() => setActiveTab('services')}
          className={`flex-1 py-2 px-2.5 rounded-lg transition whitespace-nowrap flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'services' ? 'bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Layout className="w-3.5 h-3.5" />
          <span>Serviços</span>
        </button>
        <button
          onClick={() => setActiveTab('contact')}
          className={`flex-1 py-2 px-2.5 rounded-lg transition whitespace-nowrap flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'contact' ? 'bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Contato</span>
        </button>
      </div>

      {/* Drawer Body Form */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6">

        {/* TAB 1: BRAND & COLOR */}
        {activeTab === 'general' && (
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Nome do Site / Empresa</label>
              <input
                type="text"
                value={config.name}
                onChange={(e) => updateField('name', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Texto do Logo</label>
              <input
                type="text"
                value={config.logoText}
                onChange={(e) => updateField('logoText', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Slogan ou Subtítulo Curto</label>
              <input
                type="text"
                value={config.slogan}
                onChange={(e) => updateField('slogan', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Color Selector */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Cor Principal da Marca</label>
              <div className="grid grid-cols-4 gap-2 mb-3">
                {COLOR_PRESETS.map((col) => (
                  <button
                    key={col.hex}
                    onClick={() => updateField('primaryColor', col.hex)}
                    className={`h-9 rounded-lg flex items-center justify-center border transition cursor-pointer ${
                      config.primaryColor === col.hex ? 'border-2 border-black dark:border-white scale-105' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: col.hex }}
                    title={col.name}
                  >
                    {config.primaryColor === col.hex && <Check className="w-4 h-4 text-white drop-shadow-md" />}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">Ou digite o código Hex:</span>
                <input
                  type="color"
                  value={config.primaryColor.startsWith('#') ? config.primaryColor : '#2563eb'}
                  onChange={(e) => updateField('primaryColor', e.target.value)}
                  className="w-8 h-8 rounded border-0 cursor-pointer"
                />
                <input
                  type="text"
                  value={config.primaryColor}
                  onChange={(e) => updateField('primaryColor', e.target.value)}
                  className="w-24 px-2 py-1 text-xs font-mono rounded border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                />
              </div>
            </div>

            {/* Dark / Light theme selector */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Estilo de Fundo do Site</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => updateField('themeMode', 'light')}
                  className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer ${
                    config.themeMode === 'light' ? 'border-blue-600 bg-blue-50 text-blue-700 font-bold' : 'border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-800'
                  }`}
                >
                  <span className="w-3 h-3 rounded-full bg-slate-100 border border-slate-300"></span>
                  <span>Claro (Light)</span>
                </button>
                <button
                  onClick={() => updateField('themeMode', 'dark')}
                  className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer ${
                    config.themeMode === 'dark' ? 'border-blue-600 bg-zinc-800 text-blue-400 font-bold' : 'border-slate-200 dark:border-zinc-800 bg-zinc-900 text-slate-300'
                  }`}
                >
                  <span className="w-3 h-3 rounded-full bg-zinc-900 border border-zinc-700"></span>
                  <span>Escuro (Dark)</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: HERO */}
        {activeTab === 'hero' && (
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Título Principal (Hero)</label>
              <textarea
                rows={2}
                value={config.heroTitle}
                onChange={(e) => updateField('heroTitle', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Subtítulo / Descrição da Hero</label>
              <textarea
                rows={3}
                value={config.heroSubtitle}
                onChange={(e) => updateField('heroSubtitle', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Texto do Botão Principal</label>
                <input
                  type="text"
                  value={config.heroCtaText}
                  onChange={(e) => updateField('heroCtaText', e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Botão Secundário</label>
                <input
                  type="text"
                  value={config.heroSecondaryCta}
                  onChange={(e) => updateField('heroSecondaryCta', e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Imagem da Hero (URL)</label>
              <input
                type="text"
                value={config.heroImage}
                onChange={(e) => updateField('heroImage', e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 mb-2"
              />
              <span className="text-[11px] text-slate-500 block mb-2">Escolha uma imagem predefinida:</span>
              <div className="space-y-1.5">
                {HERO_IMAGE_PRESETS.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => updateField('heroImage', p.url)}
                    className="w-full py-1.5 px-3 rounded text-left text-xs bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 flex items-center justify-between cursor-pointer"
                  >
                    <span>{p.label}</span>
                    <ImageIcon className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SECTIONS VISIBILITY */}
        {activeTab === 'sections' && (
          <div className="space-y-4">
            <p className="text-xs text-slate-500 mb-2">Ative ou desative as blocos de conteúdo visíveis no site:</p>
            
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/50 cursor-pointer">
                <span className="text-xs font-semibold">Seção Sobre Nós / Apresentação</span>
                <input
                  type="checkbox"
                  checked={config.showAbout}
                  onChange={(e) => updateField('showAbout', e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/50 cursor-pointer">
                <span className="text-xs font-semibold">Seção de Serviços / Cardápio</span>
                <input
                  type="checkbox"
                  checked={config.showServices}
                  onChange={(e) => updateField('showServices', e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/50 cursor-pointer">
                <span className="text-xs font-semibold">Galeria de Projetos / Portfólio</span>
                <input
                  type="checkbox"
                  checked={config.showPortfolio}
                  onChange={(e) => updateField('showPortfolio', e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/50 cursor-pointer">
                <span className="text-xs font-semibold">Tabela de Preços / Planos</span>
                <input
                  type="checkbox"
                  checked={config.showPricing}
                  onChange={(e) => updateField('showPricing', e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/50 cursor-pointer">
                <span className="text-xs font-semibold">Depoimentos de Clientes</span>
                <input
                  type="checkbox"
                  checked={config.showTestimonials}
                  onChange={(e) => updateField('showTestimonials', e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/50 cursor-pointer">
                <span className="text-xs font-semibold">Formulário de Contato & Mapa</span>
                <input
                  type="checkbox"
                  checked={config.showContact}
                  onChange={(e) => updateField('showContact', e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded"
                />
              </label>
            </div>
          </div>
        )}

        {/* TAB 4: SERVICES EDITING */}
        {activeTab === 'services' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-slate-500">Itens / Serviços Cadastrados</span>
              <button
                onClick={handleAddService}
                className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Adicionar Item</span>
              </button>
            </div>

            <div className="space-y-4">
              {config.services.map((srv) => (
                <div key={srv.id} className="p-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/60 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <input
                      type="text"
                      value={srv.title}
                      onChange={(e) => handleUpdateService(srv.id, 'title', e.target.value)}
                      placeholder="Título do Serviço"
                      className="w-full px-2 py-1 text-xs font-bold rounded border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                    />
                    <button
                      onClick={() => handleRemoveService(srv.id)}
                      className="p-1 rounded text-red-500 hover:bg-red-50 cursor-pointer"
                      title="Excluir serviço"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <textarea
                    rows={2}
                    value={srv.description}
                    onChange={(e) => handleUpdateService(srv.id, 'description', e.target.value)}
                    placeholder="Descrição do serviço..."
                    className="w-full px-2 py-1 text-xs rounded border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                  />
                  <div>
                    <input
                      type="text"
                      value={srv.price || ''}
                      onChange={(e) => handleUpdateService(srv.id, 'price', e.target.value)}
                      placeholder="Preço (ex: R$ 150 ou Sob Consulta)"
                      className="w-full px-2 py-1 text-xs rounded border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: CONTACT INFO */}
        {activeTab === 'contact' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">WhatsApp (com DDD)</label>
              <input
                type="text"
                value={config.whatsapp}
                onChange={(e) => updateField('whatsapp', e.target.value)}
                placeholder="5511999998888"
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Telefone Principal</label>
              <input
                type="text"
                value={config.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="(11) 98765-4321"
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">E-mail de Atendimento</label>
              <input
                type="email"
                value={config.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="contato@empresa.com.br"
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Endereço Físico</label>
              <input
                type="text"
                value={config.address}
                onChange={(e) => updateField('address', e.target.value)}
                placeholder="Av. Paulista, 1000 - São Paulo, SP"
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Instagram (@usuario)</label>
              <input
                type="text"
                value={config.instagram}
                onChange={(e) => updateField('instagram', e.target.value)}
                placeholder="@suaempresa"
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
              />
            </div>
          </div>
        )}

      </div>

      {/* Drawer Footer */}
      <div className="p-4 border-t border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 flex items-center justify-between text-xs">
        <span className="text-slate-500">Edição sincronizada automaticamente</span>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-slate-900 text-white dark:bg-white dark:text-zinc-900 font-bold rounded-lg cursor-pointer"
        >
          Concluir
        </button>
      </div>
    </div>
  );
};
