export default function Button({
    children,
    href = "#",
    variant = "primary",
}) {
    const baseStyle =
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-500";

    const variants = {
        primary:
            "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-600/20 hover:-translate-y-1 hover:shadow-violet-500/40",

        secondary:
            "border border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white hover:-translate-y-1",
        };

    return (
        <a
        href={href}
        className={`${baseStyle} ${variants[variant]}`}
        >
        {children}
        </a>
    );
}