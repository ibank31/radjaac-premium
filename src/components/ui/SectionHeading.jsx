export default function SectionHeading({ children, className = "" }) {
  return (
    <h2 className={`text-2xl font-semibold text-white mb-4 ${className}`}>
      {children}
    </h2>
  );
}