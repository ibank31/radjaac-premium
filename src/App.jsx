import { lazy, Suspense, useEffect } from "react"
import { Navigate, Routes, Route, useLocation } from "react-router-dom"

const Home = lazy(() => import("./pages/Home"))
const JualAcPurwokerto = lazy(() => import("./pages/JualAcPurwokerto"))
const JualAcBanyumas = lazy(() => import("./pages/JualAcBanyumas"))
const JualAcSokaraja = lazy(() => import("./pages/JualAcSokaraja"))
const JualAcAjibarang = lazy(() => import("./pages/JualAcAjibarang"))
const JualAcWangon = lazy(() => import("./pages/JualAcWangon"))
const JualAcCilongok = lazy(() => import("./pages/JualAcCilongok"))
const JualAcJatilawang = lazy(() => import("./pages/JualAcJatilawang"))
const JualAcPurbalingga = lazy(() => import("./pages/JualAcPurbalingga"))
const JualAcBanjarnegara = lazy(() => import("./pages/JualAcBanjarnegara"))
const JualAcCilacap = lazy(() => import("./pages/JualAcCilacap"))
const JualAcKebumen = lazy(() => import("./pages/JualAcKebumen"))
const JualAcTegal = lazy(() => import("./pages/JualAcTegal"))
const JualAcYogyakarta = lazy(() => import("./pages/JualAcYogyakarta"))
const KatalogAc = lazy(() => import("./pages/KatalogAc"))
const KalkulatorAc = lazy(() => import("./pages/KalkulatorAc"))
const InstalasiProfesional = lazy(() => import("./pages/InstalasiProfesional"))
const AcSplitRumah = lazy(() => import("./pages/AcSplitRumah"))
const AcInverter = lazy(() => import("./pages/AcInverter"))
const AcLowWatt = lazy(() => import("./pages/AcLowWatt"))
const AcKantorKomersial = lazy(() => import("./pages/AcKantorKomersial"))
const DaikinPurwokerto = lazy(() => import("./pages/DaikinPurwokerto"))
const GreePurwokerto = lazy(() => import("./pages/GreePurwokerto"))
const MideaPurwokerto = lazy(() => import("./pages/MideaPurwokerto"))
const HisensePurwokerto = lazy(() => import("./pages/HisensePurwokerto"))
const SansuiPurwokerto = lazy(() => import("./pages/SansuiPurwokerto"))
const BrandLainnya = lazy(() => import("./pages/BrandLainnya"))
const SharpPurwokerto = lazy(() => import("./pages/SharpPurwokerto"))
const PanasonicPurwokerto = lazy(() => import("./pages/PanasonicPurwokerto"))
const Blog = lazy(() => import("./pages/Blog"))
const BlogPost = lazy(() => import("./pages/BlogPost"))
const Gallery = lazy(() => import("./pages/Gallery"))
const TentangKami = lazy(() => import("./pages/TentangKami"))
const Kontak = lazy(() => import("./pages/Kontak"))
const NotFound = lazy(() => import("./pages/NotFound"))

import ScrollToTop from "./components/ScrollToTop"
import ErrorBoundary from "./components/ErrorBoundary"
import FloatingWhatsapp from "./components/FloatingWhatsapp"
import { SITE_DATA } from "./constants/siteData"

const CERTIFICATE_BRANDS = {
  "/brand/daikin": "Daikin",
  "/daikin-purwokerto": "Daikin",
  "/brand/midea": "Midea",
  "/midea-purwokerto": "Midea",
  "/brand/hisense": "Hisense",
  "/hisense-purwokerto": "Hisense",
  "/brand/sansui": "Sansui",
  "/sansui-purwokerto": "Sansui",
}

function simplifyCertificateCopy(pathname) {
  const brand = CERTIFICATE_BRANDS[pathname]
  if (!brand) return

  const labelsToRemove = new Set([
    `Sertifikat Resmi ${brand}`,
    `Authorized Dealer ${brand}`,
  ])

  document.querySelectorAll("h2, div").forEach((element) => {
    const text = element.textContent?.trim()

    if (!labelsToRemove.has(text)) return
    if (element.querySelector("img")) return

    const isLargeTitle = element.tagName.toLowerCase() === "h2"
    const isCertificateChip = element.className?.includes?.("inline-flex")

    if (isLargeTitle || isCertificateChip) {
      element.remove()
    }
  })

  document.querySelectorAll("span").forEach((element) => {
    const text = element.textContent?.trim()

    if (text === "Authorized Dealer" || text === "Dealer Certificate") {
      element.textContent = `Authorized Dealer ${brand}`
    }
  })
}

