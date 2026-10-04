// Rivellair Official Product Data
// Curated strictly from Official Brand Catalog & Flipbook (https://heyzine.com/flip-book/212537e4e8.html)

export const BRAND_INFO = {
  name: "Rivellair",
  subname: "L'Essence du Soin",
  tagline: "The Art of Care",
  domain: "rivellair.com",
  catalogUrl: "https://heyzine.com/flip-book/212537e4e8.html",
  catalogPdf: "./catalog.pdf",
  missionShort: "Care is more than a routine — it is a quiet ritual of confidence.",
  missionFull: "At Rivellair, we bring together luxury and performance, creating dermat-tested solutions for skin, hair, and scent—designed to deliver real, visible results. Trusted by professionals, crafted for everyone, each formula is made to elevate your everyday, effortlessly.",
  story: {
    origin: "Rivellair started with a simple idea—care should feel premium, work well, and still be accessible.",
    philosophy: "We create skincare, haircare, and fragrances that focus on real results, not just appearance. Everything is dermat-tested and made for everyday use—trusted by both professionals and individuals. No overpromises, no complications—just honest products that do what they’re meant to.",
    consistency: "What matters to us is consistency—products that feel right from the first use and continue to deliver over time. Whether it’s on a salon shelf or part of your daily routine, Rivellair is made to fit in effortlessly and perform without compromise."
  },
  commitments: [
    { title: "Dermat-Tested", desc: "Rigorous dermatological testing ensuring real visible results." },
    { title: "Hair, Skin & Scent", desc: "Holistic formulations crafted for professional and everyday rituals." },
    { title: "Trusted by Salons", desc: "Performance-driven formulas adopted by premier salon professionals." },
    { title: "Honest Formulations", desc: "No overpromises, no complications—just honest products that work." }
  ]
};

