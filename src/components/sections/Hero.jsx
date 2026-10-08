import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import TextReveal from "../animations/TextReveal";
import profileImage from "../../assets/images/profile.jpeg";
import { site } from "../../data/site";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh flex-col pt-28 lg:pt-32">
      <Container className="flex flex-1 flex-col">
        <div className="grid flex-1 items-center gap-14 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <h1 className="sr-only">Rasya Putra — Data-minded software developer</h1>
            <div aria-hidden="true" className="relative w-fit">
              <TextReveal
                as="div"
                immediate
                delay={0.15}
                lines={["Data\u2011minded", "*software*", "Developer."]}
                className="display whitespace-nowrap text-[11.5vw] sm:text-7xl lg:text-[5.6rem] xl:text-[6.2rem]"
              />
              <motion.span
                className="absolute -bottom-1 left-0 h-[5px] w-full origin-left bg-lime"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.9, ease }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
              className="mt-10 max-w-xl text-lg leading-relaxed text-ink-2"
            >
              Information Systems student and Data Analyst Intern at Badan Geologi
              (ESDM), building dashboards, web tools, and mobile apps that turn raw
              data into decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Button href="#work" arrow>
                View selected work
              </Button>
              <Button href={site.resume} download variant="outline">
                Download CV
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease }}
            className="relative mx-auto w-full max-w-[22rem] lg:mr-0"
          >
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-line bg-paper-2" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-paper-2 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.45)]">
              <img
                src={profileImage}
                alt="Portrait of Rasya Putra"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-14 flex items-center justify-between border-t border-line py-6"
        >
          <span className="label text-muted">Scroll to explore</span>
          <span className="label text-muted">
            {site.location}
          </span>
        </motion.div>
      </Container>
    </section>
  );
}
