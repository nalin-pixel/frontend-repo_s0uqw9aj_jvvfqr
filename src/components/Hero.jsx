import Spline from "@splinetool/react-spline";

const primary = "#660033";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white/0 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Menata Hati Tour & Travel
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/80">
            Perjalanan Haji & Umrah yang spiritual, modern, dan terpercaya.
            Pilih tanggal, paket, dan layanan sesuai kebutuhan Anda.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#dates"
              className="rounded-full px-6 py-3 text-sm font-medium text-white shadow-lg"
              style={{ backgroundColor: primary }}
            >
              Pilih Tanggal Keberangkatan
            </a>
            <a
              href="#packages"
              className="rounded-full px-6 py-3 text-sm font-medium bg-white/10 text-white backdrop-blur border border-white/20"
            >
              Lihat Paket
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
