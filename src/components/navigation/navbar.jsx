import { useState, useEffect, useRef } from "react"
import {
  Menu,
  X,
  MessageCircle,
  ChevronDown,
  ChevronRight,
  Home,
  Zap,
  Leaf,
  Building2,
  MoreHorizontal,
  Wrench,
} from "lucide-react"

const CSS = `
.nav {
  --nav-bg: #060b14;
  --nav-txt: #e8f0ff;
  --nav-txt2: #8896ae;
  --nav-txt3: #4e5f78;
  --nav-border: rgba(255,255,255,0.07);
  --nav-blue: #3b82f6;
  --nav-blue-l: #60a5fa;
  --nav-blue-d: #2563eb;
  --nav-green: #22c55e;
  --nav-green-d: #16a34a;
  --nav-h: 72px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  transition: all .35s;
  background: transparent;
}

.nav--scrolled {
  background: rgba(6,11,20,.94);
  backdrop-filter: blur(28px);
  border-bottom: 1px solid var(--nav-border);
}

.nav__inner {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-h);
  padding: 0 24px;
  gap: 8px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.logo__mark {
  width: 34px;
  height: 34px;
  background: linear-gradient(135deg, var(--nav-blue), var(--nav-blue-d));
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.logo__mark-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.logo__name {
  font-weight: 800;
  font-size: 1.18rem;
  color: var(--nav-txt);
}

.nav__item > a,
.nav__item > button {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--nav-txt2);
  text-decoration: none;
  background: none;
  border: none;
  font-size: .83rem;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 10px;
  cursor: pointer;
}

.nav__item > a:hover,
.nav__item > button:hover,
.nav__item--open > button {
  color: var(--nav-txt);
  background: rgba(255,255,255,.06);
}

.dropdown {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  pointer-events: none;
  transition: all .22s;
}

.nav__item--open .dropdown {
  opacity: 1;
  pointer-events: auto;
}

.dropdown__panel {
  background: rgba(9,15,28,.97);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 20px;
  padding: 8px;
  min-width: 260px;
}

.dropdown__item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  color: var(--nav-txt2);
  text-decoration: none;
}

.dropdown__item:hover {
  background: rgba(59,130,246,.08);
  color: var(--nav-txt);
}

.dropdown__item-icon {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,.04);
}

.dropdown__item-label {
  font-weight: 600;
  color: var(--nav-txt);
}

.dropdown__item-desc {
  font-size: .73rem;
  color: var(--nav-txt3);
}

.nav__wa {
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, var(--nav-green), var(--nav-green-d));
  color: #fff;
  text-decoration: none;
  padding: 9px 18px;
  border-radius: 12px;
  font-size: .81rem;
  font-weight: 700;
}

.hamburger {
  display: none;
  background: none;
  border: 1px solid var(--nav-border);
  color: var(--nav-txt);
  padding: 8px;
  border-radius: 10px;
}

.mob {
  position: fixed;
  inset: 0;
  background: var(--nav-bg);
  z-index: 700;
  transform: translateX(100%);
  transition: transform .32s;
}

.mob--open {
  transform: translateX(0);
}

.mob__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid var(--nav-border);
}

.mob__body {
  padding: 12px;
}

.mob__menu-group {
  display: grid;
  gap: 6px;
  margin-bottom: 12px;
}

.mob__menu-trigger,
.mob__submenu-link {
  width: 100%;
  padding: 14px 16px;
  background: none;
  border: none;
  color: var(--nav-txt);
  text-align: left;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  cursor: pointer;
}

.mob__submenu-link {
  padding-left: 26px;
  font-size: .95rem;
  color: var(--nav-txt2);
  border: 1px solid rgba(255,255,255,.06);
  transition: background .2s;
}

.mob__submenu-link:hover,
.mob__menu-trigger:hover {
  background: rgba(255,255,255,.05);
}

.mob__wa-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  background: linear-gradient(135deg, var(--nav-green), var(--nav-green-d));
  color: white;
  text-decoration: none;
  padding: 16px 24px;
  border-radius: 16px;
}

@media (max-width: 900px) {
  .nav__links,
  .nav__wa {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
`

const WA_LINK = "https://wa.me/6281234567890"

