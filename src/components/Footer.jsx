import { Link, useLocation } from "react-router-dom";
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

const seoLinks = [
  { label: "Jual AC Purwokerto", to: "/jual-ac-purwokerto" },
  { label: "Katalog AC", to: "/katalog" },
  { label: "AC Split Rumah", to: "/katalog/ac-split-rumah" },
  { label: "AC Inverter", to: "/katalog/ac-inverter" },
  { label: "AC Low Watt", to: "/katalog/ac-low-watt" },
  { label: "AC Kantor & Komersial", to: "/katalog/ac-kantor-komersial" },
  { label: "Daikin Purwokerto", to: "/brand/daikin" },
  { label: "Gree Purwokerto", to: "/brand/gree" },
  { label: "Midea Purwokerto", to: "/brand/midea" },
  { label: "Hisense Purwokerto", to: "/brand/hisense" },
  { label: "Sansui Purwokerto", to: "/brand/sansui" },
  { label: "Brand AC Lainnya", to: "/brand/lainnya" },
];

const areaSeoLinks = [
  { label: "Jual AC Banyumas", to: "/jual-ac-banyumas" },
  { label: "Jual AC Sokaraja", to: "/jual-ac-sokaraja" },
  { label: "Jual AC Ajibarang", to: "/jual-ac-ajibarang" },
  { label: "Jual AC Wangon", to: "/jual-ac-wangon" },
  { label: "Jual AC Cilongok", to: "/jual-ac-cilongok" },
  { label: "Jual AC Jatilawang", to: "/jual-ac-jatilawang" },
];

function getAreaSeoLinks(pathname) {
  if (!pathname.startsWith("/jual-ac-")) return [];

  return areaSeoLinks.filter((item) => item.to !== pathname);
}

export default function Footer() {
  const { pathname } = useLocation();
  const contextualAreaLinks = getAreaSeoLinks(pathname);

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

        {contextualAreaLinks.length > 0 ? (
          <div className="mt-8 border-t border-white/10 pt-6">
            <h4 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/75">Halaman Area RADJA AC</h4>
            <nav className="flex flex-wrap justify-center gap-2 text-center text-xs sm:text-sm" aria-label="Halaman area RADJA AC">
              {contextualAreaLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.04] px-3 py-1.5 text-cyan-100/70 transition hover:border-cyan-300/35 hover:text-cyan-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}

        <div className="mt-8 border-t border-white/10 pt-6">
          <h4 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/75">Link Penting</h4>
          <nav className="flex flex-wrap justify-center gap-2 text-center text-xs sm:text-sm">
            {seoLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-white/50 transition hover:border-cyan-300/30 hover:text-cyan-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-center text-xs text-white/30 sm:text-sm">
          © 2026 RADJA AC Purwokerto. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