// ONLY products mentioned in the catalog.
// ONLY prices mentioned in the catalog (Pages 5, 6, 7, 8).
// All other catalog items have priceINR: null (no price mentioned in catalog).
export const PRODUCTS = [
  // ================= PERFUMES / FRAGRANCES (FROM BRAND PHILOSOPHY) =================
  {
    id: "rivellair-fragrance-essence",
    name: "Rivellair — L'Essence du Soin",
    category: "perfume",
    badge: "Signature Debut",
    concentration: "Eau de Parfum",
    volume: "100 ml / 3.4 FL. OZ.",
    priceINR: null, // No price mentioned in catalog
    tagline: "The Art of Care — Artisanal Fragrance Debut",
    description: "Born from our founding philosophy: care is more than a routine, it is a quiet ritual of confidence. Formulated with rare natural botanicals, aged woods, and delicate golden resins to deliver an enduring, intimate aura.",
    image: "./assets/images/hero-perfume.jpg",
    pyramid: {
      top: "Bergamot Zest, Pink Peppercorn, Solar Citrus",
      heart: "Aged Sandalwood, Jasmine Sambac, Warm Amber Accord",
      base: "Golden Cedarwood, Clean Cashmere, Natural Balsam"
    },
    metrics: {
      longevity: "12+ Hours (Extrait Longevity)",
      sillage: "Radiant & Refined",
      gender: "Universal Elegance",
      season: "Year-Round Signature"
    },
    mood: "Quiet Confidence • Serene • Earthy Luxury",
    highlights: ["Dermat-Tested", "Artisanal Distillation", "Signature Brand Scent"],
    inCatalog: true,
    catalogPage: "Page 1 & 2"
  },

  // ================= HAIR CARE (OFFICIAL CATALOG PAGES 5-8 WITH EXACT MRP) =================
  {
    id: "purifine-shampoo",
    name: "Purifine Shampoo 250 ml",
    category: "haircare",
    badge: "Catalog Page 5",
    volume: "250 ml",
    priceINR: 599, // MRP. 599/- on Page 5
    tagline: "Pure Canvas — Deep Clarifying Scalp Detox",
    description: "Every great transformation begins with a clean canvas. Purifine isn't just a wash; it’s a detox for hair weighed down by pollution, hard water, and styling buildup. It breathes life back into the scalp, preparing the hair to drink in nourishment.",
    image: "./assets/images/haircare.jpg",
    benefits: [
      "Deeply clarifies while preserving the hair’s essential moisture.",
      "Prepares the cuticle for maximum treatment absorption.",
      "Eliminates dullness caused by environmental residue."
    ],
    howToUse: "Apply to wet hair. Massage into the scalp for 2 minutes to allow the purifying agents to work. Rinse thoroughly. Ideal as a pre-service detox or a weekly deep-clean.",
    mood: "Clarifying • Purifying • Restorative",
    highlights: ["MRP ₹599/-", "Removes Excess Oil & Pollutants", "250 ml / 8.45 FL. OZ."],
    inCatalog: true,
    catalogPage: "Page 5"
  },
  {
    id: "keratin-treatment",
    name: "Keratin Treatment 250 ml",
    category: "haircare",
    badge: "Catalog Page 6",
    volume: "250 ml",
    priceINR: 4999, // MRP. 4999/- on Page 6
    tagline: "The Structural Architect — Rebuild From The Inside Out",
    description: "This is the ultimate internal repair system. Our Keratin Treatment targets the 'gaps' in the hair fiber caused by heat and chemical stress, rebuilding the strand from the inside out. It transforms rebellious frizz into a mirror-like shine, giving the hair a 'liquid-silk' finish that lasts for weeks.",
    image: "./assets/images/haircare.jpg",
    benefits: [
      "Eliminates up to 90% of frizz and tames unmanageable volume.",
      "Infuses high-definition shine and a velvet-soft texture.",
      "Significantly reduces daily styling and blow-dry time."
    ],
    howToUse: "After cleansing with Purifine, apply section by section. Leave in for the professional duration (typically 20–30 mins). Blow-dry and seal with a flat iron to lock the keratin into the hair’s core.",
    mood: "Transformative • Liquid Silk • Salon Grade",
    highlights: ["MRP ₹4,999/-", "Keratin Protein Complex", "The Science of Smooth"],
    inCatalog: true,
    catalogPage: "Page 6"
  },
  {
    id: "keratin-shampoo",
    name: "Keratin Shampoo 250 ml",
    category: "haircare",
    badge: "Catalog Page 7",
    volume: "250 ml",
    priceINR: 899, // MRP. 899/- on Page 7
    tagline: "The Daily Fortifier — Sulfate-Free Micro-Protein Care",
    description: "Why let a salon-perfect look fade? Our Keratin Shampoo is a protective, sulfate-free embrace for your hair. It cleanses with extreme gentleness, depositing a micro-layer of protein with every wash to keep the hair structure strong and the treatment's smooth effect alive.",
    image: "./assets/images/haircare.jpg",
    benefits: [
      "Sulfate and Paraben-free to sustain treatment longevity.",
      "Reinforces the hair fiber against breakage.",
      "Maintains the 'just-stepped-out-of-the-salon' feel."
    ],
    howToUse: "Massage a small amount into wet hair, focusing on the mid-lengths to ends. Rinse with lukewarm water for the best results.",
    mood: "Gentle • Strengthening • Color-Safe",
    highlights: ["MRP ₹899/-", "Damage Healing", "For Daily Use After Treatment"],
    inCatalog: true,
    catalogPage: "Page 7"
  },
  {
    id: "keratin-conditioner",
    name: "Keratin Conditioner 250 ml",
    category: "haircare",
    badge: "Catalog Page 8",
    volume: "250 ml",
    priceINR: 899, // MRP. 899/- on Page 8
    tagline: "The Silken Sealant — Instant Slip & Cuticle Shield",
    description: "The final touch of luxury that locks it all in. This conditioner acts as a protective shield, smoothing the cuticle and trapping moisture deep within the strand. It provides that 'instant slip,' making detangling effortless while leaving a weightless, high-gloss finish.",
    image: "./assets/images/haircare.jpg",
    benefits: [
      "Instantly detangles and softens even the coarsest hair.",
      "Provides a high-definition glow and environmental protection.",
      "Ensures a bounce and flow that lasts all day."
    ],
    howToUse: "Massage a small amount into wet hair, focusing on the mid-lengths to ends. Rinse with lukewarm water for the best results.",
    mood: "Silkening • Detangling • Weightless Gloss",
    highlights: ["MRP ₹899/-", "Instant Slip Action", "Cuticle Protection"],
    inCatalog: true,
    catalogPage: "Page 8"
  },

  // ================= EXTENDED HAIR CARE (CATALOG PAGE 10 - NO PRICES IN CATALOG) =================
  {
    id: "spa-shampoo-conditioner",
    name: "Spa Shampoo & Spa Conditioner 500 ml",
    category: "haircare",
    badge: "Catalog Page 10",
    volume: "500 ml",
    priceINR: null, // No price mentioned in catalog
    tagline: "Professional Salon Spa Wash & Conditioning Care",
    description: "Large-format salon grade formulations designed for backbar salon services and deep hair restoration rituals. Enriched with botanical moisturizers to replenish stressed locks.",
    image: "./assets/images/haircare.jpg",
    benefits: [
      "Deep moisture balancing for salon treatments.",
      "Available in 500 ml professional size.",
      "Gentle everyday cleansing for all hair types."
    ],
    howToUse: "Use as part of salon backbar services or deep home restoration.",
    mood: "Salon Professional • Restorative",
    highlights: ["Mentioned in Catalog Page 10", "500 ml Salon Size"],
    inCatalog: true,
    catalogPage: "Page 10"
  },
  {
    id: "hair-spa-botox-treatments",
    name: "Hair Spa & Botox Treatment Rituals",
    category: "haircare",
    badge: "Catalog Page 10",
    volume: "Professional Set",
    priceINR: null, // No price mentioned in catalog
    tagline: "Complete Treatment: Hair Spa Cream, Shampoo & Conditioner",
    description: "Comprehensive salon treatment kits from the Rivellair Hair Care portfolio. Hair Spa includes { Hair Spa Cream | Shampoo | Conditioners }. Botox Treatment includes { Purifying Shampoo | Treatment | Shampoo | Conditioner }.",
    image: "./assets/images/haircare.jpg",
    benefits: [
      "Complete multi-step professional salon treatment protocol.",
      "Targets deep cellular fiber repair and intensive smoothing.",
      "Dermat-tested for professional reliability."
    ],
    howToUse: "Follow professional salon step-by-step application protocol.",
    mood: "Intensive • Salon Exclusive",
    highlights: ["Mentioned in Catalog Page 10", "Full Ritual Protocols"],
    inCatalog: true,
    catalogPage: "Page 10"
  },
  {
    id: "argan-oil",
    name: "Argan Oil",
    category: "haircare",
    badge: "Catalog Page 10",
    volume: "Catalog Line",
    priceINR: null, // No price mentioned in catalog
    tagline: "Pure Liquid Gold Nourishment & Thermal Shine",
    description: "Pure botanical argan oil formulation listed in the official Rivellair Hair Care collection. Provides lightweight thermal protection, smoothing, and mirror gloss.",
    image: "./assets/images/haircare.jpg",
    benefits: [
      "Instantly seals split ends and calms unruly flyaways.",
      "Provides natural thermal defense against heat styling.",
      "Non-greasy, fast-absorbing natural shine."
    ],
    howToUse: "Apply a few drops from mid-lengths to ends before heat styling or as a final finishing touch.",
    mood: "Nourishing • Silkening",
    highlights: ["Mentioned in Catalog Page 10", "Pure Argan Essence"],
    inCatalog: true,
    catalogPage: "Page 10"
  },

  // ================= SKIN CARE (CATALOG PAGE 10 - NO PRICES IN CATALOG) =================
  {
    id: "face-wash-collection",
    name: "Face Wash Collection (Neem Aloe Vera, Orange, D-Tan)",
    category: "skincare",
    badge: "Catalog Page 10",
    volume: "Catalog Line",
    priceINR: null, // No price mentioned in catalog
    tagline: "Neem Aloe Vera • Orange Radiance • D-Tan Clarifying",
    description: "The complete facial cleansing lineup from Rivellair Skin Care. Features Neem Aloe Vera Face Wash for gentle purifying, Orange Face Wash for vitamin radiance, and D-Tan Face Wash for outdoor recovery.",
    image: "./assets/images/body-wax.jpg",
    benefits: [
      "Dermat-tested everyday botanical cleansers.",
      "Gently removes impurities without stripping essential moisture.",
      "Three targeted variants for diverse skin needs."
    ],
    howToUse: "Lather onto damp skin, massage in gentle circular motions for 60 seconds, and rinse with cool water.",
    mood: "Gentle • Balancing • Refreshing",
    highlights: ["Mentioned in Catalog Page 10", "Dermat-Tested"],
    inCatalog: true,
    catalogPage: "Page 10"
  },
  {
    id: "scrubs-massage-creams",
    name: "Scrubs & Massage Creams (Black Haldi, Gold, Diamond)",
    category: "skincare",
    badge: "Catalog Page 10",
    volume: "Catalog Line",
    priceINR: null, // No price mentioned in catalog
    tagline: "Black Haldi • Gold Radiance • Diamond Micro-Polish",
    description: "The official Rivellair professional facial skincare rituals from catalog page 10. Includes companion Scrubs and Massage Creams in Black Haldi (Kali Haldi), Gold, and Diamond for salon radiance.",
    image: "./assets/images/botanical-alchemy.jpg",
    benefits: [
      "Dual exfoliation and nourishing massage therapy.",
      "Formulated for real visible results and cellular glow.",
      "Trusted by professional salons and therapists."
    ],
    howToUse: "Apply scrub to damp skin, buff gently, rinse, and follow with matching rich massage cream.",
    mood: "Radiant • Earth Alchemy • Velvet Polish",
    highlights: ["Mentioned in Catalog Page 10", "Salon Facial Rituals"],
    inCatalog: true,
    catalogPage: "Page 10"
  },
  {
    id: "dtan-masks",
    name: "D-Tan Masks",
    category: "skincare",
    badge: "Catalog Page 10",
    volume: "Catalog Line",
    priceINR: null, // No price mentioned in catalog
    tagline: "Targeted Sun Recovery & Skin Tone Clarification",
    description: "Specialized clarifying facial masks from the Rivellair Skin Care collection designed to soothe sun-stressed skin and restore even luminosity.",
    image: "./assets/images/body-wax.jpg",
    benefits: [
      "Clarifies and cools sun-exposed skin.",
      "Restores even, radiant skin tone.",
      "Comforting botanical mask formulation."
    ],
    howToUse: "Apply even layer to cleansed face. Leave for 15 minutes, then wipe clean with a warm, damp cloth.",
    mood: "Clarifying • Cooling",
    highlights: ["Mentioned in Catalog Page 10", "Sun Recovery"],
    inCatalog: true,
    catalogPage: "Page 10"
  },

  // ================= BODY WAX (CATALOG PAGE 10 - NO PRICES IN CATALOG) =================
  {
    id: "cream-wax-flavors",
    name: "Cream Wax Collection (White & Dark Chocolate, Green Apple, Strawberry, Haldi)",
    category: "body",
    badge: "Catalog Page 10",
    volume: "Catalog Line",
    priceINR: null, // No price mentioned in catalog
    tagline: "White & Dark Chocolate • Green Apple • Strawberry • Haldi • Grapes • Fairness",
    description: "The complete artisanal Cream Wax series from catalog page 10. Formulated for smooth application, clean grip, and reduced skin trauma across all body areas.",
    image: "./assets/images/body-wax.jpg",
    benefits: [
      "Low melting temperature for maximum client comfort.",
      "Enriched with nourishing fruit and botanical extracts.",
      "Gentle formula suitable for all skin types."
    ],
    howToUse: "Heat in professional wax heater. Apply thin layer in direction of hair growth and remove with wax strip.",
    mood: "Comforting • Gourmet Scents • Smooth",
    highlights: ["Mentioned in Catalog Page 10", "Full Flavor Palette"],
    inCatalog: true,
    catalogPage: "Page 10"
  },
  {
    id: "rose-palette-wax-1kg",
    name: "Rose Palette Wax (1 kg)",
    category: "body",
    badge: "Catalog Page 10",
    volume: "1 kg (Salon Bulk)",
    priceINR: null, // No price mentioned in catalog
    tagline: "Professional Hot Film Wax Beads Infused with Rose",
    description: "Listed on page 10 of the official catalog. Premium 1 kg salon pack of peelable film wax designed for precision and sensitive skin areas without waxing strips.",
    image: "./assets/images/body-wax.jpg",
    benefits: [
      "1 kg professional salon format.",
      "Pliable polymer matrix that peels cleanly without snapping.",
      "Infused with soothing rose extract."
    ],
    howToUse: "Melt beads to honey consistency. Apply with wooden spatula, wait to set, peel back swiftly parallel to skin.",
    mood: "Botanical • Strip-Free Precision",
    highlights: ["Mentioned in Catalog Page 10", "1 kg Salon Pack"],
    inCatalog: true,
    catalogPage: "Page 10"
  },
  {
    id: "lipo-wax-gel-wax",
    name: "Lipo Wax & Gel Wax (White Chocolate, Red Wine, Blue Wax)",
    category: "body",
    badge: "Catalog Page 10",
    volume: "Catalog Line",
    priceINR: null, // No price mentioned in catalog
    tagline: "White Chocolate Lipo Wax • Red Wine Wax • Blue Wax",
    description: "Advanced depilatory systems from catalog page 10. Features White Chocolate Lipo Wax for sensitive skin and Red Wine & Blue Gel Waxes for superior hair grip and clean removal.",
    image: "./assets/images/body-wax.jpg",
    benefits: [
      "Lipo-soluble formula for minimal skin adhesion and redness.",
      "High-definition grip on stubborn short hairs.",
      "Leaves skin moisturized, calm, and silky smooth."
    ],
    howToUse: "Heat to optimal temperature and apply as directed for professional salon depilation.",
    mood: "Advanced Depilation • Salon Grade",
    highlights: ["Mentioned in Catalog Page 10", "Gel & Lipo Systems"],
    inCatalog: true,
    catalogPage: "Page 10"
  }
];

