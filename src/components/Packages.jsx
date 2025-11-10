import { Star, ShieldCheck, Plane } from "lucide-react";

const primary = "#660033";

const packages = [
  {
    name: "Umrah Premium 9 Hari",
    price: "$2,499",
    perks: ["Hotel bintang 5 dekat Masjidil Haram", "Pembimbing ustadz bersanad", "Visa & handling"],
  },
  {
    name: "Umrah Regular 12 Hari",
    price: "$1,899",
    perks: ["Hotel bintang 4", "Ziarah Madinah lengkap", "Makan 3x sehari"],
  },
  {
    name: "Haji Plus 26 Hari",
    price: "$7,900",
    perks: ["Tenda Mina & Arafah ber-AC", "Muthawwif berpengalaman", "Bus VIP"],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              Paket Rekomendasi
            </h2>
            <p className="text-gray-600">Pilihan yang dirancang untuk kenyamanan ibadah Anda.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
            <ShieldCheck className="text-emerald-600" size={18} />
            Terlisensi resmi & terpercaya
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.name} className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <Plane className="text-gray-400" />
              </div>
              <div className="mt-2 text-3xl font-semibold" style={{ color: primary }}>{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <Star size={16} className="mt-0.5 text-yellow-500" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <button
                  className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-white"
                  style={{ backgroundColor: primary }}
                >
                  Pesan Sekarang
                </button>
                <button className="flex-1 rounded-full border px-4 py-2 text-sm font-medium hover:bg-gray-50">
                  Detail Paket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
