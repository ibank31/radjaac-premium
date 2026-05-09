import { SITE_DATA } from "../constants/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr] gap-12 mb-8">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={SITE_DATA.logoUrl}
                alt={SITE_DATA.businessName}
                className="w-12"
              />

              <div>
                <h3 className="font-bold text-lg">{SITE_DATA.businessName}</h3>
                <p className="text-white/60 text-sm">
                  Service AC Purwokerto Terpercaya
                </p>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed text-sm mb-4">
              Layanan profesional untuk semua kebutuhan AC Anda di Purwokerto dan Banyumas.
            </p>

            {/* AREA COVERAGE */}
            <div>
              <h4 className="font-semibold text-white mb-3">Area Layanan</h4>
              <div className="grid grid-cols-2 gap-2 text-white/60 text-sm">
                {SITE_DATA.serviceAreas.map((area) => (
                  <div key={area}>{area}</div>
                ))}
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="font-semibold text-white mb-4">Layanan</h4>
            <div className="space-y-2 text-white/60 text-sm">
              <a href="/" className="block hover:text-white transition">Home</a>
              <a href="/service-ac-purwokerto" className="block hover:text-white transition">Service AC</a>
              <a href="/cuci-ac-purwokerto" className="block hover:text-white transition">Cuci AC</a>
              <a href="/instalasi-ac-banyumas" className="block hover:text-white transition">Instalasi AC</a>
              <a href="/tentang-kami" className="block hover:text-white transition">Tentang Kami</a>
              <a href="/kontak" className="block hover:text-white transition">Kontak</a>
              <a href="/portfolio" className="block hover:text-white transition">Portfolio</a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kontak</h4>
            <div className="space-y-3 text-white/60 text-sm">
              <div>
                <div className="font-medium text-white">WhatsApp</div>
                <a href="https://wa.me/628820008246099" className="hover:text-cyan-300 transition">0882-0082-46099</a>
              </div>

              <div>
                <div className="font-medium text-white">Email</div>
                <a href="mailto:info@radjaac.com" className="hover:text-cyan-300 transition">info@radjaac.com</a>
              </div>

              <div>
                <div className="font-medium text-white">Alamat</div>
                <div>Purwokerto, Banyumas</div>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/5 pt-6 text-center text-sm text-white/40">
          © 2026 RADJA AC Purwokerto. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
