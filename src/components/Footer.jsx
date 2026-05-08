export default function Footer() {
  return (
    <>
      {/* SEO LOCAL SECTION */}
      <section className="px-6 py-14 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <img
                src="/logo-radjaac.png"
                alt="RADJA AC"
                className="w-14"
              />

              <div>
                <h3 className="font-bold text-xl">RADJA AC</h3>
                <p className="text-white/60 text-sm">
                  Dealer & Service AC Purwokerto
                </p>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed text-sm">
              RADJA AC Purwokerto melayani penjualan AC, instalasi AC,
              service AC, maintenance AC, cuci AC, bongkar pasang AC,
              hingga konsultasi kebutuhan pendingin ruangan untuk rumah,
              kantor, cafe, toko, dan proyek komersial.
            </p>
          </div>

          {/* AREA */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              Area Layanan
            </h3>

            <div className="grid grid-cols-2 gap-3 text-white/60 text-sm">
              <div>Purwokerto</div>
              <div>Banyumas</div>

              <div>Sokaraja</div>
              <div>Ajibarang</div>

              <div>Purbalingga</div>
              <div>Cilacap</div>

              <div>Banjarnegara</div>
              <div>Baturraden</div>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              Kontak
            </h3>

            <div className="space-y-4 text-white/60 text-sm">
              <div>
                WhatsApp:
                <br />
                0882-0082-46099
              </div>

              <div>
                Email:
                <br />
                info@radjaac.com
              </div>

              <div>
                Purwokerto, Banyumas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COPYRIGHT */}
      <footer className="border-t border-white/5 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <div>
            © 2026 RADJA AC Purwokerto. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition">
              Home
            </a>

            <a href="#" className="hover:text-white transition">
              Layanan
            </a>

            <a href="#" className="hover:text-white transition">
              Produk
            </a>

            <a href="#" className="hover:text-white transition">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
