import { motion } from "framer-motion";

function renderLine(line) {
  return line.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith("*") ? (
      <span key={i} className="accent text-muted">
        {part.slice(1, -1)}
      </span>
    ) : (
      part
    ),
  );
}

// Each line slides up from behind a mask. Use *word* for the serif accent.
export default function TextReveal({
  lines,
  as = "h2",
  className = "",
  delay = 0,
  immediate = false,
}) {
  const Tag = motion[as];
  const trigger = immediate
    ? { initial: "hidden", animate: "show" }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.4 } };

  return (
    <Tag
      className={className}
      {...trigger}
      transition={{ staggerChildren: 0.09, delayChildren: delay }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] pr-[0.06em]">
          <motion.span
            className="block"
            variants={{ hidden: { y: "110%" }, show: { y: "0%" } }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderLine(line)}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
