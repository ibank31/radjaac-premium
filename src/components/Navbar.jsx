import { Link } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

<Link
  to="/"
  className="flex items-center gap-3"
>

  <img
    src="/logo-radjaac.png"
    alt="Radja AC"
    className="w-10 h-10 object-contain"
  />

  <div>
    <h1 className="text-white font-bold text-lg leading-none">
      Radja AC
    </h1>

    <p className="text-white/50 text-[11px]">
      Purwokerto • Banyumas
    </p>
  </div>

</Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium">

          <Link
            to="/"
            className="hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            to="/service-ac-purwokerto"
            className="hover:text-cyan-400 transition"
          >
            Service AC
          </Link>

          <Link
            to="/cuci-ac-purwokerto"
            className="hover:text-cyan-400 transition"
          >
            Cuci AC
          </Link>

          <Link
            to="/instalasi-ac-banyumas"
            className="hover:text-cyan-400 transition"
          >
            Instalasi AC
          </Link>

        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 text-white border-t border-white/10">

          <nav className="flex flex-col p-6 gap-5 font-medium">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/service-ac-purwokerto"
              onClick={() => setIsOpen(false)}
            >
              Service AC
            </Link>

            <Link
              to="/cuci-ac-purwokerto"
              onClick={() => setIsOpen(false)}
            >
              Cuci AC
            </Link>

            <Link
              to="/instalasi-ac-banyumas"
              onClick={() => setIsOpen(false)}
            >
              Instalasi AC
            </Link>

          </nav>
        </div>
      )}
    </header>
  )
}