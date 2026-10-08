import Container from "../ui/Container";
import FadeIn from "../animations/FadeIn";
import TextReveal from "../animations/TextReveal";
import { site } from "../../data/site";

const facts = [
  { label: "Location", value: site.location },
  { label: "Primary focus", value: site.focus },
  { label: "Currently", value: "Data Analyst Intern, ESDM" },
  { label: "Studying", value: "Information Systems, President University" },
];

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-40">
      <Container>
        <p className="label mb-10 text-muted">// 01. About</p>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <TextReveal
            lines={["Clean data,", "*clear*", "decisions."]}
            className="display text-[13vw] sm:text-6xl lg:text-7xl"
          />

          <div>
            <FadeIn>
              <p className="text-xl leading-relaxed text-ink-2 lg:text-2xl lg:leading-relaxed">
                I like the part of a project where scattered spreadsheets become one
                reliable source, and that source becomes a dashboard or an app people
                actually use. Most of my work sits between data analysis and software:
                cleaning and modelling the data, then building the tool around it.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="label text-muted">{f.label}</dt>
                    <dd className="label mt-2 font-bold leading-relaxed text-ink">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
