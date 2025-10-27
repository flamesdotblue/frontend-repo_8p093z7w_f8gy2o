import { Droplet, Shield, Wrench, Home, Factory } from 'lucide-react';

const solutions = [
  {
    icon: Droplet,
    title: 'RO + UV/UF Purifiers',
    desc: 'Smart, multi‑stage drinking water systems that remove sediments, dissolved salts, and microbes for crisp, safe water.'
  },
  {
    icon: Home,
    title: 'Whole‑house Filtration',
    desc: 'Centralized filtration for baths, kitchens, and appliances—reduce hardness, odor, and stains throughout your home.'
  },
  {
    icon: Factory,
    title: 'Commercial & Industrial RO',
    desc: 'High‑capacity units for cafes, restaurants, hospitals, labs, and manufacturing with custom TDS targets.'
  },
  {
    icon: Wrench,
    title: 'Service & AMC',
    desc: 'Professional installation, filter replacement, membrane cleaning, and annual maintenance contracts.'
  },
  {
    icon: Shield,
    title: 'Water Quality Testing',
    desc: 'On‑site testing and system recommendations based on TDS, hardness, and microbiological benchmarks.'
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-20">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.16),transparent_65%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Solutions for Kerala’s water</h2>
          <p className="mt-3 text-slate-600">From compact purifiers to large‑scale plants, we engineer systems for municipal, borewell, and mixed sources.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <article key={s.title} className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 p-6 backdrop-blur-xl">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-500/10 blur-2xl" />
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/30">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
