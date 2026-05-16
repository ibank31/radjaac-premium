import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { buildWhatsAppUrl } from "../../utils/whatsapp"

const AREA_CONFIG = {
  "/jual-ac-banyumas": {
    area: "Banyumas",
    message: "Halo RADJA AC, saya dari area Banyumas. Mau tanya harga AC, cek stok, rekomendasi PK, estimasi pemasangan, dan opsi COD/bayar di tempat.",
    related: [
      ["Sokaraja", "/jual-ac-sokaraja"],
      ["Ajibarang", "/jual-ac-ajibarang"],
      ["Wangon", "/jual-ac-wangon"],
      ["Cilongok", "/jual-ac-cilongok"],
      ["Jatilawang", "/jual-ac-jatilawang"],
    ],
  },
  "/jual-ac-sokaraja": {
    area: "Sokaraja",
    message: "Halo RADJA AC, saya dari area Sokaraja. Mau tanya harga AC, cek stok, rekomendasi PK, estimasi pemasangan, dan opsi COD/bayar di tempat.",
    related: [
      ["Banyumas", "/jual-ac-banyumas"],
      ["Purwokerto", "/jual-ac-purwokerto"],
    ],
  },
  "/jual-ac-ajibarang": {
    area: "Ajibarang",
    message: "Halo RADJA AC, saya dari area Ajibarang. Mau tanya harga AC, cek stok, rekomendasi PK, estimasi pemasangan, dan opsi COD/bayar di tempat.",
    related: [
      ["Banyumas", "/jual-ac-banyumas"],
      ["Cilongok", "/jual-ac-cilongok"],
      ["Wangon", "/jual-ac-wangon"],
    ],
  },
  "/jual-ac-wangon": {
    area: "Wangon",
    message: "Halo RADJA AC, saya dari area Wangon. Mau tanya harga AC, cek stok, rekomendasi PK, estimasi pemasangan, dan opsi COD/bayar di tempat.",
    related: [
      ["Banyumas", "/jual-ac-banyumas"],
      ["Ajibarang", "/jual-ac-ajibarang"],
      ["Jatilawang", "/jual-ac-jatilawang"],
    ],
  },
  "/jual-ac-cilongok": {
    area: "Cilongok",
    message: "Halo RADJA AC, saya dari area Cilongok. Mau tanya harga AC, cek stok, rekomendasi PK, estimasi pemasangan, dan opsi COD/bayar di tempat.",
    related: [
      ["Banyumas", "/jual-ac-banyumas"],
      ["Ajibarang", "/jual-ac-ajibarang"],
      ["Purwokerto", "/jual-ac-purwokerto"],
    ],
  },
  "/jual-ac-jatilawang": {
    area: "Jatilawang",
    message: "Halo RADJA AC, saya dari area Jatilawang. Mau tanya harga AC, cek stok, rekomendasi PK, estimasi pemasangan, dan opsi COD/bayar di tempat.",
    related: [
      ["Banyumas", "/jual-ac-banyumas"],
      ["Wangon", "/jual-ac-wangon"],
    ],
  },
}

function findParentByClass(node, className) {
  let current = node?.parentElement

  while (current) {
    if (current.classList?.contains(className)) return current
    current = current.parentElement
  }

  return null
}

function makePriceCard(config) {
  const relatedLinks = config.related
    .map(([label, href]) => `<a href="${href}" class="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1.5 text-xs font-bold text-cyan-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.1] sm:text-sm">${label}<span aria-hidden="true">→</span></a>`)
    .join("")

  return `
    <svg class="mb-5 h-8 w-8 text-cyan-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
    <h2 class="mb-4 text-3xl font-black tracking-[-0.03em]">Cari harga AC area ${config.area}?</h2>
    <p class="mb-5 text-sm leading-7 text-white/62 sm:text-base">Cek stok, rekomendasi PK, estimasi pemasangan, dan opsi COD/bayar di tempat lewat WhatsApp. Untuk area sekitar, pilih halaman terdekat agar informasi lokasi lebih sesuai.</p>
    <a href="${buildWhatsAppUrl(config.message)}" target="_blank" rel="noreferrer" class="mb-6 inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#20BA5A] sm:text-base">Tanya Harga AC ${config.area}</a>
    <div>
      <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/38">Area terdekat</p>
      <div class="flex flex-wrap gap-2">${relatedLinks}</div>
    </div>
  `
}

function refinePriceCard(config) {
  const headings = Array.from(document.querySelectorAll("h2"))
  const heading = headings.find((node) => node.textContent?.trim() === `Cari harga AC area ${config.area}?`)
  const card = findParentByClass(heading, "rounded-[32px]")

  if (!card || card.dataset.areaPriceRefined === "true") return false

  card.innerHTML = makePriceCard(config)
  card.dataset.areaPriceRefined = "true"
  return true
}

function refineBrandGrid() {
  const daikinLink = document.querySelector('main a[href="/brand/daikin"]')
  const brandGrid = daikinLink?.parentElement

  if (!brandGrid || brandGrid.dataset.brandGridRefined === "true") return false

  brandGrid.classList.add("grid-cols-2")
  brandGrid.dataset.brandGridRefined = "true"

  Array.from(brandGrid.querySelectorAll('a[href^="/brand/"]')).forEach((link) => {
    link.classList.remove("p-6", "rounded-[28px]")
    link.classList.add("p-4", "rounded-[22px]", "min-h-[138px]")

    const title = link.querySelector("h3")
    title?.classList.remove("text-2xl", "mb-3")
    title?.classList.add("text-lg", "mb-2")
  })

  return true
}

function refineAreaChips() {
  const headings = Array.from(document.querySelectorAll("h2"))
  const heading = headings.find((node) => node.textContent?.trim() === "Area yang bisa konsultasi pembelian AC")
  const section = heading?.closest("section")
  const chips = Array.from(section?.querySelectorAll("div") ?? []).find((node) => {
    return node.classList.contains("flex") && node.classList.contains("flex-wrap") && node.classList.contains("gap-2.5")
  })

  if (!chips || chips.classList.contains("justify-center")) return false

  chips.classList.add("justify-center")
  return true
}

function runRefinements(config) {
  const priceDone = refinePriceCard(config)
  const brandDone = refineBrandGrid()
  const chipsDone = refineAreaChips()

  return priceDone || brandDone || chipsDone
}

export default function AreaPageRefinements() {
  const { pathname } = useLocation()

  useEffect(() => {
    const config = AREA_CONFIG[pathname]
    if (!config) return

    let attempts = 0
    const interval = window.setInterval(() => {
      attempts += 1
      runRefinements(config)

      const priceReady = document.querySelector("[data-area-price-refined='true']")
      const brandReady = document.querySelector("[data-brand-grid-refined='true']")

      if ((priceReady && brandReady) || attempts >= 20) {
        window.clearInterval(interval)
      }
    }, 150)

    return () => window.clearInterval(interval)
  }, [pathname])

  return null
}
