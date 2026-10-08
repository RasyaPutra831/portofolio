import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../ui/Container";
import TextReveal from "../animations/TextReveal";
import FadeIn from "../animations/FadeIn";
import { site, socials } from "../../data/site";

// Statement + contact share one dark block; the page fades from paper to night as it enters.
export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.35"] });
  const fade = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative text-white">
      <motion.div aria-hidden="true" className="absolute inset-0 bg-night" style={{ opacity: fade }} />
      <div className="relative">
        <section aria-label="Statement" className="py-32 text-center lg:py-48">
          <Container>
            <TextReveal
              as="p"
              lines={[
                "“A chart is only",
                "useful if it",
                "*changes a decision.*”",
              ]}
              className="display mx-auto text-[10vw] sm:text-6xl lg:text-7xl [&_.accent]:text-lime"
            />
            <FadeIn delay={0.2}>
              <p className="label mt-10 text-white/50">Clean data first. Code second.</p>
            </FadeIn>
          </Container>
        </section>

        <section id="contact" className="pb-10 pt-16 lg:pt-24">
          <Container>
            <p className="label mb-10 text-lime">// 05. Get in touch</p>
            <TextReveal
              lines={["Have data that", "needs a tool?", "*Let's build it.*"]}
              className="display text-[10vw] sm:text-7xl lg:text-8xl [&_.accent]:text-lime"
            />

            <FadeIn delay={0.1} className="mt-16 grid gap-12 border-t border-white/15 pt-12 md:grid-cols-2">
              <div>
                <p className="label text-white/50">Email</p>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}&su=${encodeURIComponent("Portfolio Inquiry")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block break-all text-2xl font-bold underline decoration-lime decoration-2 underline-offset-8 transition-colors hover:text-lime lg:text-3xl"
                >
                  {site.email}
                </a>
                <p className="mt-6 max-w-sm leading-relaxed text-white/60">
                  Open to data analyst and software developer opportunities, and to
                  collaborating on projects.
                </p>
              </div>

              <div className="md:justify-self-end">
                <p className="label text-white/50">Elsewhere</p>
                <ul className="mt-3 space-y-3">
                  {[...socials, { label: "Resume (PDF)", href: site.resume }].map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-3 text-xl font-bold transition-colors hover:text-lime"
                      >
                        {s.label}
                        <span aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <footer className="label mt-28 flex flex-col justify-between gap-3 border-t border-white/15 pt-6 text-white/40 sm:flex-row">
              <span>© {new Date().getFullYear()} {site.name}</span>
              <a href="#home" className="hover:text-white">Back to top ↑</a>
            </footer>
          </Container>
        </section>
      </div>
    </div>
  );
}