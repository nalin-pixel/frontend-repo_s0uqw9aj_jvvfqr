import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/mRmgf8hH1vC3t2kF/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
            Menata Hati Tour & Travel
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
            Perjalanan Hati yang Tenang, Layanan Yang Hangat
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Rencanakan umrah, haji, dan wisata halal Anda dengan pendampingan ramah,
            jadwal fleksibel, dan harga transparan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#packages" className="rounded-lg bg-primary px-5 py-2.5 text-white shadow hover:shadow-md">Lihat Paket</a>
            <a href="#contact" className="rounded-lg bg-white px-5 py-2.5 text-primary border border-accent/50 hover:border-primary/40">Konsultasi Gratis</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />
    </section>
  );
}
