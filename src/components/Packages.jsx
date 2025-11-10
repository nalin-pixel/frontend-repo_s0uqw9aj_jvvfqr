import { Star, ShieldCheck, Plane } from "lucide-react";

const packages = [
  {
    name: "Umrah Hemat",
    price: "Mulai 27 Jt",
    perks: ["Hotel bintang 3-4", "Pendampingan ibadah", "Transparansi biaya"],
  },
  {
    name: "Umrah Plus Turki",
    price: "Mulai 36 Jt",
    perks: ["City tour Istanbul", "Penerbangan nyaman", "Visa & asuransi"],
  },
  {
    name: "Haji Khusus",
    price: "Sesuai Kuota",
    perks: ["Manasik intensif", "Akomodasi premium", "Muthowif berpengalaman"],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Pilihan Paket</h2>
            <p className="text-slate-600 mt-1">Sesuaikan dengan kebutuhan perjalanan Anda.</p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-primary">
            <ShieldCheck size={20} />
            <span className="text-sm">Resmi & Terpercaya</span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <div key={p.name} className="rounded-xl border border-accent/50 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                <Star className="text-primary" size={18} />
              </div>
              <p className="mt-2 text-primary font-medium">{p.price}</p>
              <ul className="mt-4 space-y-2 text-slate-600 text-sm">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <Plane size={16} className="text-primary" /> {perk}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-block rounded-lg bg-primary px-4 py-2 text-white">Pilih Paket</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
