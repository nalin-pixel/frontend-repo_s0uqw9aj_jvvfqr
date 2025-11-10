import { Menu, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const primary = "#660033";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex h-16 items-center justify-between rounded-b-2xl bg-white/70 backdrop-blur-md shadow-sm ring-1 ring-black/5">
          <div className="flex items-center gap-3 pl-4">
            <div
              className="h-8 w-8 rounded-lg"
              style={{ backgroundColor: primary }}
              aria-hidden
            />
            <span className="font-semibold tracking-tight text-gray-900">
              Menata Hati Tour & Travel
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium pr-4">
            <a href="#packages" className="hover:text-gray-900 text-gray-600">Paket</a>
            <a href="#dates" className="hover:text-gray-900 text-gray-600">Jadwal</a>
            <a href="#why" className="hover:text-gray-900 text-gray-600">Mengapa Kami</a>
            <a href="#contact" className="hover:text-gray-900 text-gray-600">Kontak</a>
            <a
              href="#dates"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-white shadow-sm"
              style={{ backgroundColor: primary }}
            >
              <Phone size={16} />
              Konsultasi
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-3"
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl bg-white/80 backdrop-blur-md shadow ring-1 ring-black/5">
            <div className="flex flex-col p-4 text-sm">
              <a href="#packages" className="py-2 text-gray-700">Paket</a>
              <a href="#dates" className="py-2 text-gray-700">Jadwal</a>
              <a href="#why" className="py-2 text-gray-700">Mengapa Kami</a>
              <a href="#contact" className="py-2 text-gray-700">Kontak</a>
              <a
                href="#dates"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-white"
                style={{ backgroundColor: primary }}
              >
                <MapPin size={16} />
                Mulai Booking
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
