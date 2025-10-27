import { Shield, Zap, Globe, Layers } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Bank‑grade security',
    desc: 'Encrypted by default with continuous monitoring, compliance, and real‑time risk detection.'
  },
  {
    icon: Zap,
    title: 'Instant performance',
    desc: 'Blazing‑fast APIs and a globally distributed edge ensure sub‑second interactions everywhere.'
  },
  {
    icon: Globe,
    title: 'Global by design',
    desc: 'Multi‑currency, multi‑locale experiences that feel native in every market.'
  },
  {
    icon: Layers,
    title: 'Composable building blocks',
    desc: 'Pick what you need—from onboarding to payouts—then scale without redesigning the core.'
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
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Built for modern finance</h2>
          <p className="mt-3 text-slate-600">A refined system with the details sweated—clean surfaces, soft light, and gentle depth.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.title} className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/40 p-6 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-400/10 blur-2xl" />
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-600/30">
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