function sendWhatsAppClickEvent(link) {
  if (typeof window.gtag !== "function") return

  window.gtag("event", "whatsapp_click", {
    event_category: "lead",
    event_label: link.href,
    link_url: link.href,
    page_path: window.location.pathname,
  })
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    function handleClick(event) {
      const link = event.target.closest("a[href]")

      if (!link || !link.href.includes(SITE_DATA.whatsappUrl)) return

      sendWhatsAppClickEvent(link)
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  useEffect(() => {
    simplifyCertificateCopy(location.pathname)

    const observer = new MutationObserver(() => {
      simplifyCertificateCopy(location.pathname)
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
    }
  }, [location.pathname])

  return (
    <>
      <ScrollToTop />

      <ErrorBoundary>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/jual-ac-purwokerto" element={<JualAcPurwokerto />} />

            <Route path="/jual-ac-banyumas" element={<JualAcBanyumas />} />

            <Route path="/jual-ac-sokaraja" element={<JualAcSokaraja />} />

            <Route path="/jual-ac-ajibarang" element={<JualAcAjibarang />} />

            <Route path="/jual-ac-wangon" element={<JualAcWangon />} />

            <Route path="/jual-ac-cilongok" element={<JualAcCilongok />} />

            <Route path="/jual-ac-jatilawang" element={<JualAcJatilawang />} />

            <Route path="/jual-ac-purbalingga" element={<JualAcPurbalingga />} />

            <Route path="/jual-ac-banjarnegara" element={<JualAcBanjarnegara />} />

            <Route path="/jual-ac-cilacap" element={<JualAcCilacap />} />

            <Route path="/jual-ac-kebumen" element={<JualAcKebumen />} />

            <Route path="/jual-ac-tegal" element={<JualAcTegal />} />

            <Route path="/jual-ac-yogyakarta" element={<JualAcYogyakarta />} />

            <Route path="/katalog" element={<KatalogAc />} />

            <Route path="/kalkulator-pk-ac" element={<KalkulatorAc />} />

            <Route
              path="/brand/daikin"
              element={<DaikinPurwokerto />}
            />

            <Route
              path="/daikin-purwokerto"
              element={<Navigate to="/brand/daikin" replace />}
            />

            <Route
              path="/brand/gree"
              element={<GreePurwokerto />}
            />

            <Route
              path="/gree-purwokerto"
              element={<Navigate to="/brand/gree" replace />}
            />

            <Route
              path="/brand/midea"
              element={<MideaPurwokerto />}
            />

            <Route
              path="/midea-purwokerto"
              element={<Navigate to="/brand/midea" replace />}
            />

            <Route
              path="/brand/hisense"
              element={<HisensePurwokerto />}
            />

            <Route
              path="/hisense-purwokerto"
              element={<Navigate to="/brand/hisense" replace />}
            />

            <Route
              path="/brand/sansui"
              element={<SansuiPurwokerto />}
            />

            <Route
              path="/sansui-purwokerto"
              element={<Navigate to="/brand/sansui" replace />}
            />

            <Route
              path="/brand/sharp"
              element={<SharpPurwokerto />}
            />

            <Route
              path="/sharp-purwokerto"
              element={<Navigate to="/brand/sharp" replace />}
            />

            <Route
              path="/brand/panasonic"
              element={<PanasonicPurwokerto />}
            />

            <Route
              path="/panasonic-purwokerto"
              element={<Navigate to="/brand/panasonic" replace />}
            />

            <Route
              path="/brand/lainnya"
              element={<BrandLainnya />}
            />

            <Route
              path="/ac-inverter-purwokerto"
              element={<Navigate to="/katalog/ac-inverter" replace />}
            />

            <Route
              path="/ac-low-watt-purwokerto"
              element={<Navigate to="/katalog/ac-low-watt" replace />}
            />

            <Route
              path="/ac-purwokerto-selatan"
              element={<Navigate to="/jual-ac-purwokerto" replace />}
            />

            <Route
              path="/instalasi-ac-banyumas"
              element={<Navigate to="/jual-ac-banyumas" replace />}
            />

            <Route
              path="/instalasi-profesional"
              element={<InstalasiProfesional />}
            />

            <Route
              path="/katalog/ac-split-rumah"
              element={<AcSplitRumah />}
            />

            <Route
              path="/katalog/ac-inverter"
              element={<AcInverter />}
            />

            <Route
              path="/katalog/ac-low-watt"
              element={<AcLowWatt />}
            />

            <Route
              path="/katalog/ac-kantor-komersial"
              element={<AcKantorKomersial />}
            />

            <Route path="/artikel" element={<Blog />} />

            <Route path="/artikel/:slug" element={<BlogPost />} />

            <Route path="/gallery" element={<Gallery />} />

            <Route
              path="/tentang-kami"
              element={<TentangKami />}
            />

            <Route
              path="/kontak"
              element={<Kontak />}
            />

            <Route
              path="/portfolio"
              element={<Navigate to="/gallery" replace />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>

      <FloatingWhatsapp global />
    </>
  )
}