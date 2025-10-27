import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-20" id="home">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-x-10 -top-10 h-[32rem] rounded-[3rem] bg-gradient-to-tr from-cyan-300/20 via-blue-300/20 to-violet-300/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/50 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
            Kerala's trusted water purification specialist
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            Pure, healthy water for every home and business
          </h1>
          <p className="mt-4 max-w-xl text-base/7 text-slate-600 sm:text-lg/8">
            We design, install, and maintain advanced RO, UV, and whole‑house filtration systems tailored for Kerala’s water conditions—delivering safe, great‑tasting water every day.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#solutions" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 text-white shadow-lg shadow-cyan-600/30">
              Explore Solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className="rounded-full border border-slate-300/60 bg-white/70 px-6 py-3 text-slate-700 backdrop-blur hover:border-slate-400">
              Book a free water test
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20" />
        </div>
      </div>
    </section>
  );
}
