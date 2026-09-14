import React, { useRef, useState, useEffect } from 'react';
import { 
  CheckCheck, Phone, Video, MoreVertical, 
  Smile, Mic, Paperclip, ChevronLeft, ChevronRight, 
  Sparkles, Heart, ShieldCheck, Play, Pause, ArrowRight
} from 'lucide-react';

interface FeedbackItem {
  id: string;
  senderName: string;
  senderRole: string;
  avatarUrl: string;
  status: string;
  date: string;
  time: string;
  incomingMessage?: string;
  outgoingMessage: string;
  hasAudio?: boolean;
  audioDuration?: string;
  reaction?: string;
  tag: string;
  attachmentName?: string;
}

const FEEDBACKS: FeedbackItem[] = [
  {
    id: '1',
    senderName: 'Jessica & Marcus M.',
    senderRole: 'Mom & Dad of Baby Liam (2 weeks)',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    status: 'Online',
    date: 'Today',
    time: '3:42 AM',
    incomingMessage: 'How are the first weeks going with Liam?? Sleeping any better?',
    outgoingMessage: 'Honestly the Feeding Log on the fridge is a marriage saver lol 😭 Marcus took over the 3:30 AM feeding last night and didn’t have to wake me up once to ask what time he last ate or how many oz. We just check the sheet!',
    hasAudio: true,
    audioDuration: '0:22',
    reaction: '❤️ 2',
    tag: 'Night Feeds & Teamwork'
  },
  {
    id: '2',
    senderName: 'David C.',
    senderRole: 'First-time Dad (Baby Leo, 4 weeks)',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    status: 'Active today at 11:30 AM',
    date: 'Today',
    time: '11:15 AM',
    outgoingMessage: 'Quick feedback on the kit: as a first-time dad you usually feel like a spectator. The hospital bag checklists and 90-day roadmap gave me concrete things to do instead of standing around stressed. Definitely recommend to other dads.',
    reaction: '👏 1',
    tag: 'First-Time Dad Confidence'
  },
  {
    id: '3',
    senderName: 'Amanda & Lucas K.',
    senderRole: 'Parents of Maya (1 month)',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    status: 'Active 10m ago',
    date: 'Yesterday',
    time: '2:28 PM',
    incomingMessage: 'How did the 1-month pediatrician checkup go?',
    outgoingMessage: 'Our doctor literally said "I wish all first-time parents were this organized!" 🥹 We brought the Pediatrician Questions sheet from the kit and didn’t forget a single question about her reflux. No anxiety at all!',
    reaction: '🙏 2',
    tag: 'Doctor Visits'
  },
  {
    id: '4',
    senderName: 'Sarah Jenkins',
    senderRole: 'Expecting Mom (37 weeks pregnant)',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    status: 'Online',
    date: 'Yesterday',
    time: '7:09 PM',
    outgoingMessage: 'Printed the nursery shopping guide and literally crossed off $350+ worth of gadgets we were about to order on Amazon that we didn’t need. The "worth buying vs skip" list alone paid for the $9.99 kit 30 times over!',
    attachmentName: 'Baby_Shopping_List_Checklist.pdf',
    reaction: '🎉 1',
    tag: 'Saved $350+ on Nursery'
  },
  {
    id: '5',
    senderName: 'Carlos & Beatriz M.',
    senderRole: 'Parents of Sophia (6 weeks)',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    status: 'Active today at 09:15 AM',
    date: '2 days ago',
    time: '8:45 AM',
    incomingMessage: 'Did the sleep tracker help with the wake windows?',
    outgoingMessage: 'YES! We printed 2 copies of the 7-night tracker. Seeing his wake windows visually instead of trying to remember when he woke up at 4 AM was huge for our sanity. It completely calmed down our nights.',
    reaction: '🌙 2',
    tag: 'Sleep & Wake Windows'
  },
  {
    id: '6',
    senderName: 'Emily Watson',
    senderRole: 'First-time Mom (Baby Noah, 8 weeks)',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    status: 'Online',
    date: '3 days ago',
    time: '5:50 PM',
    outgoingMessage: 'What I love most is that it’s NOT an overwhelming 400-page book you have to read while exhausted. Just straight-to-the-point printable sheets and practical guidance. Best $10 spent in my whole pregnancy.',
    reaction: '❤️ 3',
    tag: 'Practical & Zero Fluff'
  },
  {
    id: '7',
    senderName: 'Tom & Chloe R.',
    senderRole: 'Parents of Twins (4 weeks)',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    status: 'Active 2h ago',
    date: 'This week',
    time: '4:12 PM',
    outgoingMessage: 'With twins we were in pure survival mode. Chloe and I printed separate feeding & diaper sheets by the nursery station. We literally hand over care like doctors on shift change now haha. Total game changer.',
    reaction: '🙌 2',
    tag: 'Twin Parents Approved'
  },
  {
    id: '8',
    senderName: 'Rachel B.',
    senderRole: 'Mom of Maya (5 weeks)',
    avatarUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80',
    status: 'Active today',
    date: 'This week',
    time: '1:25 PM',
    outgoingMessage: 'Already sent the link to two pregnant coworkers. So relieved to have all the questions, bags, and daily trackers in one single system instead of 20 random Pinterest pins!',
    reaction: '🥰 1',
    tag: 'Recommended to Friends'
  }
];

