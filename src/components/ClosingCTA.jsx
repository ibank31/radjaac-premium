import { MessageCircle, Wind, MapPin, Clock } from "lucide-react";
import { SITE_DATA } from "../constants/siteData";

const WA_LINK = SITE_DATA.whatsappUrl;

export default function ClosingCTA() {
  return (
    <section className="cta-section">
      <div className="cta-section__glow" />

      <div
        className="container"
        style={{
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="sec-label"
          style={{
            justifyContent: "center",
            display: "flex",
            marginBottom: 12,
          }}
        >
          Siap Mulai?
        </div>

        <h2 className="cta-section__title">Bingung Pilih AC?</h2>

        <p className="cta-section__sub">
          Konsultasikan kebutuhan AC rumah atau bisnis Anda bersama tim Radja
          AC.
          <br />
          Gratis konsultasi, tanpa tekanan.
        </p>

        <div className="cta-section__btns">
          <a href={WA_LINK} className="btn btn--wa btn--lg">
            <MessageCircle size={19} />
            Chat WhatsApp
          </a>

          <a href="#katalog" className="btn btn--ghost btn--lg">
            <Wind size={19} />
            Lihat Katalog
          </a>
        </div>

        <div className="cta-section__info">
          <span>
            <MapPin size={13} />
            Purwokerto, Banyumas
          </span>

          <span>
            <Clock size={13} />
            Buka Setiap Hari 08.00 – 20.00
          </span>
        </div>
      </div>
    </section>
  );
}