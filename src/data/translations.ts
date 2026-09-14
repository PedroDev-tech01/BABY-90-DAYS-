export interface TranslationContent {
  topBanner: {
    discount: string;
    instantDelivery: string;
    guarantee: string;
    cta: string;
  };
  header: {
    logo: string;
    tagline: string;
    navKit: string;
    navInside: string;
    navTimeline: string;
    navWhoFor: string;
    navFaq: string;
    buyNow: string;
  };
  hero: {
    avatarBadge: string;
    brandName: string;
    productTag: string;
    headline: string;
    subheadline: string;
    benefitPills: string[];
    specsPill: string;
    price: string;
    paymentType: string;
    ctaPrimary: string;
    ctaSecondary: string;
    guaranteeBadge: string;
    badgesUnderCta: string[];
    featureList: string[];
    transformationBefore: {
      title: string;
      subtitle: string;
      items: string[];
    };
    transformationAfter: {
      title: string;
      subtitle: string;
      items: string[];
    };
  };
  systemPositioning: {
    badge: string;
    title: string;
    subtitle: string;
    cards: {
      title: string;
      desc: string;
      iconName: string;
    }[];
  };
  kitShowcase: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      badge: string;
      description: string;
      iconName: string;
      tag: string;
    }[];
  };
  pdfPreview: {
    badge: string;
    title: string;
    subtitle: string;
    placeholderNote: string;
    ctaInside: string;
    watermark: string;
    screenshots: {
      id: string;
      label: string;
      title: string;
      pageRange: string;
      description: string;
      highlights: string[];
      sampleExcerpt: string;
    }[];
  };
  timeline: {
    badge: string;
    title: string;
    subtitle: string;
    keyFocusLabel: string;
    steps: {
      phase: string;
      period: string;
      title: string;
      desc: string;
      keyFocus: string[];
    }[];
  };
  bonusesSection: {
    badge: string;
    title: string;
    subtitle: string;
    includedFreeText: string;
    cta: string;
    items: {
      number: string;
      title: string;
      description: string;
      iconName: string;
    }[];
  };
  howItWorks: {
    badge: string;
    title: string;
    steps: {
      number: string;
      title: string;
      desc: string;
    }[];
  };
  whoIsItFor: {
    badge: string;
    titleFor: string;
    forItems: string[];
    titleNotFor: string;
    notForItems: string[];
  };
  safetyAndLimitations: {
    badge: string;
    title: string;
    subtitle: string;
    disclaimerBoxTitle: string;
    disclaimerBoxText: string;
    points: string[];
  };
  guarantee: {
    badge: string;
    title: string;
    desc: string;
    refundPolicyLinkText: string;
    features: string[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  ctaSection: {
    avatarBadge: string;
    title: string;
    subtitle: string;
    price: string;
    priceDetails: string;
    button: string;
    securityText: string;
  };
  medicalDisclaimer: {
    title: string;
    text: string;
  };
  footer: {
    copyright: string;
    rights: string;
    digitalProductNotice: string;
  };
  checkout: {
    title: string;
    subtitle: string;
    price: string;
    summaryTitle: string;
    includedItems: string[];
    guaranteeText: string;
    payCard: string;
    payPaypal: string;
    form: {
      emailLabel: string;
      emailPlaceholder: string;
      nameLabel: string;
      namePlaceholder: string;
      cardLabel: string;
      expLabel: string;
      cvcLabel: string;
      submitBtn: string;
      processing: string;
    };
    success: {
      title: string;
      message: string;
      downloadBtn: string;
      closeBtn: string;
    };
  };
}

export const CONTENT: TranslationContent = {
  topBanner: {
    discount: "BABY90 — The First 90 Days Newborn Organization Kit",
    instantDelivery: "Instant Digital Access",
    guarantee: "7-Day Guarantee",
    cta: "Get My BABY90 Kit — $9.99"
  },
  header: {
    logo: "BABY90",
    tagline: "The First 90 Days Newborn Organization Kit",
    navKit: "The Kit",
    navInside: "What's Included",
    navTimeline: "90-Day Timeline",
    navWhoFor: "Who It's For",
    navFaq: "FAQ",
    buyNow: "Get My BABY90 Kit — $9.99"
  },
  hero: {
    avatarBadge: "Made for Moms & Dads • First-Time Parents",
    brandName: "BABY90",
    productTag: "The First 90 Days Newborn Organization Kit",
    headline: "Feel More Prepared for Your Baby’s First 90 Days.",
    subheadline: "Everything you and your partner need to stay organized, prepared, and confident during your baby’s first 90 days — with ready-to-use checklists, daily tracking logs, and doctor visit prep in one simple system designed for moms and dads.",
    benefitPills: [
      "For Moms & Dads",
      "Daily Trackers",
      "Doctor Visit Prep",
      "Baby Essentials",
      "Shared Care"
    ],
    specsPill: "Instant Digital Access • Printable (A4) & Phone-Friendly • English Edition",
    price: "$9.99",
    paymentType: "One-time payment — no subscription",
    ctaPrimary: "Get My BABY90 Kit — $9.99",
    ctaSecondary: "Explore What's Inside The Kit",
    guaranteeBadge: "7-Day Guarantee",
    badgesUnderCta: [
      "Immediate Digital Download After Checkout",
      "Print at Home or Use Directly on Your Phone",
      "One-Time Payment — No Recurring Charges",
      "Full 7-Day Money-Back Guarantee"
    ],
    featureList: [
      "Centralized daily trackers for feeds, diapers & sleep",
      "Comprehensive hospital bag & nursery shopping checklists",
      "Pediatrician milestone questions ready for doctor visits",
      "Clear phase-by-phase organization for the first 3 months"
    ],
    transformationBefore: {
      title: "Without Organization",
      subtitle: "Common fourth-trimester overwhelm",
      items: [
        "Frantic 3 AM Google searches causing extra worry",
        "Losing track of feed intervals, wet diapers, and sleep times",
        "Second-guessing what you actually need for the nursery",
        "Blanking on important questions during pediatrician visits"
      ]
    },
    transformationAfter: {
      title: "With BABY90 Kit",
      subtitle: "Calm, practical & prepared routines",
      items: [
        "One calm, structured reference system in one place",
        "Clear logs to monitor feeding & diaper health effortlessly",
        "Realistic gear checklist that prevents impulse spending",
        "Organized question checklists for confident doctor checkups"
      ]
    }
  },
  systemPositioning: {
    badge: "Your Practical Organization System",
    title: "Not just a PDF — your daily organization system for the first 90 days",
    subtitle: "When you bring your newborn home, sleep deprivation makes it easy to feel lost. The BABY90 Kit replaces guesswork with structured clarity.",
    cards: [
      {
        title: "Stay Organized Every Day",
        desc: "Simple, practical sheets designed to record daily rhythms in seconds — without complex apps or confusing manuals.",
        iconName: "CheckSquare"
      },
      {
        title: "Arrive Prepared at Doctor Visits",
        desc: "Bring clear feeding and diaper logs plus organized milestone questions to make every pediatrician appointment productive.",
        iconName: "Activity"
      },
      {
        title: "Share Care Seamlessly Between Mom & Dad",
        desc: "Print sheets for your changing table or fridge so both mom and dad are instantly on the exact same page, dividing feeds and nighttime shifts smoothly.",
        iconName: "Users"
      }
    ]
  },
  kitShowcase: {
    badge: "What's Inside The Kit",
    title: "Everything You Need in One Place",
    subtitle: "A complete collection of practical tools, checklists, and tracking sheets designed to keep both moms and dads calm, aligned, and organized.",
    items: [
      {
        id: "hospital-bag",
        title: "Hospital Bag Checklist",
        badge: "Pre-Birth Prep",
        description: "Organized checklists for mom, dad/partner, and baby. Pack early, avoid forgotten essentials, and arrive at the hospital with calm confidence.",
        iconName: "Briefcase",
        tag: "Printable Checklist"
      },
      {
        id: "shopping-checklist",
        title: "Baby Shopping Checklist",
        badge: "Smart Nursery Budget",
        description: "Practical breakdown of genuine 0–3 month essentials vs. items you can safely skip. Saves hundreds of dollars and reduces nursery clutter.",
        iconName: "ShoppingCart",
        tag: "Budget & Gear Guide"
      },
      {
        id: "feeding-tracker",
        title: "Feeding Tracker",
        badge: "Daily Routine",
        description: "Clean logging table for breastfeeding, formula, or combination feeding. Track time, duration, ounces, and interval patterns at a glance.",
        iconName: "Droplet",
        tag: "Daily Log Sheet"
      },
      {
        id: "sleep-tracker",
        title: "Sleep Tracker & Wind-Down Guide",
        badge: "Rest & Routine",
        description: "Biological sleep expectation reference by age, paired with a 7-night tracker and a gentle 3-step soothing bedtime routine.",
        iconName: "Moon",
        tag: "7-Night Log"
      },
      {
        id: "diaper-log",
        title: "Diaper / Daily Baby Log",
        badge: "Health Monitoring",
        description: "Daily tracker for wet and dirty diapers to easily verify newborn hydration and bowel regularity for pediatrician peace of mind.",
        iconName: "FileCheck",
        tag: "Health Tracker"
      },
      {
        id: "pediatrician-prep",
        title: "Pediatrician Appointment Prep",
        badge: "Doctor Visits",
        description: "Structured checkup organizer to record birth stats, growth percentiles, vaccinations, and notes from each milestone visit.",
        iconName: "Activity",
        tag: "Milestone Record"
      },
      {
        id: "doctor-questions",
        title: "Questions for Doctor Visits",
        badge: "Never Forget to Ask",
        description: "Pre-written question lists customized for 2-week, 1-month, and 2-month checkups covering weight gain, jaundice, colic, and sleep.",
        iconName: "HelpCircle",
        tag: "Question List"
      },
      {
        id: "organizer-90days",
        title: "First 90 Days Organizer",
        badge: "Phase-by-Phase Roadmap",
        description: "Timeline roadmap walking you step-by-step through Weeks 1–2 (Arrival), Weeks 3–6 (Routine), Month 2 (Milestones), and Month 3 (Balance).",
        iconName: "Calendar",
        tag: "90-Day Roadmap"
      },
      {
        id: "important-info",
        title: "Important Information Tracker",
        badge: "Emergency & Records",
        description: "Centralized quick-reference sheet for pediatrician emergency contacts, insurance numbers, allergies, birth details, and caregiver notes.",
        iconName: "ShieldCheck",
        tag: "Quick Reference"
      }
    ]
  },
  pdfPreview: {
    badge: "Interactive Preview",
    title: "Look Inside the BABY90 Kit",
    subtitle: "Inspect the layout and print-ready structure of the kit pages before you purchase.",
    placeholderNote: "Visual previews of the high-resolution printable PDF sheets included in your kit.",
    ctaInside: "Get My BABY90 Kit — $9.99",
    watermark: "PREVIEW — BABY90",
    screenshots: [
      {
        id: "capa",
        label: "PAGE 1 — COVER OVERVIEW",
        title: "The First 90 Days: Survival Guide",
        pageRange: "Kit Overview • Page 1",
        description: "Official cover layout designed with calming visuals and clear structural indexing for quick reference.",
        highlights: [
          "Night sky & newborn comfort illustration",
          "Subtitle: 'A Survival Guide for New Parents'",
          "Dedicated index & immediate reference start"
        ],
        sampleExcerpt: "Real talk, real strategies, and real comfort for the wildest season of your life."
      },
      {
        id: "mala",
        label: "BONUS GUIDE — HOSPITAL BAG",
        title: "The Complete Hospital Bag Checklist",
        pageRange: "Bonus Guide • Printable Checklist",
        description: "Organized separately into documents to prepare in advance and personal recovery essentials.",
        highlights: [
          "Documents to prep in advance (ID, pre-registration, birth plan)",
          "Personal comfort & recovery checklist (robe, long charger, pillow)",
          "Pack around week 36 for peace of mind"
        ],
        sampleExcerpt: "Pack this around week 36, then close the bag and forget about it until the day comes."
      },
      {
        id: "alimentacao",
        label: "MODULE 2 — DAILY LOG",
        title: "Feeding & Diaper Tracker",
        pageRange: "Module 2 • Page 3",
        description: "Clean tracking table designed to log feedings, wet/dirty diapers, and vital observations without stress.",
        highlights: [
          "Structured columns for Time, Breast/Bottle (oz), Diaper counts & Notes",
          "Neutral format for breastfeeding, bottle, or combination feeding",
          "'Why Track This' pediatrician guidance callout box"
        ],
        sampleExcerpt: "In the first weeks, feeding and diaper counts are the clearest sign your baby is getting enough."
      },
      {
        id: "sono",
        label: "SLEEP GUIDE & 7-NIGHT TRACKER",
        title: "Understanding Sleep & Night Tracker",
        pageRange: "Sleep Module • Age Reference Table",
        description: "Biological sleep expectations by age group paired with a 7-night routine tracker and gentle wind-down sequence.",
        highlights: [
          "Age reference table (0-6 weeks, 6-12 weeks, 3-4 months)",
          "7-night morning logging table (Bedtime, Wake-ups, Stretch, Mood)",
          "Simple 3-step wind-down routine checklist"
        ],
        sampleExcerpt: "Knowing what's biologically normal takes a lot of the anxiety out of the exhaustion. Here's a realistic reference."
      },
      {
        id: "pediatra",
        label: "MODULE 8 — DOCTOR VISITS",
        title: "Pediatrician Visit Question Lists",
        pageRange: "Module 8 • Page 9",
        description: "Organized question checklists categorized by visit milestone (2-week, 1-month, 2-month) so nothing is forgotten.",
        highlights: [
          "2-week checkup questions (weight gain, umbilical cord, jaundice)",
          "1-month visit questions (feeding volume, sleep stretches, tummy time)",
          "2-month visit questions (vaccines & normal reactions, neck control)"
        ],
        sampleExcerpt: "Structured question checklists to make every routine pediatrician visit confident and productive."
      },
      {
        id: "compras",
        label: "MODULE 9 — BUDGET & GEAR",
        title: "Smart Gear & Budget Guide",
        pageRange: "Module 9 • Page 10",
        description: "Realistic purchasing guide distinguishing between non-negotiable newborn essentials and items skippable at first.",
        highlights: [
          "Actually worth buying list (fitted car seat, swaddles, bassinet, bulk diapers)",
          "Often skippable at first list (wipe warmers, full nursery sets, bottle sets)",
          "Helps avoid impulse buys and saves hundreds in nursery expenses"
        ],
        sampleExcerpt: "Focusing on genuine 0-3 month essentials prevents unnecessary spending and clutter in early parenthood."
      }
    ]
  },
  timeline: {
    badge: "90-Day Timeline Roadmap",
    title: "An organized journey from hospital discharge to Month 3",
    subtitle: "Realistic, phase-by-phase organization to help you stay grounded through each newborn stage.",
    keyFocusLabel: "Primary Focus:",
    steps: [
      {
        phase: "PHASE 1",
        period: "Weeks 1–2",
        title: "Birth & Coming Home",
        desc: "Focus on home arrival setup, mother's recovery, and simple day-by-day newborn rhythm.",
        keyFocus: [
          "Organizing home arrival and immediate supplies",
          "Recording feedings and diaper counts",
          "Structuring family rest and postpartum recovery",
          "Preparing for the first pediatrician appointment"
        ]
      },
      {
        phase: "PHASE 2",
        period: "Weeks 3–6",
        title: "Adaptation & Routine Building",
        desc: "Structuring daily workflows, observational logs, and shared care coordination.",
        keyFocus: [
          "Noticing hunger, tiredness, and wake-window cues",
          "Dividing daily nursery tasks with your partner",
          "Writing down observations for medical checkups",
          "Setting up your family support network"
        ]
      },
      {
        phase: "PHASE 3",
        period: "Month 2",
        title: "Development & Follow-Up",
        desc: "Consolidating tracking routines and preparing questions for 2-month milestone visits.",
        keyFocus: [
          "Recording day-to-day milestones and observations",
          "Organizing specific questions for 2-month checkup",
          "Age-appropriate tummy time and visual engagement",
          "Fine-tuning household routines and rest periods"
        ]
      },
      {
        phase: "PHASE 4",
        period: "Month 3",
        title: "New Routines & Family Balance",
        desc: "Sustaining a comfortable family rhythm and preparing for upcoming transitions.",
        keyFocus: [
          "Organizing baby's daily activities and outings",
          "Support network planning for return-to-work prep",
          "Adjusting family schedules as baby's wake windows expand",
          "Centralizing baby records and medical files"
        ]
      }
    ]
  },
  bonusesSection: {
    badge: "Printable Kit Materials",
    title: "Ready-to-Print Practical Tools Included",
    subtitle: "High-resolution sheets formatted for standard home printing or immediate phone use.",
    includedFreeText: "Included with your BABY90 Kit",
    cta: "Get My BABY90 Kit — $9.99",
    items: [
      {
        number: "TOOL 1",
        title: "Feeding & Diaper Log Sheet",
        description: "Keep on your changing table or fridge for instant daily notes without screen distraction.",
        iconName: "Droplet"
      },
      {
        number: "TOOL 2",
        title: "Hospital Bag Printable Checklist",
        description: "Compact printable list to double check every bag before delivery day arrives.",
        iconName: "Briefcase"
      },
      {
        number: "TOOL 3",
        title: "Sleep & Routine Nursery Tracker",
        description: "Visual sheet for logging rest intervals and noticing baby wake windows.",
        iconName: "Moon"
      },
      {
        number: "TOOL 4",
        title: "Essential Nursery Shopping Guide",
        description: "Smart shopping checklist focusing purely on practical 0–3 month items without excess.",
        iconName: "ShoppingCart"
      }
    ]
  },
  howItWorks: {
    badge: "How It Works",
    title: "Instant access in 3 simple steps",
    steps: [
      {
        number: "01",
        title: "Get The Kit",
        desc: "Secure one-time payment of $9.99 with no subscription or hidden fees."
      },
      {
        number: "02",
        title: "Instant Digital Access",
        desc: "Immediately access and download your kit on screen and directly in your email."
      },
      {
        number: "03",
        title: "Print or Use on Phone",
        desc: "Open on any smartphone or tablet, or print sheets for easy nursery reference."
      }
    ]
  },
  whoIsItFor: {
    badge: "Who It's For / Who It's NOT For",
    titleFor: "The BABY90 Kit is made for you if...",
    forItems: [
      "You are a first-time mom or dad wanting to feel prepared, calm, and fully in control",
      "You and your partner want to share baby care, feeding logs, and night shifts effortlessly",
      "You just brought your newborn home and want a clear, structured daily system for both parents",
      "You want to easily log feedings, diaper counts, and sleep periods without guesswork",
      "You prefer a single, organized system over stressful 3 AM Google searches"
    ],
    titleNotFor: "The BABY90 Kit is NOT for you if...",
    notForItems: [
      "You are looking for medical diagnoses, clinical treatments, or emergency healthcare",
      "You expect rigid sleep training promises or guarantees of zero crying",
      "You intend to substitute your pediatrician's personalized medical evaluation",
      "You expect a multi-week video course instead of a practical organization kit"
    ]
  },
  safetyAndLimitations: {
    badge: "Safety & Health Guidelines",
    title: "Responsible Use & Educational Purpose",
    subtitle: "Complete transparency regarding the strictly educational and organizational nature of this kit.",
    disclaimerBoxTitle: "Important Health & Safety Notice",
    disclaimerBoxText: "This material is intended exclusively for educational and organizational purposes. It does not replace clinical evaluation, diagnosis, guidance, or treatment provided by a pediatrician or qualified healthcare professional. If you have any concerns about your baby's health or in the event of an emergency, seek immediate medical attention.",
    points: [
      "Every baby develops at their own unique pace and has individual care requirements.",
      "If your baby shows any concerning signs or symptoms, contact your pediatrician. In an emergency, seek medical care immediately.",
      "The guidelines in this kit are based on general everyday care and organization best practices."
    ]
  },
  guarantee: {
    badge: "Risk-Free Purchase",
    title: "7-Day Money-Back Guarantee",
    desc: "If this kit does not make your newborn days feel more organized and prepared, simply contact us within 7 days for a 100% refund.",
    refundPolicyLinkText: "[VIEW REFUND POLICY]",
    features: [
      "7-day evaluation period from purchase date",
      "Quick and hassle-free request via email support",
      "Full refund processed according to stated terms"
    ]
  },
  faq: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about the BABY90 Newborn Organization Kit.",
    items: [
      {
        question: "How and when do I receive the BABY90 Kit?",
        answer: "Immediately after completing your $9.99 one-time payment, you will get instant download access on the screen, and a copy will be delivered directly to your email inbox."
      },
      {
        question: "What is the format of the kit?",
        answer: "The kit is delivered as high-resolution, beautifully formatted digital PDF documents optimized for reading on smartphones, tablets, and computers, as well as printing at home."
      },
      {
        question: "Can I print the checklists and daily trackers?",
        answer: "Yes! All trackers, checklists, and question sheets are formatted in standard A4 size for easy printing on any home or office printer."
      },
      {
        question: "Is this kit useful if my baby is already born?",
        answer: "Yes! The kit is designed to support parents throughout the entire 0 to 90 day window (birth to 3 months), whether you are pregnant or already holding your newborn."
      },
      {
        question: "Does it cover breastfeeding and formula feeding?",
        answer: "Yes. All daily tracking logs feature neutral, versatile formats suitable for exclusive breastfeeding, formula, or combination feeding."
      },
      {
        question: "Does this replace my pediatrician?",
        answer: "No. This kit is strictly organizational and educational. It helps you collect and organize daily observations to discuss with your doctor, but never replaces clinical care."
      },
      {
        question: "How does the 7-day guarantee work?",
        answer: "If you feel the kit did not help organize your newborn routine, simply email support within 7 days of purchase for a prompt refund."
      },
      {
        question: "Can both parents (mom and dad) use the kit?",
        answer: "Yes, absolutely! The kit is specifically crafted for both moms and dads to print, share, and divide daily tasks and nighttime feeds effortlessly without miscommunication."
      },
      {
        question: "Is this a subscription or a one-time payment?",
        answer: "It is a 100% one-time payment of $9.99. There are no recurring fees or hidden charges."
      }
    ]
  },
  ctaSection: {
    avatarBadge: "Made for Moms & Dads • First-Time Parents",
    title: "Get Organized for Your Baby’s First 90 Days",
    subtitle: "Get instant access to your complete newborn organization system — checklists, trackers, and pediatrician prep ready for both moms and dads in minutes.",
    price: "$9.99",
    priceDetails: "One-time payment — no recurring subscription • Instant digital access",
    button: "Get My BABY90 Kit — $9.99",
    securityText: "Guaranteed Secure Checkout via Hotmart"
  },
  medicalDisclaimer: {
    title: "Important Legal & Medical Disclaimer",
    text: "This material is intended exclusively for educational and organizational purposes. It is not intended to substitute professional medical evaluation, diagnosis, counseling, or treatment from a pediatrician or certified healthcare provider. In case of any doubt regarding your baby's health or in an emergency, contact emergency medical services immediately."
  },
  footer: {
    copyright: "BABY90 — The First 90 Days Newborn Organization Kit.",
    rights: "All rights reserved.",
    digitalProductNotice: "Digital organization product delivered in PDF format."
  },
  checkout: {
    title: "Complete Your Order — BABY90 Kit",
    subtitle: "Instant digital access to the complete newborn organization kit.",
    price: "$9.99",
    summaryTitle: "Included with your BABY90 Kit order:",
    includedItems: [
      "BABY90 Complete Organization Guide (85+ pages)",
      "Hospital Bag Printable Checklist",
      "Baby Shopping & Budget Checklist",
      "Feeding & Diaper Daily Tracker Sheet",
      "Sleep Routine & 7-Night Log",
      "Pediatrician Questions & Visit Prep",
      "Important Information Quick Reference",
      "7-Day Money-Back Guarantee"
    ],
    guaranteeText: "100% secure checkout backed by our 7-day refund guarantee.",
    payCard: "Credit / Debit Card",
    payPaypal: "PayPal",
    form: {
      emailLabel: "Your Email Address (for Kit delivery)",
      emailPlaceholder: "your.email@example.com",
      nameLabel: "Full Name",
      namePlaceholder: "Full Name",
      cardLabel: "Card Number",
      expLabel: "Expiration (MM/YY)",
      cvcLabel: "CVC",
      submitBtn: "Get My BABY90 Kit — $9.99",
      processing: "Processing your order securely..."
    },
    success: {
      title: "Access Unlocked!",
      message: "Thank you for purchasing the BABY90 Kit. Your files are ready for download below and have been sent to your email.",
      downloadBtn: "Download Complete Kit Now",
      closeBtn: "Close Window"
    }
  }
};