export const WhatsAppFeedbacks: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [activeTag, setActiveTag] = useState<string>('All');
  
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pointerStartRef = useRef<{ x: number; scrollLeft: number }>({ x: 0, scrollLeft: 0 });
  const isDraggingRef = useRef<boolean>(false);

  // Resume auto-scroll after a short delay when user stops interacting
  const notifyUserActivity = (pauseDurationMs = 2500) => {
    setIsUserInteracting(true);
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, pauseDurationMs);
  };

  // Continuous auto-scroll loop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const scrollLoop = (time: number) => {
      const delta = Math.min(time - lastTime, 40);
      lastTime = time;

      // Only auto-scroll when active and not being manually dragged or interacted with
      if (isPlaying && !isUserInteracting && !isPointerDown && container) {
        // Natural reading pace: ~0.85px per 16ms
        const moveAmount = (0.85 * delta) / 16;
        container.scrollLeft += moveAmount;

        // Wrap around smoothly at the halfway point (since items are duplicated)
        const halfWidth = container.scrollWidth / 2;
        if (halfWidth > 0 && container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += halfWidth;
        }
      }

      animationFrameId = requestAnimationFrame(scrollLoop);
    };

    animationFrameId = requestAnimationFrame(scrollLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, [isPlaying, isUserInteracting, isPointerDown]);

  // Pointer event handlers (works seamlessly for both mouse drag & touch swipe)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setIsPointerDown(true);
    isDraggingRef.current = true;
    pointerStartRef.current = {
      x: e.clientX,
      scrollLeft: container.scrollLeft
    };
    notifyUserActivity(4000);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown || !isDraggingRef.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const deltaX = e.clientX - pointerStartRef.current.x;
    scrollContainerRef.current.scrollLeft = pointerStartRef.current.scrollLeft - deltaX;
    notifyUserActivity(4000);
  };

  const handlePointerUpOrCancel = () => {
    setIsPointerDown(false);
    isDraggingRef.current = false;
    notifyUserActivity(2000);
  };

  const handleScrollManual = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    notifyUserActivity(3500);
    const cardWidth = 370;
    container.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth'
    });
  };

  // Filter or highlight categories
  const categories = ['All', 'Night Feeds', 'First-Time Dads', 'Doctor Visits', 'Nursery Savings'];

  const filteredFeedbacks = activeTag === 'All' 
    ? FEEDBACKS 
    : FEEDBACKS.filter(f => {
        if (activeTag === 'Night Feeds') return f.tag.includes('Night') || f.tag.includes('Sleep');
        if (activeTag === 'First-Time Dads') return f.senderRole.includes('Dad') || f.tag.includes('Dad');
        if (activeTag === 'Doctor Visits') return f.tag.includes('Doctor');
        if (activeTag === 'Nursery Savings') return f.tag.includes('Saved') || f.tag.includes('Shopping');
        return true;
      });

  // Duplicate items for continuous infinite scroll
  const displayItems = [...filteredFeedbacks, ...filteredFeedbacks];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white border-b border-slate-200 overflow-hidden relative">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-900 border border-emerald-300/80 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>REAL WHATSAPP FEEDBACK • MOMS & DADS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
            Loved by Parents in the Trenches of the First 90 Days
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Real, unfiltered messages from moms and dads who printed the checklists, shared night shifts, and navigated doctor visits with calm confidence.
          </p>

          {/* Quick topic pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveTag(cat);
                  notifyUserActivity(3000);
                }}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer ${
                  activeTag === cat
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Interactive instruction & Controls pill */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs font-medium">
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${isPlaying && !isUserInteracting ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`} />
                {isPlaying && !isUserInteracting ? 'Auto-sliding' : 'Manual control'}
              </span>
              <span className="text-slate-300">|</span>
              <span>Drag, swipe, or click arrows</span>
            </span>

            {/* Play/Pause & Manual Controls */}
            <div className="inline-flex items-center gap-1 bg-white p-0.5 rounded-full border border-slate-200 shadow-2xs">
              <button
                type="button"
                onClick={() => {
                  setIsPlaying(!isPlaying);
                  setIsUserInteracting(false);
                }}
                className="p-1 px-2.5 rounded-full flex items-center gap-1 text-[11px] font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                title={isPlaying ? "Pause auto-scroll" : "Resume auto-scroll"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-slate-600" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-emerald-600 fill-emerald-600" />
                    <span>Auto-slide</span>
                  </>
                )}
              </button>
              <div className="w-px h-3 bg-slate-200" />
              <button
                type="button"
                onClick={() => handleScrollManual('left')}
                className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-700 transition cursor-pointer"
                title="Previous feedback"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleScrollManual('right')}
                className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-700 transition cursor-pointer"
                title="Next feedback"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* WhatsApp Cards Slider Wrapper with Floating Side Arrows */}
      <div className="w-full relative py-2 group">
        
        {/* Soft edge blur gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* Floating Left Action Arrow (Desktop) */}
        <button
          type="button"
          onClick={() => handleScrollManual('left')}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-slate-200 text-slate-700 hover:text-emerald-700 hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer opacity-80 hover:opacity-100 hidden sm:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Floating Right Action Arrow (Desktop) */}
        <button
          type="button"
          onClick={() => handleScrollManual('right')}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-slate-200 text-slate-700 hover:text-emerald-700 hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer opacity-80 hover:opacity-100 hidden sm:flex"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Scrollable / Draggable Container */}
        <div
          ref={scrollContainerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUpOrCancel}
          onPointerCancel={handlePointerUpOrCancel}
          onMouseEnter={() => notifyUserActivity(3000)}
          onTouchStart={() => notifyUserActivity(3000)}
          className={`flex gap-5 overflow-x-auto select-none py-4 px-4 sm:px-10 cursor-${isPointerDown ? 'grabbing' : 'grab'} active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`}
          style={{ touchAction: 'pan-x pan-y', WebkitOverflowScrolling: 'touch' }}
        >
          {displayItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[320px] sm:w-[370px] shrink-0 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex flex-col overflow-hidden text-left"
            >
              
              {/* WhatsApp Chat Header */}
              <div className="bg-[#075E54] text-white px-3.5 py-2.5 flex items-center justify-between border-b border-[#054c44]">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="relative shrink-0">
                    <img
                      src={item.avatarUrl}
                      alt={item.senderName}
                      className="w-9 h-9 rounded-full object-cover border border-white/30"
                      loading="lazy"
                    />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#075E54]" />
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-bold text-xs sm:text-sm truncate text-white leading-tight">
                      {item.senderName}
                    </h4>
                    <p className="text-[10px] text-emerald-100 truncate opacity-90">
                      {item.senderRole}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-white/80 shrink-0">
                  <Video className="w-3.5 h-3.5 cursor-default hover:text-white" />
                  <Phone className="w-3.5 h-3.5 cursor-default hover:text-white" />
                  <MoreVertical className="w-3.5 h-3.5 cursor-default hover:text-white" />
                </div>
              </div>

              {/* Sub-header / Verified Badge */}
              <div className="bg-[#128C7E]/10 px-3.5 py-1 flex items-center justify-between text-[10px] text-emerald-900 border-b border-emerald-100">
                <span className="flex items-center gap-1 font-bold">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Verified Buyer • BABY90 Kit
                </span>
                <span className="font-medium text-emerald-700 bg-white/80 px-2 py-0.5 rounded-full text-[9px] border border-emerald-200">
                  {item.tag}
                </span>
              </div>

              {/* WhatsApp Chat Body with Authentic Wallpaper styling */}
              <div 
                className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-3 relative"
                style={{
                  backgroundColor: '#ECE5DD',
                  backgroundImage: 'radial-gradient(#d1c7bc 0.75px, transparent 0.75px)',
                  backgroundSize: '12px 12px'
                }}
              >
                
                {/* Date Pill */}
                <div className="flex justify-center">
                  <span className="bg-white/90 text-slate-600 text-[9px] font-bold px-2.5 py-0.5 rounded-md shadow-2xs border border-slate-200 uppercase tracking-wider">
                    {item.date}
                  </span>
                </div>

                {/* Optional Incoming Prompt Message */}
                {item.incomingMessage && (
                  <div className="self-start max-w-[85%] bg-white rounded-lg rounded-tl-none p-2.5 shadow-2xs text-slate-800 text-xs leading-snug relative border border-slate-200/60">
                    <p className="text-[11px] text-slate-700">{item.incomingMessage}</p>
                    <div className="text-[9px] text-slate-400 text-right mt-1 font-mono">
                      {item.time}
                    </div>
                  </div>
                )}

                {/* Main Outgoing Green Message Bubble */}
                <div className="self-end max-w-[92%] bg-[#D9FDD3] rounded-lg rounded-tr-none p-2.5 sm:p-3 shadow-2xs text-slate-900 text-xs leading-relaxed relative border border-[#c3f4bb]">
                  
                  {/* Optional Voice Note Simulator */}
                  {item.hasAudio && (
                    <div className="mb-2 p-1.5 rounded-md bg-white/70 border border-emerald-200/80 flex items-center gap-2">
                      <button 
                        type="button"
                        onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                        className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs hover:bg-emerald-500 cursor-pointer"
                        aria-label="Play audio snippet"
                      >
                        {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
                      </button>
                      <div className="flex-1 flex items-center gap-1 overflow-hidden">
                        <span className="text-[9px] font-mono font-bold text-emerald-800">
                          Voice Note ({item.audioDuration})
                        </span>
                        <div className="flex items-center gap-0.5 text-emerald-600 text-[10px] ml-auto">
                          <span>ılılıllı</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Optional Attachment Pill */}
                  {item.attachmentName && (
                    <div className="mb-2 p-1.5 rounded-md bg-white/80 border border-emerald-200 flex items-center gap-2 text-[10px] font-semibold text-slate-700">
                      <Paperclip className="w-3 h-3 text-emerald-600" />
                      <span className="truncate">{item.attachmentName}</span>
                    </div>
                  )}

                  <p className="text-[12px] sm:text-[12.5px] font-normal text-slate-800 leading-normal">
                    "{item.outgoingMessage}"
                  </p>

                  {/* Reaction and Timestamp with Blue Checkmarks */}
                  <div className="flex items-center justify-between mt-1.5 pt-0.5 text-[9px] text-slate-500 font-mono">
                    {item.reaction ? (
                      <span className="bg-white/90 px-1.5 py-0.5 rounded-full shadow-2xs border border-emerald-200 text-[10px] leading-none">
                        {item.reaction}
                      </span>
                    ) : <span />}

                    <div className="flex items-center gap-1 ml-auto">
                      <span>{item.time}</span>
                      <CheckCheck className="w-3.5 h-3.5 text-[#53BDEB]" />
                    </div>
                  </div>

                </div>

              </div>

              {/* WhatsApp Simulated Bottom Action Input */}
              <div className="bg-[#F0F2F5] px-3 py-2 border-t border-slate-200 flex items-center gap-2 text-slate-400">
                <Smile className="w-4 h-4 hover:text-slate-600 cursor-default" />
                <div className="flex-1 bg-white rounded-full px-3 py-1 text-[11px] text-slate-400 border border-slate-200 truncate">
                  Type a reply...
                </div>
                <Paperclip className="w-3.5 h-3.5 hover:text-slate-600 cursor-default" />
                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                  <Mic className="w-3 h-3" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Trust reassurance banner under feedbacks */}
      <div className="max-w-3xl mx-auto px-4 mt-8 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 bg-white px-5 py-2.5 rounded-2xl border border-slate-200 shadow-2xs">
          <span className="flex items-center gap-1.5 font-bold text-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            100% Real Feedback From Verified Buyers
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="text-slate-600">
            One-Time $9.99 • 7-Day Money-Back Guarantee
          </span>
        </div>
      </div>

    </section>
  );
};
