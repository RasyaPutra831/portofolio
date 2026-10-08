import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "../../data/site";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="absolute inset-0 -bottom-6 bg-gradient-to-b from-paper via-paper/85 to-transparent backdrop-blur-[2px] [mask-image:linear-gradient(to_bottom,black_60%,transparent)]" />

      <div className="relative mx-auto flex h-18 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <a href="#home" className="leading-none">
          <span className="block text-base font-extrabold uppercase tracking-tight">
            {site.name}
          </span>
          <span className="label mt-1 block whitespace-nowrap text-[0.6rem] text-muted">{site.role}</span>
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label text-ink-2 transition-colors hover:text-ink"
            >
              {link.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <div className="hidden md:block">
            <Button href="#contact" arrow className="!px-5 !py-3">
              Let's talk
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="label rounded-full border border-line px-4 py-2.5 md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="relative mx-4 rounded-2xl border border-line bg-paper p-6 shadow-xl md:hidden"
          >
            <ul className="flex flex-col gap-5">
              {[...navLinks, { title: "Contact", href: "#contact" }].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="display text-3xl"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            <Button href={site.resume} download variant="outline" className="mt-8">
              Download CV
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}