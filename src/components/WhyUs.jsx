import { Shield, HeartHandshake, Sparkles } from "lucide-react";

const primary = "#660033";

const features = [
  {
    icon: Shield,
    title: "Legal & Amanah",
    desc: "Perizinan lengkap, tim berpengalaman, dan dana aman terproteksi.",
  },
  {
    icon: HeartHandshake,
    title: "Pendampingan Penuh",
    desc: "Bimbingan ibadah step-by-step mulai manasik hingga kepulangan.",
  },
  {
    icon: Sparkles,
    title: "Pengalaman Premium",
    desc: "Hotel dekat masjid, transport nyaman, dan layanan responsif 24/7.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
          Mengapa Menata Hati?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          Kami merancang perjalanan yang spiritual, modern, dan terpercaya — fokus pada kenyamanan ibadah Anda.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{ backgroundColor: primary }}>
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
