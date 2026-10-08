export default function Tag({ children, dark = false }) {
  return (
    <span
      className={`label rounded-full px-3 py-1.5 ${
        dark ? "bg-white/10 text-white/70" : "bg-paper-2 text-ink-2"
      }`}
    >
      {children}
    </span>
  );
}
