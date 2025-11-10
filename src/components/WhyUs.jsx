import { ShieldCheck, Clock, Headphones } from "lucide-react";

export default function WhyUs() {
  const items = [
    {
      icon: <ShieldCheck className="text-[#660033]" size={20} />,
      title: "Legal & Aman",
      desc: "Izin resmi, administrasi transparan, dan perlindungan asuransi yang jelas.",
    },
    {
      icon: <Clock className="text-[#660033]" size={20} />,
      title: "Jadwal Fleksibel",
      desc: "Beragam keberangkatan untuk menyesuaikan waktu terbaik Anda.",
    },
    {
      icon: <Headphones className="text-[#660033]" size={20} />,
      title: "Pendampingan Penuh",
      desc: "Tim ramah siap membantu dari persiapan hingga kepulangan.",
    },
  ];

  return (
    <section id="why" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">Kenapa Memilih Kami</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-[#f1e6ec] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                {it.icon}
                <h3 className="text-lg font-semibold">{it.title}</h3>
              </div>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
