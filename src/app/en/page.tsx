import SitePage from "@/components/SitePage";

const copy = {
  lang: "en",
  nav: {
    home: "Home",
    science: "Science",
    results: "Results",
    products: "Products",
    faq: "FAQ",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Hair Recovery Program",
    title: "Stimulate stronger, thicker hair with clinically tested peptide science",
    subtitle:
      "Pharma Hermetic SP55 combines targeted peptides, botanicals, and bioactive nutrients to support follicle health, reduce DHT impact, and restore density for men and women.",
    primaryCta: "Shop program",
    secondaryCta: "See the science",
    badges: ["Clinically tested", "Sterile, safe actives", "Dermatology inspired", "EU quality"],
  },
  sections: {
    science: {
      title: "The science behind SP55",
      bullets: [
        "10-peptide complex supports follicle stem cells for sustained regrowth.",
        "Botanical inhibitors reduce 5α-reductase to lower DHT activity.",
        "Biotin, caffeine, vitamins, and ginkgo nourish the scalp micro‑environment.",
      ],
    },
    benefits: {
      title: "Visible, measurable recovery",
      items: [
        {
          title: "DHT control",
          text: "Balances hormones that trigger thinning while protecting follicles from miniaturization.",
        },
        {
          title: "Scalp regeneration",
          text: "Sterile actives calm inflammation and improve circulation for healthier roots.",
        },
        {
          title: "Organic actives",
          text: "100% natural extracts paired with biotechnology for long‑term resilience.",
        },
        {
          title: "No harsh side effects",
          text: "Designed for daily use without the irritation common in aggressive regrowth products.",
        },
      ],
    },
    results: {
      title: "Clinically documented improvement",
      subtitle:
        "Lab testing with Bionos Biotech shows measurable gains in density and coverage within 56 days when used as directed.",
      stats: [
        { value: "+9.8%", label: "Higher density" },
        { value: "+9.2%", label: "More length" },
        { value: "+11.7%", label: "Wider coverage area" },
      ],
    },
    program: {
      title: "Your 3‑step recovery program",
      steps: [
        {
          title: "Prep & cleanse",
          text: "Gentle anti‑hair‑loss shampoo removes buildup and primes the scalp.",
        },
        {
          title: "Activate",
          text: "Targeted ampoules or lotion deliver peptides to the follicle root.",
        },
        {
          title: "Protect",
          text: "Nutrition and oil treatments strengthen new growth and reduce breakage.",
        },
      ],
    },
    products: {
      title: "Core program essentials",
      subtitle: "Featured products will sync here once WooCommerce access is added.",
      note: "Product images, variants, and pricing will be connected from the store API later.",
      cta: "Need wholesale or clinic pricing?",
      items: [
        {
          name: "SP55 Hair Recovery Ampoules",
          description: "Concentrated peptide therapy for targeted regrowth.",
          price: "From 101,70 €",
        },
        {
          name: "SP55 Supplement",
          description: "Nutrient support for hair, skin, and nails.",
          price: "From 31,70 €",
        },
        {
          name: "Anti‑Hair‑Loss Shampoo",
          description: "Daily cleansing with botanical DHT control.",
          price: "From 34,70 €",
        },
      ],
    },
    testimonials: {
      title: "Customer stories",
      items: [
        {
          name: "Maria P.",
          text: "My shedding reduced within weeks and my ponytail feels thicker again.",
        },
        {
          name: "Ivan T.",
          text: "The program is simple to follow and the scalp serum feels premium.",
        },
        {
          name: "Elena S.",
          text: "I finally see new baby hairs around my hairline after two months.",
        },
      ],
    },
    faq: {
      title: "Frequently asked",
      items: [
        {
          question: "How long before I see results?",
          answer: "Most users notice reduced shedding within 4–6 weeks and visible regrowth in 8–12 weeks with consistent use.",
        },
        {
          question: "Is it safe for sensitive scalps?",
          answer: "The program uses sterile, gentle actives without harsh irritants. Always patch test first.",
        },
        {
          question: "Can men and women use it?",
          answer: "Yes, the formula targets hormonal and stress‑related thinning in both genders.",
        },
        {
          question: "Do I need the full program?",
          answer: "For maximum results, combine shampoo + treatment + nutrition support. We can tailor a plan for you.",
        },
      ],
    },
    cta: {
      title: "Ready to start your recovery?",
      text: "Speak with our team for personalized guidance or clinic partnership options.",
      button: "Contact our experts",
    },
  },
  footer: {
    disclaimer:
      "This site is for informational purposes and does not replace medical advice. Individual results vary.",
    address: "Sofia, Bulgaria · EU distribution",
    email: "hello@pharmahermetic.bg",
  },
} as const;

export default function EnglishPage() {
  return <SitePage copy={copy} />;
}
