import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-20 max-w-7xl items-center px-6 lg:px-10">
        {/* Logo */}

        <a
          href="#home"
          className="
            text-2xl
            font-bold
            tracking-tight
            text-white
            transition
            duration-300
            hover:scale-105
          "
        >
          Rasya<span className="text-violet-500">Dev</span>
        </a>

        {/* Desktop Menu */}

        <nav
  className="
    absolute
    left-1/2
    hidden
    -translate-x-1/2
    items-center
    gap-10
    md:flex
  "
>
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="
                group
                relative
                text-sm
                font-medium
                text-zinc-300
                transition
                duration-300
                hover:text-violet-400">
              {link.title}
              <span className="
                absolute
                -bottom-2
                left-0
                h-[2px]
                w-0
                bg-violet-500
                transition-all
                duration-300
                group-hover:w-full"/>
            </a>
          ))}
        </nav>
        

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="border-t border-white/10 bg-zinc-950/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-6 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-300 transition hover:text-violet-400"
              >
                {link.title}
              </a>
            ))}

            <a
              href="#"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 py-3 text-center font-medium text-white"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}