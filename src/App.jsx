import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import InstalasiAC from "./pages/InstalasiAC"
import InstalasiProfesional from "./pages/InstalasiProfesional"
import AcSplitRumah from "./pages/AcSplitRumah"
import DaikinPurwokerto from "./pages/DaikinPurwokerto"
import GreePurwokerto from "./pages/GreePurwokerto"
import MideaPurwokerto from "./pages/MideaPurwokerto"
import HisensePurwokerto from "./pages/HisensePurwokerto"
import SansuiPurwokerto from "./pages/SansuiPurwokerto"
import SharpPurwokerto from "./pages/SharpPurwokerto"
import PanasonicPurwokerto from "./pages/PanasonicPurwokerto"
import TentangKami from "./pages/TentangKami"
import Kontak from "./pages/Kontak"
import Portfolio from "./pages/Portfolio"
import NotFound from "./pages/NotFound"
import ScrollToTop from "./components/ScrollToTop"
import ErrorBoundary from "./components/ErrorBoundary"

export default function App() {
  return (
    <>
      <ScrollToTop />

      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />

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
            path="/sharp-purwokerto"
            element={<SharpPurwokerto />}
          />

          <Route
            path="/panasonic-purwokerto"
            element={<PanasonicPurwokerto />}
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
      </ErrorBoundary>
    </>
  )
}
