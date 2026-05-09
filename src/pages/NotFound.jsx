import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE_DATA } from '../constants/siteData';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Halaman Tidak Ditemukan | {SITE_DATA.businessName}</title>
        <meta name="description" content={`Halaman yang Anda cari tidak ditemukan. Kembali ke beranda ${SITE_DATA.businessName} untuk layanan AC profesional di Purwokerto dan Banyumas.`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div className="text-8xl font-black text-cyan-400 mb-4">404</div>
            <h1 className="text-3xl font-bold text-white mb-4">Halaman Tidak Ditemukan</h1>
            <p className="text-white/70 leading-relaxed">
              Maaf, halaman yang Anda cari tidak tersedia. Mungkin telah dipindahkan atau URL yang Anda masukkan salah.
            </p>
          </div>

          <div className="space-y-4">
            <Link
              to="/"
              className="block w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Kembali ke Beranda
            </Link>

            <a
              href={SITE_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] hover:bg-[#20BA5A] text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Hubungi WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}