export const BOTANICAL_INGREDIENTS = [
  {
    name: "Keratin Protein Complex",
    origin: "Structural Hair Science",
    scent: "Clean, silky, salon-fresh",
    benefit: "Rebuilds internal strand gaps from heat and chemical stress, eliminating up to 90% of frizz.",
    category: "Hair Architecture"
  },
  {
    name: "Black Haldi (Kali Haldi)",
    origin: "Western Ghats, India",
    scent: "Earthy, warm, therapeutic",
    benefit: "Rare antioxidant botanical that neutralizes environmental damage and restores skin luminosity.",
    category: "Skin Care"
  },
  {
    name: "Pure Cocoa Butter",
    origin: "Artisanal Depilation",
    scent: "Gourmand white chocolate & velvety warmth",
    benefit: "Protects sensitive skin barriers during waxing, minimizing redness and irritation.",
    category: "Body Wax"
  },
  {
    name: "Damask Rose Essence",
    origin: "Rose Palette Wax Ritual",
    scent: "Romantic, calming, floral dew",
    benefit: "Natural anti-inflammatory that calms hair follicles and soothes delicate skin zones.",
    category: "Body Wax"
  },
  {
    name: "Neem & Organic Aloe Vera",
    origin: "Botanical Facial Care",
    scent: "Crisp, verdant, cooling herbal",
    benefit: "Gently purifies congested pores while locking in cutaneous hydration.",
    category: "Skin Care"
  }
];

export const REVIEWS = [
  {
    author: "Salon Director & Master Stylist",
    role: "Professional Salon Studio",
    city: "Mumbai",
    rating: 5,
    quote: "The Keratin Treatment and Purifine Shampoo have transformed our smoothing services. The liquid-silk shine lasts for weeks, and clients love that it is dermat-tested with no complications.",
    product: "Keratin Treatment & Purifine Shampoo"
  },
  {
    author: "Cosmetology Specialist",
    role: "Aesthetic Skin & Body Clinic",
    city: "Delhi",
    rating: 5,
    quote: "Rivellair's Rose Palette Wax and Black Haldi massage rituals deliver immediate, visible results. It feels truly premium, works reliably, and is trusted by our entire team.",
    product: "Rose Palette Wax & Black Haldi Polish"
  }
];
