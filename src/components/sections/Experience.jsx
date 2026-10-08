import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Tag from "../ui/Tag";
import FadeIn from "../animations/FadeIn";
import experience from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-28 lg:py-40">
      <Container>
        <p className="label mb-10 text-muted">// 04. Experience</p>
        <SectionHeading lines={["Where I've *worked.*"]} />

        <div className="mt-16 border-t border-line">
          {experience.map((job) => (
            <FadeIn key={job.company}>
              <article className="grid gap-8 border-b border-line py-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
                <div>
                  <p className="label flex items-center gap-3 text-muted">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9cc70f]" />
                    </span>
                    {job.period}
                  </p>
                  <h3 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.03em] lg:text-5xl">{job.role}</h3>
                  <p className="mt-4 font-bold">{job.company}</p>
                  <p className="mt-1 text-muted">{job.org}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.tools.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>

                <ul className="space-y-5">
                  {job.points.map((point, i) => (
                    <li key={i} className="grid grid-cols-[2.5rem_1fr] leading-relaxed text-ink-2">
                      <span className="label pt-1 text-muted">{String(i + 1).padStart(2, "0")}</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}