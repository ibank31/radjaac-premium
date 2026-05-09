import { Link } from "react-router-dom";
import { SITE_DATA } from "../constants/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={SITE_DATA.logoUrl}
                alt={SITE_DATA.businessName}
                className="w-12"
              />

              <div>
                <h3 className="font-bold text-lg">{SITE_DATA.businessName}</h3>
                <p className="text-white/60 text-sm">Dealer AC multi-brand Purwokerto</p>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed text-sm mb-4">
              Layanan profesional instalasi dan service AC untuk rumah, kantor, dan bisnis di Purwokerto Selatan, Banyumas, serta area sekitarnya.
            </p>

            <div>
              <h4 className="font-semibold text-white mb-3">Area Layanan</h4>
              <div className="grid grid-cols-2 gap-2 text-white/60 text-sm">
                {SITE_DATA.serviceAreas.map((area) => (
                  <div key={area}>{area}</div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Brand AC Populer</h4>
            <div className="space-y-2 text-white/60 text-sm">
              <Link to="/daikin-purwokerto" className="block hover:text-white transition">Daikin Purwokerto</Link>
              <Link to="/gree-purwokerto" className="block hover:text-white transition">Gree Purwokerto</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Layanan</h4>
            <div className="space-y-2 text-white/60 text-sm">
              <Link to="/instalasi-ac-banyumas" className="block hover:text-white transition">Instalasi AC</Link>
              <Link to="/service-ac-purwokerto" className="block hover:text-white transition">Service AC</Link>
              <Link to="/cuci-ac-purwokerto" className="block hover:text-white transition">Cuci AC</Link>
            </div>
          </div>

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
