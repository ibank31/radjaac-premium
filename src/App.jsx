import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import ServiceAC from "./pages/ServiceAC"
import InstalasiAC from "./pages/InstalasiAC"
import CuciAC from "./pages/CuciAC"
import DaikinPurwokerto from "./pages/DaikinPurwokerto"
import GreePurwokerto from "./pages/GreePurwokerto"
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
            path="/service-ac-purwokerto"
            element={<ServiceAC />}
          />

          <Route
            path="/daikin-purwokerto"
            element={<DaikinPurwokerto />}
          />

          <Route
            path="/gree-purwokerto"
            element={<GreePurwokerto />}
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
            path="/cuci-ac-purwokerto"
            element={<CuciAC />}
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