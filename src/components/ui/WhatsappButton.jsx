import { SITE_DATA } from "../../constants/siteData";
import WhatsappIcon from "./WhatsappIcon";

export default function WhatsappButton({
  children,
  href = SITE_DATA.whatsappUrl,
  className = "",
  variant = "primary",
  size = "default"
}) {
  const variantClasses = {
    primary: "bg-[#25D366] hover:bg-[#20BA5A] text-slate-950",
    secondary: "bg-slate-800 hover:bg-slate-700 text-white",
  };

  const sizeClasses = {
    default: "px-6 sm:px-8 py-4 text-base sm:text-lg",
    large: "px-7 py-4 text-lg",
    small: "px-4 py-3 text-sm",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-2xl sm:rounded-full font-semibold shadow-[0_24px_60px_rgba(37,211,102,0.24)] transition duration-300 hover:-translate-y-0.5 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
        <WhatsappIcon className="w-7 h-7 object-contain shrink-0" />
      </span>
      {children}
    </a>
  );
}