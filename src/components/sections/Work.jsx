import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import BrowserFrame from "../ui/BrowserFrame";
import Tag from "../ui/Tag";
import FadeIn from "../animations/FadeIn";
import projects from "../../data/Projects";

function Meta({ index, project }) {
  return (
    <div className="label flex items-center justify-between text-muted">
      <span>
        {String(index + 1).padStart(2, "0")} / {project.category}
      </span>
      <span>{project.year}</span>
    </div>
  );
}

function Links({ project }) {
  if (!project.github && !project.demo) return null;
  return (
    <div className="mt-6 flex gap-6">
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noreferrer" className="label font-bold underline decoration-lime decoration-2 underline-offset-4 hover:decoration-ink">
          Live demo ↗
        </a>
      )}
      {project.github && (
        <a href={project.github} target="_blank" rel="noreferrer" className="label font-bold underline decoration-line decoration-2 underline-offset-4 hover:decoration-ink">
          Source ↗
        </a>
      )}
    </div>
  );
}

function Details({ project, index, large = false }) {
  return (
    <div>
      <Meta index={index} project={project} />
      <h3 className={`display mt-4 ${large ? "text-4xl lg:text-5xl" : "text-3xl"}`}>
        {project.title}
      </h3>
      <p className="mt-4 max-w-lg leading-relaxed text-ink-2">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <Links project={project} />
    </div>
  );
}

export default function Work() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="py-28 lg:py-40">
      <Container>
        <p className="label mb-10 text-muted">// 02. Work</p>
        <SectionHeading
          lines={["Selected *work.*"]}
          aside="Dashboards, data analysis, machine learning, and the web and mobile apps built around them."
        />

        <FadeIn className="mt-20">
          <article className="group grid items-center gap-10 lg:grid-cols-[1.45fr_1fr] lg:gap-14">
            <BrowserFrame src={featured.image} alt={featured.title} fit={featured.fit} />
            <Details project={featured} index={0} large />
          </article>
        </FadeIn>

        <div className={`mt-28 grid gap-x-14 gap-y-24 md:grid-cols-2 ${rest.length % 2 === 0 ? "md:pb-32" : ""}`}>
          {rest.map((project, i) => (
            <FadeIn key={project.id} className={i % 2 === 1 ? "md:translate-y-32" : ""}>
              <article className="group">
                <BrowserFrame src={project.image} alt={project.title} fit={project.fit} />
                <div className="mt-8">
                  <Details project={project} index={i + 1} />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
