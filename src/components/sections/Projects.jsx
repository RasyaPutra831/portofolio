import Container from "../ui/Container";
import projects from "../../data/Projects";
import FadeIn from "../animations/FadeIn";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { Smartphone } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <Container>

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[6px] text-violet-400">
            Featured Projects
          </p>

          <p className="text-lg leading-10 text-zinc-400">
            A selection of projects that showcase my skills in software
            development, mobile application development, and data-driven
            solutions.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project, index) => (
            <FadeIn
              key={project.id}
              delay={index*0.2}>
            <div
              key={project.id}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-zinc-900/60
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-3
                hover:border-violet-500/40
                hover:shadow-xl
                hover:shadow-violet-500/10
              "
            >

              {/* Placeholder */}

              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-110
                  "
                />

              </div>

              <div className="space-y-5 p-7">

                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="leading-7 text-zinc-400">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-3">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-zinc-800
                        px-3
                        py-1
                        text-xs
                        text-zinc-300
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Footer */}

                <div className="flex items-center justify-between pt-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      text-zinc-300
                      transition
                      hover:text-violet-400
                    "
                  >
                    <FaGithub size={18} />

                    GitHub
                  </a>

                  {project.demo ? (

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        text-violet-400
                        transition
                        hover:text-violet-300
                      "
                    >
                      Live Demo

                      <LuExternalLink size={18} />
                    </a>

                  ) : (

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-violet-500/20
                        bg-violet-500/10
                        px-3
                        py-1
                        text-xs
                        text-violet-300
                      "
                    >
                      <Smartphone size={14} />

                      Mobile App
                    </div>

                  )}

                </div>

              </div>

            </div>
            </FadeIn>
          ))}

        </div>

      </Container>
    </section>
  );
}