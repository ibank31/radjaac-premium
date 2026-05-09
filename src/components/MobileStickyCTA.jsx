import { Phone } from "lucide-react";
import { SITE_DATA } from "../constants/siteData";
import WhatsappIcon from "./ui/WhatsappIcon";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-2xl">
      <div className="flex gap-3 p-3 max-w-7xl mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${SITE_DATA.phoneNumber}`}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <Phone size={20} />
          <span>Telepon</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={SITE_DATA.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <WhatsappIcon className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
