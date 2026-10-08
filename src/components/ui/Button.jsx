const variants = {
  primary: "bg-ink text-paper hover:bg-ink-2",
  outline: "border border-line text-ink hover:border-ink",
  lime: "bg-lime text-ink hover:brightness-95",
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
  arrow = false,
  ...props
}) {
  return (
    <a
      href={href}
      className={`label group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-bold transition-colors duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </a>
  );
}
