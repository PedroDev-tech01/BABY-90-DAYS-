import React from 'react';
import { LayoutGrid, Sliders, Wand2, Download, Globe, Sparkles } from 'lucide-react';

interface Props {
  activeTab: 'catalog' | 'preview' | 'wizard';
  onSelectTab: (tab: 'catalog' | 'preview' | 'wizard') => void;
  onOpenEditor: () => void;
  onOpenExport: () => void;
  activeSiteName: string;
}

export const Header: React.FC<Props> = ({
  activeTab,
  onSelectTab,
  onOpenEditor,
  onOpenExport,
  activeSiteName,
}) => {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => onSelectTab('catalog')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-black text-white text-xl shadow-lg group-hover:scale-105 transition">
            S
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight block">Criador de Sites</span>
            <span className="text-[11px] text-slate-400 font-medium block">Construa e Personalize Instantaneamente</span>
          </div>
        </div>

        {/* View switcher tabs */}
        <div className="hidden md:flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
          <button
            onClick={() => onSelectTab('catalog')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'catalog' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Modelos Prontos</span>
          </button>

          <button
            onClick={() => onSelectTab('preview')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'preview' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Ver Site Ativo ({activeSiteName})</span>
          </button>

          <button
            onClick={() => onSelectTab('wizard')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'wizard' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Wand2 className="w-4 h-4 text-amber-400" />
            <span>Criador Assistido</span>
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenEditor}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition border border-slate-700 flex items-center gap-2 cursor-pointer"
            title="Editar cores, dados e seções"
          >
            <Sliders className="w-4 h-4 text-blue-400" />
            <span className="hidden sm:inline">Personalizar</span>
          </button>

          <button
            onClick={onOpenExport}
            className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-md flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Exportar Código</span>
          </button>
        </div>

      </div>

      {/* Mobile Tab Bar */}
      <div className="md:hidden flex border-t border-slate-800 bg-slate-900/90 p-1 text-xs font-semibold justify-around">
        <button
          onClick={() => onSelectTab('catalog')}
          className={`py-2 px-3 rounded-lg flex items-center gap-1 ${activeTab === 'catalog' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
        >
          <LayoutGrid className="w-4 h-4" />
          <span>Modelos</span>
        </button>
        <button
          onClick={() => onSelectTab('preview')}
          className={`py-2 px-3 rounded-lg flex items-center gap-1 ${activeTab === 'preview' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
        >
          <Globe className="w-4 h-4" />
          <span>Ver Site</span>
        </button>
        <button
          onClick={() => onSelectTab('wizard')}
          className={`py-2 px-3 rounded-lg flex items-center gap-1 ${activeTab === 'wizard' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
        >
          <Wand2 className="w-4 h-4" />
          <span>Criar</span>
        </button>
      </div>
    </header>
  );
};
