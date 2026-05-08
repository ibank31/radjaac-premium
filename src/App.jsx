import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import ServiceAC from "./pages/ServiceAC"
import InstalasiAC from "./pages/InstalasiAC"
import CuciAC from "./pages/CuciAC"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/service-ac-purwokerto"
        element={<ServiceAC />}
      />

      <Route
        path="/instalasi-ac-banyumas"
        element={<InstalasiAC />}
      />

      <Route
        path="/cuci-ac-purwokerto"
        element={<CuciAC />}
      />
    </Routes>
  )
}