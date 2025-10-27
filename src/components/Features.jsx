import { Shield, Wrench, Home, MapPin } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Safe and certified purification',
    desc: 'Multi‑stage RO + UV + UF filtration engineered for Kerala’s water profiles with food‑grade components.'
  },
  {
    icon: Wrench,
    title: 'Expert installation & AMC',
    desc: 'End‑to‑end setup, filter replacements, and annual maintenance to keep water quality consistent.'
  },
  {
    icon: Home,
    title: 'Homes and commercial',
    desc: 'Tailored systems for apartments, villas, cafes, hospitals, and industries—small to large capacity.'
  },
  {
    icon: MapPin,
    title: 'Kerala‑wide service network',
    desc: 'Responsive support across major districts with quick turnaround on service requests.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[24rem] bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.18),transparent_65%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Why Future Water Systems</h2>
          <p className="mt-3 text-slate-600">Reliable purification built for local water conditions, clean aesthetics, and service you can count on.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.title} className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/40 p-6 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-400/10 blur-2xl" />
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/30">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
