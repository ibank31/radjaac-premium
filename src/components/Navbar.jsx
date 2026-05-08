import { NavLink } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

<NavLink to="/" end className="flex items-center gap-3">

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

</NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `rounded-full px-3 py-2 transition ${
                isActive
                  ? "bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.18)]"
                  : "text-white/80 hover:text-cyan-300 hover:bg-white/5"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/service-ac-purwokerto"
            className={({ isActive }) =>
              `rounded-full px-3 py-2 transition ${
                isActive
                  ? "bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.18)]"
                  : "text-white/80 hover:text-cyan-300 hover:bg-white/5"
              }`
            }
          >
            Service AC
          </NavLink>

          <NavLink
            to="/cuci-ac-purwokerto"
            className={({ isActive }) =>
              `rounded-full px-3 py-2 transition ${
                isActive
                  ? "bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.18)]"
                  : "text-white/80 hover:text-cyan-300 hover:bg-white/5"
              }`
            }
          >
            Cuci AC
          </NavLink>

          <NavLink
            to="/instalasi-ac-banyumas"
            className={({ isActive }) =>
              `rounded-full px-3 py-2 transition ${
                isActive
                  ? "bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.18)]"
                  : "text-white/80 hover:text-cyan-300 hover:bg-white/5"
              }`
            }
          >
            Instalasi AC
          </NavLink>
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
            <NavLink
              to="/"
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-3xl px-4 py-3 transition ${
                  isActive
                    ? "bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.16)]"
                    : "text-white/80 hover:text-cyan-300 hover:bg-white/5"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/service-ac-purwokerto"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-3xl px-4 py-3 transition ${
                  isActive
                    ? "bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.16)]"
                    : "text-white/80 hover:text-cyan-300 hover:bg-white/5"
                }`
              }
            >
              Service AC
            </NavLink>

            <NavLink
              to="/cuci-ac-purwokerto"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-3xl px-4 py-3 transition ${
                  isActive
                    ? "bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.16)]"
                    : "text-white/80 hover:text-cyan-300 hover:bg-white/5"
                }`
              }
            >
              Cuci AC
            </NavLink>

            <NavLink
              to="/instalasi-ac-banyumas"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-3xl px-4 py-3 transition ${
                  isActive
                    ? "bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.16)]"
                    : "text-white/80 hover:text-cyan-300 hover:bg-white/5"
                }`
              }
            >
              Instalasi AC
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}