const NAV_DATA = [
  {
    label: "Beranda",
    href: "#",
    type: "link",
  },

  {
    label: "Katalog AC",
    type: "dropdown",
    sections: [
      {
        items: [
          {
            icon: Home,
            label: "AC Split Rumah",
            desc: "Untuk hunian & apartemen",
            href: "#",
          },
          {
            icon: Zap,
            label: "AC Inverter",
            desc: "Hemat listrik hingga 60%",
            href: "#",
          },
          {
            icon: Leaf,
            label: "AC Low Watt",
            desc: "Ideal untuk kos & kontrakan",
            href: "#",
          },
          {
            icon: Building2,
            label: "AC Kantor",
            desc: "Solusi ruang komersial",
            href: "#",
          },
        ],
      },
    ],
  },

  {
    label: "Brand Unggulan",
    type: "dropdown",
    sections: [
      {
        items: [
          {
            label: "Daikin",
            desc: "Premium & Senyap",
            href: "#",
          },
          {
            label: "Gree",
            desc: "Value Terbaik",
            href: "#",
          },
          {
            label: "Panasonic",
            desc: "Udara Lebih Sehat",
            href: "#",
          },
          {
            label: "Samsung",
            desc: "Smart Modern Living",
            href: "#",
          },
          {
            icon: MoreHorizontal,
            label: "Brand Lainnya",
            desc: "Lihat pilihan lengkap",
            href: "#",
          },
        ],
      },
    ],
  },

  {
    label: "Instalasi",
    type: "dropdown",
    sections: [
      {
        items: [
          {
            label: "Instalasi Profesional",
            desc: "Pemasangan AC rapi & aman",
            href: "#",
          },
          {
            label: "Survey Lokasi",
            desc: "Analisa kebutuhan ruangan",
            href: "#",
          },
          {
            label: "Bongkar Pasang",
            desc: "Relokasi & pemasangan ulang",
            href: "#",
          },
        ],
      },
    ],
  },

  {
    label: "Solusi AC",
    type: "dropdown",
    sections: [
      {
        items: [
          {
            label: "Konsultasi PK",
            desc: "Hitung kebutuhan pendinginan",
            href: "#",
          },
          {
            label: "AC Rumah",
            desc: "Solusi untuk hunian",
            href: "#",
          },
          {
            label: "AC Kantor",
            desc: "Pendingin ruang kerja",
            href: "#",
          },
          {
            label: "Perawatan Berkala",
            desc: "Maintenance & service",
            href: "#",
          },
        ],
      },
    ],
  },

  {
    label: "Tentang Kami",
    href: "#tentang",
    type: "link",
  },
]

const DropdownPanel = ({ data }) => (
  <div className="dropdown">
    <div className="dropdown__panel">
      {data.sections.map((sec, si) => (
        <div key={si}>
          {sec.items.map((item, ii) => (
            <a key={ii} href={item.href} className="dropdown__item">
              {item.icon && (
                <span className="dropdown__item-icon">
                  <item.icon size={15} />
                </span>
              )}

              <span>
                <span className="dropdown__item-label">
                  {item.label}
                </span>

                <span className="dropdown__item-desc">
                  {item.desc}
                </span>
              </span>

              <ChevronRight size={13} />
            </a>
          ))}
        </div>
      ))}
    </div>
  </div>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openItem, setOpenItem] = useState(null)
  const [mobOpen, setMobOpen] = useState(false)

  const navRef = useRef(null)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)

    window.addEventListener("scroll", h)

    return () => window.removeEventListener("scroll", h)
  }, [])

  useEffect(() => {
    const h = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenItem(null)
      }
    }

    document.addEventListener("mousedown", h)

    return () => document.removeEventListener("mousedown", h)
  }, [])

  const toggle = (label) => {
    setOpenItem((prev) => (prev === label ? null : label))
  }

  return (
    <>
      <style>{CSS}</style>

      <nav
        ref={navRef}
        className={`nav ${scrolled ? "nav--scrolled" : ""}`}
      >
        <div className="nav__inner">
          <a href="#" className="logo">
            <div className="logo__mark">
              <img src="/logo-radjaac.webp" alt="Radja AC" className="logo__mark-img" />
            </div>

            <span className="logo__name">
              Radja<span> AC</span>
            </span>
          </a>

          <ul className="nav__links">
            {NAV_DATA.map((item) => (
              <li
                key={item.label}
                className={`nav__item ${
                  openItem === item.label ? "nav__item--open" : ""
                }`}
              >
                {item.type === "link" ? (
                  <a href={item.href}>{item.label}</a>
                ) : (
                  <>
                    <button onClick={() => toggle(item.label)}>
                      {item.label}
                      <ChevronDown size={13} />
                    </button>

                    <DropdownPanel data={item} />
                  </>
                )}
              </li>
            ))}
          </ul>

          <a href={WA_LINK} className="nav__wa">
            <MessageCircle size={15} /> WhatsApp
          </a>

          <button
            className="hamburger"
            onClick={() => setMobOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <div className={`mob ${mobOpen ? "mob--open" : ""}`}>
        <div className="mob__head">
          <a href="#" className="logo">
            <div className="logo__mark">
              <img src="/logo-radjaac.webp" alt="Radja AC" className="logo__mark-img" />
            </div>

            <span className="logo__name">
              Radja<span> AC</span>
            </span>
          </a>

          <button
            className="hamburger"
            onClick={() => setMobOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="mob__body">
          {NAV_DATA.map((item) => (
            <div key={item.label} className="mob__menu-group">
              {item.type === "link" ? (
                <a
                  href={item.href}
                  className="mob__menu-trigger"
                  onClick={() => setMobOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <span className="mob__menu-trigger">{item.label}</span>
              )}

              {item.type === "dropdown" && item.sections[0]?.items.map((subItem, subIndex) => (
                <a
                  key={subIndex}
                  href={subItem.href}
                  className="mob__submenu-link"
                  onClick={() => setMobOpen(false)}
                >
                  {subItem.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mob__footer">
          <a href={WA_LINK} className="mob__wa-btn">
            <MessageCircle size={18} />
            Konsultasi via WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}


