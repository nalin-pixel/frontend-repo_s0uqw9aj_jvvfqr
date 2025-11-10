import { Calendar, Users } from "lucide-react";
import { useState } from "react";

export default function DateSelector() {
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(1);

  return (
    <section id="date" className="relative z-10 -mt-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 rounded-2xl bg-white p-4 shadow-2xl border border-[#f1e6ec]">
          <div className="flex items-center gap-3 rounded-xl border border-[#f1e6ec] px-3 py-2">
            <Calendar className="text-[#660033]" size={18} />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent outline-none text-slate-700"
            />
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-[#f1e6ec] px-3 py-2">
            <Users className="text-[#660033]" size={18} />
            <input
              type="number"
              min={1}
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
              className="w-full bg-transparent outline-none text-slate-700"
            />
          </div>
          <button className="rounded-xl bg-[#660033] px-4 py-2 text-white shadow hover:shadow-md">
            Cek Ketersediaan
          </button>
        </div>
      </div>
    </section>
  );
}
