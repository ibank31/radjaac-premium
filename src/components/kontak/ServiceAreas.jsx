import { SITE_DATA } from "../../constants/siteData";
import SectionHeading from "../ui/SectionHeading";

export default function ServiceAreas() {
  return (
    <section className="rounded-[28px] sm:rounded-3xl border border-white/10 bg-slate-900/80 p-5 sm:p-8">
      <SectionHeading>Area Layanan</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-slate-200">
        {SITE_DATA.serviceAreas.map((area) => (
          <div
            key={area}
            className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3"
          >
            {area}
          </div>
        ))}
      </div>
    </section>
  );
}