import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative my-20 overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-12 text-white">
          <div className="absolute inset-0">
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-600/40 to-blue-400/40 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-gradient-to-tr from-indigo-500/40 to-fuchsia-400/40 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <h3 className="text-2xl font-semibold sm:text-3xl">Book a free water quality check</h3>
              <p className="mt-2 max-w-xl text-slate-300">Tell us about your water source and location in Kerala. We’ll recommend the right solution and share a clear quote.</p>
            </div>
            <div className="flex items-end">
              <a
                href="#"
                className="group inline-flex w-full items-center justify-between gap-3 rounded-2xl bg-white px-5 py-4 text-slate-900 shadow-xl sm:max-w-sm"
              >
                <span>Start a conversation</span>
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mb-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200/60 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Future Water Systems. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-300">Terms</a>
            <a href="#" className="hover:text-slate-300">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
