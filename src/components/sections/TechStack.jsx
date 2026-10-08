import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import techstack from "../../data/techstack";

const ease = [0.22, 1, 0.36, 1];

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035 } },
};

const pill = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

// Sits right after Expertise, so it has no section number of its own.
export default function TechStack() {
  return (
    <section id="stack" className="pb-28 pt-4 lg:pb-40">
      <Container>
        <SectionHeading lines={["Tech *stack.*"]} />

        <div className="mt-16 border-t border-line">
          {techstack.map((group) => (
            <div
              key={group.title}
              className="grid gap-5 border-b border-line py-9 md:grid-cols-[5rem_1fr_1.8fr] md:gap-8 lg:py-10"
            >
              <span aria-hidden="true" className="hidden md:block" />
              <h3 className="text-2xl font-extrabold leading-tight tracking-[-0.03em] lg:text-3xl">
                {group.title}
              </h3>
              <motion.ul
                variants={list}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="flex flex-wrap content-start gap-2.5"
              >
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={pill}
                    className="label cursor-default rounded-full border border-line bg-surface/60 px-4 py-2.5 text-ink-2 transition-colors duration-300 hover:border-lime hover:bg-lime hover:text-[#111]"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}