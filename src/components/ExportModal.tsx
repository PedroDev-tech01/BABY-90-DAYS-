import React from 'react';
import { WebsiteConfig } from '../types';
import { Download, Code2, Copy, Check, X, Globe, Sparkles } from 'lucide-react';

interface Props {
  config: WebsiteConfig;
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<Props> = ({ config, isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const htmlSummary = `<!-- Site: ${config.name} (${config.slogan}) -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${config.name} - ${config.slogan}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body className="${config.themeMode === 'dark' ? 'bg-zinc-900 text-white' : 'bg-slate-50 text-slate-900'}">
  <!-- Header Navbar -->
  <header class="p-6 border-b flex justify-between items-center">
    <h1 class="text-2xl font-bold" style="color: ${config.primaryColor}">${config.logoText}</h1>
    <a href="https://wa.me/${config.whatsapp.replace(/\D/g, '')}" class="px-4 py-2 rounded-lg text-white font-bold" style="background-color: ${config.primaryColor}">WhatsApp</a>
  </header>

  <!-- Hero Section -->
  <section class="py-20 text-center max-w-4xl mx-auto px-4">
    <h2 class="text-5xl font-extrabold mb-4">${config.heroTitle}</h2>
    <p class="text-xl opacity-80 mb-8">${config.heroSubtitle}</p>
    <a href="#contato" class="px-8 py-4 rounded-xl font-bold text-white shadow-lg" style="background-color: ${config.primaryColor}">${config.heroCtaText}</a>
  </section>

  <!-- Contato -->
  <footer id="contato" class="p-12 border-t text-center space-y-2">
    <p>Telefone: ${config.phone}</p>
    <p>E-mail: ${config.email}</p>
    <p>Endereço: ${config.address}</p>
  </footer>
</body>
</html>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-zinc-900 rounded-3xl max-w-2xl w-full border border-slate-200 dark:border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-blue-400" />
            <h3 className="font-bold text-lg">Exportar Estrutura do Site</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4">
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Você pode copiar o código da estrutura HTML/Tailwind gerada para o seu site <strong className="text-slate-900 dark:text-white">{config.name}</strong> ou usar a configuração como base para publicar.
          </p>

          <div className="relative">
            <pre className="p-4 rounded-2xl bg-slate-950 text-slate-200 text-xs font-mono overflow-x-auto h-64 border border-slate-800">
              {htmlSummary}
            </pre>
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copiado!' : 'Copiar Código'}</span>
            </button>
          </div>
        </div>

        <div className="p-4 border-t border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 flex justify-end">
          <button onClick={onClose} className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-xs">
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
