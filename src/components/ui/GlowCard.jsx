export default function GlowCard({
  children,
  className = "",
  glowColor = "cyan",
  variant = "default"
}) {
  const glowClasses = {
    cyan: "shadow-[0_0_60px_rgba(14,116,144,0.16)]",
    green: "shadow-[0_24px_60px_rgba(37,211,102,0.24)]",
  };

  const variantClasses = {
    default: "rounded-[28px] sm:rounded-3xl border border-white/10 bg-slate-900/80 p-5 sm:p-8",
    hero: "rounded-[28px] sm:rounded-[32px] border border-white/10 bg-slate-950/70 p-5 sm:p-8 md:p-12 shadow-[0_24px_80px_rgba(8,20,47,0.55)]",
    accent: "rounded-[28px] sm:rounded-[32px] border border-cyan-400/20 bg-slate-900/90",
  };

  return (
    <div className={`${variantClasses[variant]} ${glowClasses[glowColor]} ${className}`}>
      {children}
    </div>
  );
}