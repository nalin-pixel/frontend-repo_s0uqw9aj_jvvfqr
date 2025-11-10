import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-[#f1e6ec] px-3 py-1 text-xs font-medium text-[#660033]">
            Menata Hati Tour & Travel
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-white drop-shadow">
            Perjalanan Hati yang Tenang, Layanan yang Hangat
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Rencanakan umrah, haji, dan wisata halal Anda dengan pendampingan ramah,
            jadwal fleksibel, dan harga transparan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#packages" className="rounded-lg bg-white px-5 py-2.5 text-[#660033] shadow hover:shadow-md">Lihat Paket</a>
            <a href="#contact" className="rounded-lg bg-[#660033] px-5 py-2.5 text-white border border-white/20">Konsultasi Gratis</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-white" />
    </section>
  );
}
