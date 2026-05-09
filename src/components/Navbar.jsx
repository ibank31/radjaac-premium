import { NavLink } from "react-router-dom"
import { useState } from "react"

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/service-ac-purwokerto", label: "Service AC" },
  { to: "/cuci-ac-purwokerto", label: "Cuci AC" },
  { to: "/instalasi-ac-banyumas", label: "Instalasi AC" },
  { to: "/tentang-kami", label: "Tentang Kami" },
  { to: "/kontak", label: "Kontak" },
  { to: "/portfolio", label: "Portfolio" },
]

const activeLink = "bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.18)]"
const inactiveLink = "text-white/80 hover:text-cyan-300 hover:bg-white/5"
const mobileActiveLink = "bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.16)]"
const mobileInactiveLink = "text-white/80 hover:text-cyan-300 hover:bg-white/5"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

<NavLink to="/" end className="flex items-center gap-3">

  <img
    src="/logo-radjaac.png"
    alt="Radja AC"
    loading="eager"
    decoding="async"
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

</NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 transition ${isActive ? activeLink : inactiveLink}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl text-white"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 text-white border-t border-white/10">
          <nav className="flex flex-col p-6 gap-4 font-medium">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-3xl px-4 py-3 transition ${isActive ? mobileActiveLink : mobileInactiveLink}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}