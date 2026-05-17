import { lazy, Suspense, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

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
const KatalogAc = lazy(() => import("./pages/KatalogAc"))
const KalkulatorAc = lazy(() => import("./pages/KalkulatorAc"))
const InstalasiAC = lazy(() => import("./pages/InstalasiAC"))
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
const Portfolio = lazy(() => import("./pages/Portfolio"))
const NotFound = lazy(() => import("./pages/NotFound"))

import ScrollToTop from "./components/ScrollToTop"
import ErrorBoundary from "./components/ErrorBoundary"
import FloatingWhatsapp from "./components/FloatingWhatsapp"

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
  useEffect(() => {
    function handleClick(event) {
      const link = event.target.closest("a[href]")

      if (!link || !link.href.includes("wa.me/62882008246099")) return

      sendWhatsAppClickEvent(link)
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

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

            <Route path="/katalog" element={<KatalogAc />} />

            <Route path="/kalkulator-pk-ac" element={<KalkulatorAc />} />

            <Route
              path="/brand/daikin"
              element={<DaikinPurwokerto />}
            />

            <Route
              path="/daikin-purwokerto"
              element={<DaikinPurwokerto />}
            />

            <Route
              path="/brand/gree"
              element={<GreePurwokerto />}
            />

            <Route
              path="/gree-purwokerto"
              element={<GreePurwokerto />}
            />

            <Route
              path="/brand/midea"
              element={<MideaPurwokerto />}
            />

            <Route
              path="/midea-purwokerto"
              element={<MideaPurwokerto />}
            />

            <Route
              path="/brand/hisense"
              element={<HisensePurwokerto />}
            />

            <Route
              path="/hisense-purwokerto"
              element={<HisensePurwokerto />}
            />

            <Route
              path="/brand/sansui"
              element={<SansuiPurwokerto />}
            />

            <Route
              path="/sansui-purwokerto"
              element={<SansuiPurwokerto />}
            />

            <Route
              path="/brand/sharp"
              element={<SharpPurwokerto />}
            />

            <Route
              path="/sharp-purwokerto"
              element={<SharpPurwokerto />}
            />

            <Route
              path="/brand/panasonic"
              element={<PanasonicPurwokerto />}
            />

            <Route
              path="/panasonic-purwokerto"
              element={<PanasonicPurwokerto />}
            />

            <Route
              path="/brand/lainnya"
              element={<BrandLainnya />}
            />

            <Route
              path="/instalasi-ac-banyumas"
              element={<InstalasiAC />}
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
              element={<Portfolio />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>

      <FloatingWhatsapp global />
    </>
  )
}
