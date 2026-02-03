import Image from "next/image";

type Product = {
  name: string;
  description: string;
  price: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type Stat = {
  label: string;
  value: string;
};

type PageCopy = {
  lang: "en" | "bg";
  nav: { home: string; science: string; results: string; products: string; faq: string; contact: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    badges: string[];
  };
  sections: {
    science: { title: string; bullets: string[] };
    benefits: { title: string; items: { title: string; text: string }[] };
    results: { title: string; subtitle: string; stats: Stat[] };
    program: { title: string; steps: { title: string; text: string }[] };
    products: { title: string; subtitle: string; note: string; items: Product[]; cta: string };
    testimonials: { title: string; items: { name: string; text: string }[] };
    faq: { title: string; items: FAQ[] };
    cta: { title: string; text: string; button: string };
  };
  footer: { disclaimer: string; address: string; email: string };
};

type Props = {
  copy: PageCopy;
};

const Section = ({ id, children }: { id?: string; children: React.ReactNode }) => (
  <section id={id} className="py-16 md:py-20">
    {children}
  </section>
);

export default function SitePage({ copy }: Props) {
  const productImages = [
    "/assets/product-nutra.avif",
    "/assets/product-oil.avif",
    "/assets/product-shampoo.avif",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/assets/logo.svg" alt="Pharma Hermetic" width={200} height={48} className="h-12 w-auto" />
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#home" className="hover:text-emerald-700">{copy.nav.home}</a>
            <a href="#science" className="hover:text-emerald-700">{copy.nav.science}</a>
            <a href="#results" className="hover:text-emerald-700">{copy.nav.results}</a>
            <a href="#products" className="hover:text-emerald-700">{copy.nav.products}</a>
            <a href="#faq" className="hover:text-emerald-700">{copy.nav.faq}</a>
            <a href="#contact" className="hover:text-emerald-700">{copy.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3 text-sm">
            <a
              className={`rounded-full px-3 py-1 ${copy.lang === "bg" ? "bg-emerald-600 text-white" : "text-slate-600"}`}
              href="/bg"
            >
              BG
            </a>
            <a
              className={`rounded-full px-3 py-1 ${copy.lang === "en" ? "bg-emerald-600 text-white" : "text-slate-600"}`}
              href="/en"
            >
              EN
            </a>
          </div>
        </div>
      </header>

      <main>
        <Section id="home">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                {copy.hero.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                {copy.hero.title}
              </h1>
              <p className="mt-5 text-lg text-slate-600">{copy.hero.subtitle}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#products"
                  className="rounded-full bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-600/30"
                >
                  {copy.hero.primaryCta}
                </a>
                <a
                  href="#science"
                  className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700"
                >
                  {copy.hero.secondaryCta}
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-xs text-slate-500">
                {copy.hero.badges.map((badge) => (
                  <span key={badge} className="rounded-full border border-slate-200 px-3 py-1">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white shadow-md">
                <Image
                  src="/assets/hero.bmp"
                  alt="Pharma Hermetic hair recovery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <p className="mt-6 text-sm text-slate-500">
                Official product imagery from Pharma Hermetic.
              </p>
            </div>
          </div>
        </Section>

        <Section id="science">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 className="text-3xl font-semibold">{copy.sections.science.title}</h2>
                <ul className="mt-6 space-y-4 text-slate-600">
                  {copy.sections.science.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {copy.sections.benefits.items.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 p-6">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="results">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white md:px-12">
              <h2 className="text-3xl font-semibold">{copy.sections.results.title}</h2>
              <p className="mt-4 text-slate-300">{copy.sections.results.subtitle}</p>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {copy.sections.results.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <p className="text-3xl font-semibold text-emerald-300">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <Image
                    src="/assets/before-elena.avif"
                    alt="Before treatment"
                    width={600}
                    height={420}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <Image
                    src="/assets/after-elena.avif"
                    alt="After treatment"
                    width={600}
                    height={420}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 md:grid-cols-3">
              {copy.sections.program.steps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-slate-200 p-6">
                  <p className="text-sm font-semibold text-emerald-600">Step {index + 1}</p>
                  <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="products">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold">{copy.sections.products.title}</h2>
                <p className="mt-3 text-slate-600">{copy.sections.products.subtitle}</p>
              </div>
              <a href="#contact" className="text-sm font-semibold text-emerald-600">
                {copy.sections.products.cta}
              </a>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {copy.sections.products.items.map((product, index) => (
                <div key={product.name} className="rounded-2xl border border-slate-200 p-6">
                  <div className="relative h-40 overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      src={productImages[index]}
                      alt={product.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900">{product.price}</span>
                    <button className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white">
                      {copy.hero.primaryCta}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-500">{copy.sections.products.note}</p>
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-semibold">{copy.sections.testimonials.title}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {copy.sections.testimonials.items.map((item) => (
                <div key={item.name} className="rounded-2xl border border-slate-200 p-6">
                  <p className="text-sm text-slate-600">“{item.text}”</p>
                  <p className="mt-4 text-sm font-semibold text-slate-900">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="faq">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-semibold">{copy.sections.faq.title}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {copy.sections.faq.items.map((item) => (
                <div key={item.question} className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 px-8 py-10 md:px-12">
              <h2 className="text-3xl font-semibold">{copy.sections.cta.title}</h2>
              <p className="mt-3 text-slate-600">{copy.sections.cta.text}</p>
              <a
                href="mailto:hello@pharmahermetic.bg"
                className="mt-6 inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white"
              >
                {copy.sections.cta.button}
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500">
          <p>{copy.footer.disclaimer}</p>
          <div className="mt-4 flex flex-col gap-1">
            <span>{copy.footer.address}</span>
            <span>{copy.footer.email}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
