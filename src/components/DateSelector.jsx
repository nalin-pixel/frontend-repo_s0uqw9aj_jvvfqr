import { useMemo, useState } from "react";
import { Calendar, Check } from "lucide-react";

const primary = "#660033";

function monthKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

function generateMonths(count = 12) {
  const start = new Date();
  start.setDate(1);
  const months = [];
  for (let i = 0; i < count; i++) {
    const d = new Date(start.getFullYear(), start.getMonth() + i, 1);
    months.push({
      key: monthKey(d),
      label: d.toLocaleString("default", { month: "long", year: "numeric" }),
      date: d,
    });
  }
  return months;
}

export default function DateSelector({ onSelect }) {
  const months = useMemo(() => generateMonths(14), []);
  const [selected, setSelected] = useState(null);

  const handleSelect = (key) => {
    const m = months.find((x) => x.key === key);
    setSelected(key);
    onSelect?.(m);
  };

  return (
    <section id="dates" className="relative isolate">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: primary }}>
            <Calendar size={18} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              Pilih Tanggal Keberangkatan
            </h2>
            <p className="text-gray-600">Jadwalkan Haji atau Umrah sesuai rencana Anda.</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {months.map((m) => {
            const active = selected === m.key;
            return (
              <button
                key={m.key}
                onClick={() => handleSelect(m.key)}
                className={`group relative rounded-2xl border p-4 text-left transition shadow-sm hover:shadow-md bg-white ${
                  active ? "ring-2" : "ring-0"
                }`}
                style={{ borderColor: active ? primary : "#e5e7eb", boxShadow: active ? `0 0 0 4px ${primary}20` : undefined }}
                aria-pressed={active}
              >
                <div className="text-sm font-medium text-gray-900">{m.label}</div>
                <div className="mt-1 text-xs text-gray-500">Kuota tersedia</div>
                {active && (
                  <div
                    className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: primary }}
                    aria-hidden
                  >
                    <Check size={14} />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {selected && (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-gray-50 to-white p-4 ring-1 ring-gray-200">
            <div className="text-sm text-gray-700">
              Tanggal dipilih: <span className="font-semibold text-gray-900">{months.find((m) => m.key === selected)?.label}</span>
            </div>
            <a
              href="#packages"
              className="rounded-full px-5 py-2 text-sm font-medium text-white shadow-sm"
              style={{ backgroundColor: primary }}
            >
              Lihat Paket yang Tersedia
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
