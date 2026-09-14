import React, { useState } from 'react';
import { TEMPLATES } from './data/templates';
import { WebsiteConfig, TemplatePreset } from './types';
import { Header } from './components/Header';
import { WebsitePreview } from './components/WebsitePreview';
import { Baby90LandingPage } from './components/Baby90LandingPage';
import { TemplateCatalog } from './components/TemplateCatalog';
import { EditorDrawer } from './components/EditorDrawer';
import { PromptWizard } from './components/PromptWizard';
import { ExportModal } from './components/ExportModal';

export default function App() {
  const [activeConfig, setActiveConfig] = useState<WebsiteConfig>(TEMPLATES[0].config);
  const [activeTab, setActiveTab] = useState<'baby90' | 'catalog' | 'preview' | 'wizard'>('baby90');
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  const handleSelectTemplate = (template: TemplatePreset) => {
    setActiveConfig(template.config);
    setActiveTab('preview');
  };

  const handleCustomizeTemplate = (template: TemplatePreset) => {
    setActiveConfig(template.config);
    setActiveTab('preview');
    setIsEditorOpen(true);
  };

  const handleGeneratedConfig = (generatedConfig: WebsiteConfig) => {
    setActiveConfig(generatedConfig);
    setActiveTab('preview');
    setIsEditorOpen(true);
  };

  const handleResetConfig = () => {
    const defaultTemplate = TEMPLATES.find(t => t.id === activeConfig.id) || TEMPLATES[0];
    setActiveConfig(defaultTemplate.config);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-sky-200 selection:text-sky-900">
      
      {/* Show platform header if exploring other builder tabs */}
      {activeTab !== 'baby90' && (
        <Header
          activeTab={activeTab as 'catalog' | 'preview' | 'wizard'}
          onSelectTab={(tab) => setActiveTab(tab)}
          onOpenEditor={() => setIsEditorOpen(true)}
          onOpenExport={() => setIsExportOpen(true)}
          activeSiteName={activeConfig.name}
        />
      )}

      {/* VIEW 1: DEDICATED HIGH-CONVERSION LANDING PAGE FOR BABY90 */}
      {activeTab === 'baby90' && (
        <Baby90LandingPage onOpenSiteBuilder={() => setActiveTab('catalog')} />
      )}

      {/* VIEW 2: GENERIC SITE BUILDER PREVIEW */}
      {activeTab === 'preview' && (
        <main className="relative">
          <WebsitePreview
            config={activeConfig}
            isEditorOpen={isEditorOpen}
            onOpenEditor={() => setIsEditorOpen(!isEditorOpen)}
          />
        </main>
      )}

      {/* VIEW 3: TEMPLATE CATALOG */}
      {activeTab === 'catalog' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider">
                Modelos de Sites
              </span>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                Plataforma de Criação & Catálogo
              </h1>
              <p className="text-slate-300 text-sm">
                Explore e personalize novos modelos de sites com edição em tempo real.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('baby90')}
              className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md transition cursor-pointer"
            >
              Ver Landing Page Baby90
            </button>
          </div>

          <TemplateCatalog
            onSelectTemplate={handleSelectTemplate}
            onCustomizeTemplate={handleCustomizeTemplate}
          />
        </main>
      )}

      {/* VIEW 4: WIZARD ASSISTANT */}
      {activeTab === 'wizard' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <PromptWizard onGenerate={handleGeneratedConfig} />
        </main>
      )}

      {/* LIVE EDITOR DRAWER PANEL */}
      {isEditorOpen && activeTab !== 'baby90' && (
        <EditorDrawer
          config={activeConfig}
          onChangeConfig={setActiveConfig}
          onClose={() => setIsEditorOpen(false)}
          onReset={handleResetConfig}
        />
      )}

      {/* EXPORT CODE MODAL */}
      <ExportModal
        config={activeConfig}
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />
    </div>
  );
}

