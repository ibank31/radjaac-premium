import { SITE_DATA } from "../../constants/siteData";
import SectionHeading from "../ui/SectionHeading";

export default function AboutAreas() {
  return (
    <section>
      <SectionHeading>Area Layanan</SectionHeading>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SITE_DATA.serviceAreas.map((area) => (
          <div key={area} className="rounded-3xl border border-white/10 bg-slate-900/70 px-5 py-4 text-slate-200">
            {area}
          </div>
        ))}
      </div>
    </section>
  );
}