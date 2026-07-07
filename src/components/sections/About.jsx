import Container from "../ui/Container";
import FadeIn from "../animations/FadeIn";

const skills = [
  "Flutter",
  "Dart",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "Supabase",
  "SQL",
  "Machine Learning",
  "Data Analytics",
  "PostgreSQL",
  "Excel",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <Container>

        {/* Heading */}
        <FadeIn>
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[6px] text-violet-400">
            About Me
          </p>

          <p className="mb-8 text-lg leading-10 text-zinc-400">
            I'm an Information Systems student with a strong passion for Web Developer, Data Science, and technology-driven problem solving. I enjoy exploring how data and technology can be transformed into practical solutions that make everyday tasks more efficient and meaningful.
          </p>
          <p className="text-lg leading-10 text-zinc-400">
            My experience includes developing dashboards, mobile applications, and AI-powered features through academic and personal projects. I believe every project is an opportunity to learn something new and improve both my technical and problem-solving skills. Currently, I'm focused on expanding my expertise in data analytics, machine learning, and artificial intelligence while seeking opportunities to create technology that delivers real impact.
          </p>
        </div>
        </FadeIn>
        {/* Tech Stack */}

        <div className="mt-24">

          <p className="mb-12 text-center text-sm uppercase tracking-[6px] text-violet-400">
            Tech Stack
          </p>

          <FadeIn delay={0.2}>
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4">

  {skills.map((skill) => (
    <span
      key={skill}
      className="
        rounded-full
        border
        border-white/10
        bg-zinc-900/60
        px-5
        py-3
        text-sm
        font-medium
        text-zinc-300
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-violet-500/40
        hover:bg-violet-500/10
        hover:text-white
      "
    >
      {skill}
    </span>
  ))}

</div>
</FadeIn>
        </div>
        

      </Container>
    </section>
  );
}