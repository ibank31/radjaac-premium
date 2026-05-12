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
    <footer className="border-t border-cyan-300/10 bg-[#020511] px-6 py-8 text-white lg:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.85fr_1.1fr] lg:gap-10">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <img
                src={SITE_DATA.logoUrl}
                alt={SITE_DATA.businessName}
                className="h-12 w-12 object-contain"
              />

              <div>
                <h3 className="text-xl font-bold tracking-[-0.02em] text-white">{SITE_DATA.businessName}</h3>
                <p className="text-sm text-white/50">Dealer AC Resmi Purwokerto &amp; Banyumas</p>
              </div>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/55">
              Penjualan AC original berbagai brand resmi, didukung konsultasi produk, instalasi rapi, dan layanan after-sales untuk area Purwokerto &amp; Banyumas.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/75">Kontak</h4>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {contactItems.map((item) => {
                const content = (
                  <div className="py-3">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">{item.label}</div>
                    <div className="mt-1 text-sm font-semibold text-white/75">{item.value}</div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="block transition hover:text-cyan-200"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/75">Area Layanan</h4>
            <div className="flex flex-wrap gap-2">
              {SITE_DATA.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs font-medium text-white/55"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-white/30 sm:text-sm">
          © 2026 RADJA AC Purwokerto. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
