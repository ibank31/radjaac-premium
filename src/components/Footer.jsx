import { SITE_DATA } from "../constants/siteData";

const contactItems = [
  {
    label: "WhatsApp",
    value: "+62 882-0082-46099",
    href: SITE_DATA.whatsappUrl,
  },
  {
    label: "Email",
    value: "info@radjaac.com",
    href: "mailto:info@radjaac.com",
  },
  {
    label: "Alamat",
    value: "Purwokerto, Banyumas",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.025] p-5 shadow-[0_24px_70px_rgba(2,8,23,0.22)] sm:p-7 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <img
                  src={SITE_DATA.logoUrl}
                  alt={SITE_DATA.businessName}
                  className="h-14 w-14 object-contain"
                />

                <div>
                  <h3 className="text-xl font-bold tracking-[-0.02em] text-white">{SITE_DATA.businessName}</h3>
                  <p className="text-sm text-white/55">Dealer AC multi-brand Purwokerto</p>
                </div>
              </div>

              <p className="mb-5 max-w-2xl text-sm leading-7 text-white/60">
                Layanan instalasi, service, dan penjualan AC untuk rumah, kantor, toko, dan bisnis area Purwokerto, Banyumas, dan sekitarnya.
              </p>

              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/80">Area Layanan</h4>
                <div className="flex flex-wrap gap-2">
                  {SITE_DATA.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-white/60"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/80">Kontak</h4>
              <div className="space-y-3">
                {contactItems.map((item) => {
                  const content = (
                    <>
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">{item.label}</span>
                      <span className="mt-1 block text-sm font-semibold text-white/80">{item.value}</span>
                    </>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="block rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 transition hover:border-cyan-300/30 hover:bg-cyan-300/5"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/5 pt-5 text-center text-xs text-white/35 sm:text-sm">
            © 2026 RADJA AC Purwokerto. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
