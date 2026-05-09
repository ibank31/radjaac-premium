import { Component } from 'react';
import { Link } from 'react-router-dom';
import { SITE_DATA } from '../constants/siteData';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-cyan-400/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">Oops! Terjadi Kesalahan</h1>
              <p className="text-white/70 leading-relaxed">
                Maaf, terjadi kesalahan teknis. Tim kami telah diberitahu dan sedang memperbaikinya.
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
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;