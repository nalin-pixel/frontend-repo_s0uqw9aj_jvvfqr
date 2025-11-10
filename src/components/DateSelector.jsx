import { Calendar, Users } from "lucide-react";
import { useState } from "react";

export default function DateSelector() {
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(1);

  return (
    <section id="date" className="relative z-10 -mt-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 rounded-xl bg-white p-4 shadow-lg border border-accent/40">
          <div className="flex items-center gap-3 rounded-lg border border-accent/40 px-3 py-2">
            <Calendar className="text-primary" size={18} />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent outline-none text-slate-700"
            />
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-accent/40 px-3 py-2">
            <Users className="text-primary" size={18} />
            <input
              type="number"
              min={1}
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
              className="w-full bg-transparent outline-none text-slate-700"
            />
          </div>
          <button className="rounded-lg bg-primary px-4 py-2 text-white shadow hover:shadow-md">
            Cek Ketersediaan
          </button>
        </div>
      </div>
    </section>
  );
}
