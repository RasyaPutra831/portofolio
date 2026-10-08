import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import expertise from "../../data/expertise";

const ease = [0.22, 1, 0.36, 1];

export default function Expertise() {
  return (
    <section id="expertise" className="py-28 lg:py-40">
      <Container>
        <p className="label mb-10 text-muted">// 03. Expertise</p>
        <SectionHeading lines={["What I *do.*"]} />

        <ol className="mt-16 border-t border-line">
          {expertise.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease }}
              className="grid gap-4 border-b border-line py-10 md:grid-cols-[5rem_1fr_1.2fr] md:gap-8 lg:py-12"
            >
              <span className="font-mono text-2xl font-bold text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-3xl font-extrabold leading-tight tracking-[-0.03em] lg:text-4xl">{item.title}</h3>
              <div>
                <p className="leading-relaxed text-ink-2">{item.description}</p>
                <p className="label mt-5 text-muted">{item.tools.join("  ·  ")}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}