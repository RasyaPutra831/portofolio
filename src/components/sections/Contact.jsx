import Container from "../ui/Container";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FadeIn from "../animations/FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <Container>
        <FadeIn>
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[6px] text-violet-400">
            Contact
          </p>

          <h2 className="mb-6 text-5xl font-bold text-white">
            Let's Build Something Together
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg leading-9 text-zinc-400">
            I'm currently looking for internship opportunities as a Data Analyst
            or Software Developer. If you have a project, or collaboration, feel free to reach out.
          </p>

            <FadeIn delay={0.3}>
          <div className="mt-14 flex justify-center gap-6">

            <a
              href="https://github.com/RasyaPutra831"
              target="_blank"
              rel="noreferrer"
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-zinc-900
                text-xl
                text-zinc-300
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-violet-500
                hover:text-violet-400
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-rasya-putra-prakoso-7a97a3325/"
              target="_blank"
              rel="noreferrer"
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-zinc-900
                text-xl
                text-zinc-300
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-500
                hover:text-violet-400
              "
            >
              <FaLinkedin />
            </a>

            <a
                href="https://wa.me/6281318412822"
                target="_blank"
                rel="noreferrer"
                className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-zinc-900
                    text-xl
                    text-zinc-300
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-violet-500
                    hover:text-violet-400
                "
                >
                <FaWhatsapp />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mrpp717@gmail.com&su=Portfolio%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-zinc-900
                text-xl
                text-zinc-300
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-500
                hover:text-violet-400
              "
            >
              <MdEmail />
            </a>

            </div>
            </FadeIn>
        </div>
        </FadeIn>
      </Container>
    </section>
  );
}