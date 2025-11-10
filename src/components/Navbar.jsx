import { Plane, Phone, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-[#f1e6ec]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-semibold text-[#660033]">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#f1e6ec] text-[#660033]">
              <Plane size={18} />
            </span>
            <span className="text-lg tracking-tight">Menata Hati Tour & Travel</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-slate-600">
            <a href="#packages" className="hover:text-[#660033] transition-colors">Paket</a>
            <a href="#why" className="hover:text-[#660033] transition-colors">Kenapa Kami</a>
            <a href="#contact" className="hover:text-[#660033] transition-colors">Kontak</a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#660033] px-4 py-2 text-white shadow hover:shadow-md transition-shadow"
            >
              <Phone size={16} /> Konsultasi
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:text-[#660033]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#packages" className="block px-2 py-2 rounded hover:bg-[#f1e6ec]">Paket</a>
            <a href="#why" className="block px-2 py-2 rounded hover:bg-[#f1e6ec]">Kenapa Kami</a>
            <a href="#contact" className="block px-2 py-2 rounded hover:bg-[#f1e6ec]">Kontak</a>
            <a href="#contact" className="block px-2 py-2 rounded bg-[#660033] text-white text-center">Konsultasi</a>
          </div>
        )}
      </nav>
    </header>
  );
}
