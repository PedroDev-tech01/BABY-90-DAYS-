import React from 'react';
import { 
  CheckSquare, Square, Moon, ShieldCheck, Heart, 
  Baby, Sparkles, FileText, CheckCircle, Clock, 
  AlertCircle, Star, Droplet, Coffee, Eye, ZoomIn 
} from 'lucide-react';

interface DocumentPagePreviewProps {
  pageId: string;
  onOpenZoom?: () => void;
}

export const DocumentPagePreview: React.FC<DocumentPagePreviewProps> = ({ pageId, onOpenZoom }) => {
  switch (pageId) {
    // 1. COVER / OVERVIEW (Page 1)
    case 'capa':
    case '1_cover':
    case 'cover':
      return (
        <div className="w-full max-w-[620px] mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between aspect-[1/1.414] p-6 sm:p-10 relative font-serif text-slate-800 select-none">
          {/* Header */}
          <div className="w-full flex justify-end items-center text-[10px] tracking-[0.25em] text-slate-400 font-sans uppercase font-bold">
            THE FIRST 90 DAYS
          </div>

          {/* Center Graphic & Titles */}
          <div className="my-auto flex flex-col items-center text-center space-y-6">
            {/* Night Sky Illustration matching image 1 */}
            <div className="w-full max-w-[360px] h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md relative bg-gradient-to-b from-[#16213e] via-[#2a3c63] via-50% to-[#a86550] flex items-center justify-center border border-slate-300">
              {/* Moon & Stars */}
              <div className="absolute top-4 right-10 w-9 h-9 rounded-full bg-[#fcedc7] shadow-[0_0_20px_rgba(252,237,199,0.7)]" />
              <div className="absolute top-6 left-12 w-1.5 h-1.5 rounded-full bg-white opacity-80" />
              <div className="absolute top-12 left-24 w-1 h-1 rounded-full bg-white opacity-60" />
              <div className="absolute top-8 right-28 w-1 h-1 rounded-full bg-white opacity-75" />
              <div className="absolute top-16 right-16 w-1.5 h-1.5 rounded-full bg-white opacity-90" />
              <div className="absolute top-14 left-8 w-1 h-1 rounded-full bg-white opacity-50" />
              
              {/* Ocean / Ground Horizon */}
              <div className="absolute bottom-0 inset-x-0 h-9 bg-[#1b2b48]" />

              {/* Silhouette of Parent & Baby */}
              <div className="relative z-10 flex flex-col items-center -mb-2">
                {/* Parent Head */}
                <div className="w-9 h-9 rounded-full bg-[#1b2b48] mb-0.5 shadow-sm" />
                {/* Parent Body / Arms */}
                <div className="w-18 h-16 rounded-t-full bg-[#1b2b48] flex items-center justify-center relative shadow-sm">
                  {/* Swaddled Baby in Warm Amber */}
                  <div className="w-7 h-9 rounded-full bg-[#df825b] border border-[#f0a682] rotate-12 flex items-center justify-center shadow-inner">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#fde1c9] -mt-1.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Title Section */}
            <div className="space-y-2 pt-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16274a] font-serif uppercase">
                THE FIRST 90 DAYS
              </h1>
              <p className="text-base sm:text-lg italic font-serif text-[#b66a46] font-medium">
                A Survival Guide for New Parents
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-sans italic max-w-sm mx-auto leading-relaxed pt-1">
                Real talk, real strategies, and real comfort for the wildest season of your life.
              </p>
            </div>
          </div>

          {/* Footer Page Number */}
          <div className="w-full text-center text-xs font-sans text-slate-400 font-medium">
            1
          </div>
        </div>
      );

    // 2. BONUS GUIDE: HOSPITAL BAG CHECKLIST (Page 2)
    case 'mala':
    case '2_hospital_bag':
    case 'hospital_bag':
      return (
        <div className="w-full max-w-[620px] mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between aspect-[1/1.414] p-6 sm:p-8 font-sans text-slate-800 select-none">
          <div className="space-y-4">
            {/* Header Badge */}
            <div className="flex flex-col items-center text-center space-y-1.5 pt-1">
              <div className="w-11 h-11 rounded-full bg-[#1b2b48] text-white flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#b66a46] uppercase">
                BONUS GUIDE
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#16274a] font-serif">
                The Complete Hospital Bag Checklist
              </h2>
              <p className="text-xs italic text-slate-500 font-serif">
                Pack this around week 36, then close the bag and forget about it until the day comes.
              </p>
            </div>

            {/* Box 1: Documents */}
            <div className="rounded-xl bg-[#fbf7f1] border border-[#e2d6c6] p-4 space-y-2.5">
              <h3 className="text-xs font-bold text-[#b66a46] font-serif tracking-wide">
                Documents to prep in advance
              </h3>
              <div className="space-y-2 text-[11px] sm:text-xs text-slate-700 leading-snug">
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Photo ID and insurance card</strong> — keep them in the front pocket, not buried at the bottom</span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Hospital pre-registration paperwork</strong> — many hospitals let you fill this out online ahead of time</span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Birth plan copies, if you have one</strong> — print 2–3 copies to hand to different staff</span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Pediatrician contact info</strong> — you’ll need to name one before discharge in most places</span>
                </div>
              </div>
            </div>

            {/* Box 2: For You */}
            <div className="rounded-xl bg-[#fbf7f1] border border-[#e2d6c6] p-4 space-y-2.5">
              <h3 className="text-xs font-bold text-[#b66a46] font-serif tracking-wide">
                For you
              </h3>
              <div className="space-y-2 text-[11px] sm:text-xs text-slate-700 leading-snug">
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Comfortable robe or oversized shirt</strong> — button-front makes early breastfeeding easier if you plan to</span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Toiletries</strong> — toothbrush, hairbrush, lip balm, hair ties, deodorant</span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Phone charger with a long cable</strong> — outlets are rarely near the bed — bring extra length</span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Going-home outfit</strong> — roomier than you think you’ll need — your body is still recovering</span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Your own pillow</strong> — with a distinct pillowcase so it doesn’t get mixed up with hospital linens</span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Snacks</strong> — labor and recovery both burn through energy fast</span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Flip-flops or slides</strong> — for the shower and for walking the halls</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full text-center text-xs text-slate-400 font-medium pt-2">
            • • •
          </div>
        </div>
      );

    // 3. MODULE 2: FEEDING & DIAPER TRACKER (Page 3)
    case 'alimentacao':
    case '3_feeding_log':
    case 'feeding_log':
      return (
        <div className="w-full max-w-[620px] mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between aspect-[1/1.414] p-6 sm:p-8 font-sans text-slate-800 select-none">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100 pb-2">
              <span className="text-[#b66a46] tracking-[0.2em] font-extrabold">MODULE 2</span>
              <span>THE COMPLETE COMPANION GUIDE</span>
            </div>

            <div className="text-center space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-[#16274a] font-serif">
                Feeding & Diaper Tracker
              </h2>
              <p className="text-xs italic text-slate-500 font-serif">
                A simple daily log — print a fresh copy each day, or track a full week here.
              </p>
            </div>

            {/* Table */}
            <div className="rounded-lg overflow-hidden border border-slate-300 shadow-2xs">
              <table className="w-full text-left text-[11px] sm:text-xs">
                <thead className="bg-[#1b2b48] text-white">
                  <tr>
                    <th className="py-2 px-2.5 font-bold">Time</th>
                    <th className="py-2 px-2.5 font-bold">Breast / Bottle (oz)</th>
                    <th className="py-2 px-2.5 font-bold">Wet diaper</th>
                    <th className="py-2 px-2.5 font-bold">Dirty diaper</th>
                    <th className="py-2 px-2.5 font-bold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[...Array(7)].map((_, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-[#fbf7f1]/60' : 'bg-white'}>
                      <td className="py-2 px-2.5 text-slate-400 font-mono text-[10px]">&nbsp;</td>
                      <td className="py-2 px-2.5">&nbsp;</td>
                      <td className="py-2 px-2.5 text-center">&nbsp;</td>
                      <td className="py-2 px-2.5 text-center">&nbsp;</td>
                      <td className="py-2 px-2.5">&nbsp;</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Why Track This Box */}
            <div className="rounded-xl bg-[#1b2b48] text-white p-4 space-y-1.5 shadow-sm">
              <span className="text-[10px] tracking-[0.2em] font-extrabold text-[#dca36d] uppercase block">
                WHY TRACK THIS
              </span>
              <p className="text-[11px] sm:text-xs text-slate-200 leading-relaxed font-sans">
                In the first weeks, feeding and diaper counts are the clearest sign your baby is getting enough. Most pediatricians ask for roughly 6+ wet diapers a day by day five — having a log makes that conversation easy.
              </p>
            </div>
          </div>

          <div className="w-full text-center text-xs text-slate-400 font-medium">
            3
          </div>
        </div>
      );

    // 4. UNDERSTANDING NEWBORN SLEEP & SEVEN-NIGHT SLEEP TRACKER (Page 4)
    case 'sono':
    case '4_sleep_tracker':
    case 'sleep_tracker':
      return (
        <div className="w-full max-w-[620px] mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between aspect-[1/1.414] p-6 sm:p-8 font-sans text-slate-800 select-none">
          <div className="space-y-3.5">
            {/* Section 1: Newborn sleep by age */}
            <div className="space-y-1">
              <h2 className="text-sm sm:text-base font-bold text-[#b66a46] font-serif">
                Understanding newborn sleep, by age
              </h2>
              <p className="text-[11px] italic text-slate-600 font-serif leading-snug">
                Knowing what’s biologically normal takes a lot of the anxiety out of the exhaustion. Here’s a realistic reference — not a target to hit, just context.
              </p>
            </div>

            {/* Table 1 */}
            <div className="rounded-lg overflow-hidden border border-slate-300 shadow-2xs">
              <table className="w-full text-left text-[10px] sm:text-[11px]">
                <thead className="bg-[#1b2b48] text-white">
                  <tr>
                    <th className="py-1.5 px-2 font-bold">Age</th>
                    <th className="py-1.5 px-2 font-bold">Total sleep/day</th>
                    <th className="py-1.5 px-2 font-bold">Longest stretch</th>
                    <th className="py-1.5 px-2 font-bold">What to expect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-white">
                    <td className="py-1.5 px-2 font-semibold">0–6 weeks</td>
                    <td className="py-1.5 px-2">14–17 hrs</td>
                    <td className="py-1.5 px-2">2–4 hrs</td>
                    <td className="py-1.5 px-2 text-slate-600 leading-tight">Sleep is scattered around the clock; feeding drives schedule</td>
                  </tr>
                  <tr className="bg-[#fbf7f1]">
                    <td className="py-1.5 px-2 font-semibold">6–12 weeks</td>
                    <td className="py-1.5 px-2">14–16 hrs</td>
                    <td className="py-1.5 px-2">3–5 hrs</td>
                    <td className="py-1.5 px-2 text-slate-600 leading-tight">A loose day/night pattern starts to emerge</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-1.5 px-2 font-semibold">3–4 months</td>
                    <td className="py-1.5 px-2">13–15 hrs</td>
                    <td className="py-1.5 px-2">4–6 hrs</td>
                    <td className="py-1.5 px-2 text-slate-600 leading-tight">Many babies begin consolidating one longer night stretch</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section 2: Seven-night sleep tracker */}
            <div className="space-y-1 pt-1">
              <h3 className="text-xs sm:text-sm font-bold text-[#b66a46] font-serif">
                Seven-night sleep tracker
              </h3>
              <p className="text-[10px] sm:text-[11px] italic text-slate-600 font-serif leading-snug">
                Fill this in each morning. Patterns are often easier to see in writing than in memory — and it helps you describe what’s happening if you ever talk to a pediatrician about sleep.
              </p>
            </div>

            {/* Table 2 */}
            <div className="rounded-lg overflow-hidden border border-slate-300 shadow-2xs">
              <table className="w-full text-left text-[10px] sm:text-[11px]">
                <thead className="bg-[#1b2b48] text-white">
                  <tr>
                    <th className="py-1.5 px-2 font-bold w-12">Night</th>
                    <th className="py-1.5 px-2 font-bold">Bedtime</th>
                    <th className="py-1.5 px-2 font-bold">Wake-ups</th>
                    <th className="py-1.5 px-2 font-bold">Longest stretch</th>
                    <th className="py-1.5 px-2 font-bold">How I’m feeling</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <tr key={num} className={num % 2 === 1 ? 'bg-white' : 'bg-[#fbf7f1]'}>
                      <td className="py-1 px-2 font-bold text-center text-slate-700">{num}</td>
                      <td className="py-1 px-2">&nbsp;</td>
                      <td className="py-1 px-2">&nbsp;</td>
                      <td className="py-1 px-2">&nbsp;</td>
                      <td className="py-1 px-2">&nbsp;</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Box 3: Wind-down routine */}
            <div className="rounded-xl bg-[#fbf7f1] border border-[#e2d6c6] p-3 space-y-1.5">
              <h4 className="text-[11px] font-bold text-[#b66a46] font-serif">
                A simple wind-down routine to try
              </h4>
              <div className="space-y-1 text-[10px] sm:text-[11px] text-slate-700 leading-tight">
                <div className="flex items-start gap-1.5">
                  <Square className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Dim the lights</strong> — about 30–45 minutes before the sleep window you’re aiming for</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Square className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Same short sequence every time</strong> — e.g. diaper change → swaddle → feed → lullaby, in that order</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Square className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Keep it boring on purpose</strong> — quiet voice, minimal stimulation — save the playful interactions for daytime</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full text-center text-xs text-slate-400 font-medium">
            • • •
          </div>
        </div>
      );

    // 5. MODULE 8: PEDIATRICIAN VISIT QUESTION LISTS (Page 9)
    case 'pediatra':
    case '5_pediatrician':
    case 'pediatrician':
      return (
        <div className="w-full max-w-[620px] mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between aspect-[1/1.414] p-6 sm:p-8 font-sans text-slate-800 select-none">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100 pb-2">
              <span className="text-[#b66a46] tracking-[0.2em] font-extrabold">MODULE 8</span>
              <span>THE COMPLETE COMPANION GUIDE</span>
            </div>

            <div className="text-center space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-[#16274a] font-serif">
                Pediatrician Visit Question Lists
              </h2>
            </div>

            {/* Visit 1 */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-bold text-[#b66a46] font-serif">
                2-week visit
              </h3>
              <div className="rounded-xl bg-[#fbf7f1] border border-[#e2d6c6] p-4 space-y-2 text-[11px] sm:text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Is baby’s weight gain on track?</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>How is the umbilical cord healing?</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Any concerns about jaundice?</strong></span>
                </div>
              </div>
            </div>

            {/* Visit 2 */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-bold text-[#b66a46] font-serif">
                1-month visit
              </h3>
              <div className="rounded-xl bg-[#fbf7f1] border border-[#e2d6c6] p-4 space-y-2 text-[11px] sm:text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Is feeding volume appropriate now?</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>When should we expect longer sleep stretches?</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Any tummy time or development concerns?</strong></span>
                </div>
              </div>
            </div>

            {/* Visit 3 */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-bold text-[#b66a46] font-serif">
                2-month visit
              </h3>
              <div className="rounded-xl bg-[#fbf7f1] border border-[#e2d6c6] p-4 space-y-2 text-[11px] sm:text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>What vaccines are today, and what reactions are normal?</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>How is head/neck control progressing?</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Any changes expected in feeding or sleep soon?</strong></span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full text-center text-xs text-slate-400 font-medium">
            9
          </div>
        </div>
      );

    // 6. MODULE 9: SMART GEAR & BUDGET GUIDE (Page 10)
    case 'compras':
    case '6_nursery_guide':
    case 'nursery_guide':
    default:
      return (
        <div className="w-full max-w-[620px] mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between aspect-[1/1.414] p-6 sm:p-8 font-sans text-slate-800 select-none">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100 pb-2">
              <span className="text-[#b66a46] tracking-[0.2em] font-extrabold">MODULE 9</span>
              <span>THE COMPLETE COMPANION GUIDE</span>
            </div>

            <div className="text-center space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-[#16274a] font-serif">
                Smart Gear & Budget Guide
              </h2>
            </div>

            {/* Box 1: Actually worth buying */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-bold text-[#b66a46] font-serif">
                Actually worth buying
              </h3>
              <div className="rounded-xl bg-[#fbf7f1] border border-[#e2d6c6] p-4 space-y-2.5 text-[11px] sm:text-xs text-slate-700 leading-snug">
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>A safe, well-fitted car seat</strong> — non-negotiable, and the one item you truly cannot skip</span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>A few swaddles or sleep sacks</strong> — more useful than most 'nursery decor' purchases</span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>A simple bassinet or safe sleep space</strong> — for the room-sharing months</span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Diapers and wipes in bulk</strong> — you’ll use far more than you expect</span>
                </div>
              </div>
            </div>

            {/* Box 2: Often skippable at first */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-bold text-[#b66a46] font-serif">
                Often skippable at first
              </h3>
              <div className="rounded-xl bg-[#fbf7f1] border border-[#e2d6c6] p-4 space-y-2.5 text-[11px] sm:text-xs text-slate-700 leading-snug">
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Wipe warmers</strong> — nice-to-have, not necessary</span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Full nursery furniture sets</strong> — babies don’t need a decorated nursery on day one</span>
                </div>
                <div className="flex items-start gap-2">
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Multiple types of bottles</strong> — wait to see what your baby actually takes to before buying every brand</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full text-center text-xs text-slate-400 font-medium">
            10
          </div>
        </div>
      );
  }
};
