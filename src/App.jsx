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

        <section id="contact" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-accent/50 bg-accent/30 p-8">
              <h2 className="text-2xl font-semibold">Butuh Bantuan Merencanakan Perjalanan?</h2>
              <p className="mt-2 text-slate-700">
                Hubungi kami untuk konsultasi paket, ketersediaan, dan promo terbaru.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-white shadow hover:shadow-md"
                >
                  WhatsApp Kami
                </a>
                <a
                  href="mailto:cs@menatahati.travel"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-primary border border-accent/50"
                >
                  Email Layanan
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-accent/40 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Menata Hati Tour & Travel</p>
          <div className="flex items-center gap-4">
            <a href="#packages" className="hover:text-primary">Paket</a>
            <a href="#why" className="hover:text-primary">Kenapa Kami</a>
            <a href="#contact" className="hover:text-primary">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
