export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.14),transparent_65%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/20 bg-white/60 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">About Future Water Systems</h2>
            <p className="mt-4 text-slate-600">
              We are a Kerala‑based water purification company focused on delivering reliable, long‑term solutions for homes and businesses. Our team combines engineering expertise with responsive service to ensure every drop meets stringent quality standards.
            </p>
            <p className="mt-3 text-slate-600">
              From site assessment and water testing to installation and AMC, we handle the complete lifecycle. Systems are designed around real‑world conditions—high TDS, hardness, salinity, and seasonal shifts—so you get consistent, great‑tasting water.
            </p>
          </div>
          <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-cyan-50 to-blue-50 p-8">
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-slate-500">Focus</dt>
                <dd className="mt-1 text-lg font-semibold text-slate-900">RO • UV/UF • Softeners • Whole‑house</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-500">Customers</dt>
                <dd className="mt-1 text-lg font-semibold text-slate-900">Homes, Cafes, Hospitals, Industry</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-500">Service</dt>
                <dd className="mt-1 text-lg font-semibold text-slate-900">Kerala coverage with quick support</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-500">Approach</dt>
                <dd className="mt-1 text-lg font-semibold text-slate-900">Design‑first, durable components</dd>
              </div>
            </dl>
            <div className="mt-8 rounded-2xl border border-cyan-200 bg-white/70 p-6">
              <h3 className="text-base font-semibold text-slate-900">Our promise</h3>
              <p className="mt-2 text-sm text-slate-600">Transparent recommendations, certified parts, and preventive care that keeps your system performing year‑round.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
