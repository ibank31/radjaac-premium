import { NavLink, Link } from "react-router-dom"
import { useState } from "react"

const PRODUCTS = [
  { label: "AC Inverter" },
  { label: "AC Low Watt" },
  { label: "AC Rumah" },
  { label: "AC Kantor" },
]

const BRANDS = [
  { to: "/daikin-purwokerto", label: "Daikin" },
  { to: "/gree-purwokerto", label: "Gree" },
]

const SERVICES = [
  { to: "/service-ac-purwokerto", label: "Service AC" },
  { to: "/cuci-ac-purwokerto", label: "Cuci AC" },
]

const NAV_ITEMS = [
  { type: "link", to: "/", label: "Home", end: true },
  { type: "dropdown", label: "Produk AC", items: PRODUCTS },
  { type: "dropdown", label: "Brand AC", items: BRANDS },
  { type: "link", to: "/instalasi-ac-banyumas", label: "Instalasi" },
  { type: "dropdown", label: "Layanan", items: SERVICES },
  { type: "link", to: "/tentang-kami", label: "Tentang Kami" },
  { type: "link", to: "/kontak", label: "Kontak" },
]

const activeLink = "bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.18)]"
const inactiveLink = "text-white/80 hover:text-cyan-300 hover:bg-white/5"
const mobileActiveLink = "bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.16)]"
const mobileInactiveLink = "text-white/80 hover:text-cyan-300 hover:bg-white/5"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState("")

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo-radjaac.webp"
            alt="Radja AC"
            loading="eager"
            decoding="async"
            className="w-10 h-10 object-contain"
          />

          <div>
            <h1 className="text-white font-bold text-lg leading-none">Radja AC</h1>
            <p className="text-white/50 text-[11px]">Purwokerto • Banyumas</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
          {NAV_ITEMS.map((item) => {
            if (item.type === "link") {
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 transition ${isActive ? activeLink : inactiveLink}`
                  }
                >
                  {item.label}
                </NavLink>
              )
            }

            return (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === item.label ? "" : item.label)}
                  className="rounded-full px-3 py-2 transition text-white/80 hover:text-cyan-300 hover:bg-white/5 flex items-center gap-2"
                >
                  {item.label}
                  <span className="text-xs">▾</span>
                </button>
                <div
                  className={`absolute top-full left-0 mt-3 min-w-[180px] rounded-3xl border border-white/10 bg-slate-950/95 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl transition ${openDropdown === item.label ? "opacity-100 visible" : "opacity-0 invisible"}`}
                >
                  <div className="space-y-1 px-3">
                    {item.items.map((subItem) =>
                      subItem.to ? (
                        <Link
                          key={subItem.label}
                          to={subItem.to}
                          className="block rounded-3xl px-3 py-2 text-white/80 hover:text-cyan-300 hover:bg-white/5"
                        >
                          {subItem.label}
                        </Link>
                      ) : (
                        <div
                          key={subItem.label}
                          className="block rounded-3xl px-3 py-2 text-white/50 cursor-default"
                        >
                          {subItem.label}
                        </div>
                      )}
                  </div>
                </div>
              </div>
            )
          })}
        </nav>

        <button
          className="md:hidden text-3xl text-white"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 text-white border-t border-white/10">
          <nav className="flex flex-col p-6 gap-4 font-medium">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.type === "link" ? (
                  <NavLink
                    to={item.to}
                    end={item.end}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `rounded-3xl px-4 py-3 transition ${isActive ? mobileActiveLink : mobileInactiveLink}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? "" : item.label)}
                      className="w-full text-left rounded-3xl px-4 py-3 transition text-white/80 hover:text-cyan-300 hover:bg-white/5 flex items-center justify-between"
                    >
                      {item.label}
                      <span className="text-sm">▾</span>
                    </button>
                    {openDropdown === item.label && (
                      <div className="space-y-1 pl-4">
                        {item.items.map((subItem) =>
                          subItem.to ? (
                            <Link
                              key={subItem.label}
                              to={subItem.to}
                              onClick={() => setIsOpen(false)}
                              className="block rounded-3xl px-4 py-3 text-white/80 hover:text-cyan-300 hover:bg-white/5"
                            >
                              {subItem.label}
                            </Link>
                          ) : (
                            <div key={subItem.label} className="block rounded-3xl px-4 py-3 text-white/50">
                              {subItem.label}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
