import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DateSelector from "./components/DateSelector";
import Packages from "./components/Packages";
import WhyUs from "./components/WhyUs";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <DateSelector />
        <Packages />
        <WhyUs />

        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#f1e6ec] bg-[#f1e6ec]/50 p-8">
              <h2 className="text-2xl font-semibold">Butuh Bantuan Merencanakan Perjalanan?</h2>
              <p className="mt-2 text-slate-700">
                Hubungi kami untuk konsultasi paket, ketersediaan, dan promo terbaru.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#660033] px-5 py-2.5 text-white shadow hover:shadow-md"
                >
                  WhatsApp Kami
                </a>
                <a
                  href="mailto:cs@menatahati.travel"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-[#660033] border border-[#f1e6ec]"
                >
                  Email Layanan
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#f1e6ec] py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Menata Hati Tour & Travel</p>
          <div className="flex items-center gap-4">
            <a href="#packages" className="hover:text-[#660033]">Paket</a>
            <a href="#why" className="hover:text-[#660033]">Kenapa Kami</a>
            <a href="#contact" className="hover:text-[#660033]">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
