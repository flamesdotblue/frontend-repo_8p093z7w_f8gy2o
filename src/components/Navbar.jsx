import { useState } from 'react';
import { Menu, X, Droplet } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <nav className="flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/60 to-blue-400/60 blur-md" />
                <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-white/90 text-cyan-600 shadow-md">
                  <Droplet className="h-5 w-5" />
                </div>
              </div>
              <span className="font-semibold tracking-tight text-slate-900/90 text-lg">Future Water Systems</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm text-slate-700/90">
              <a href="#solutions" className="hover:text-cyan-600 transition-colors">Solutions</a>
              <a href="#features" className="hover:text-cyan-600 transition-colors">Why Us</a>
              <a href="#about" className="hover:text-cyan-600 transition-colors">About</a>
              <a href="#contact" className="hover:text-cyan-600 transition-colors">Contact</a>
              <a href="#contact" className="ml-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-white shadow-lg shadow-cyan-600/30">Book Free Water Test</a>
            </div>

            <button
              className="md:hidden rounded-xl border border-white/20 bg-white/20 p-2 backdrop-blur hover:bg-white/30"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden border-t border-white/20">
              <div className="px-5 py-4 flex flex-col gap-3 text-slate-800/90">
                <a href="#solutions" className="rounded-xl bg-white/40 px-4 py-2">Solutions</a>
                <a href="#features" className="rounded-xl bg-white/40 px-4 py-2">Why Us</a>
                <a href="#about" className="rounded-xl bg-white/40 px-4 py-2">About</a>
                <a href="#contact" className="rounded-xl bg-white/40 px-4 py-2">Contact</a>
                <a href="#contact" className="mt-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-white">Book Free Water Test</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
