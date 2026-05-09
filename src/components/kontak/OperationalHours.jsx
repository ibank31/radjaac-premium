import { SITE_DATA } from "../../constants/siteData";
import SectionHeading from "../ui/SectionHeading";

export default function OperationalHours() {
  return (
    <section className="rounded-[28px] sm:rounded-3xl border border-white/10 bg-slate-900/80 p-5 sm:p-8">
      <SectionHeading>Jam Operasional</SectionHeading>

      <div className="grid gap-4 text-slate-300 text-sm leading-relaxed">
        {SITE_DATA.operationalHours.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-950/70 p-4 sm:p-5"
          >
            <p className="text-white font-medium">
              {item.label}
            </p>

            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}