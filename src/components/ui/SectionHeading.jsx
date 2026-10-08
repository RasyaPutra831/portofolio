import TextReveal from "../animations/TextReveal";

// lines: array of strings; wrap a word in *asterisks* to render it as the italic serif accent.
export default function SectionHeading({ lines, aside, className = "" }) {
  return (
    <div
      className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${className}`}
    >
      <TextReveal
        as="h2"
        lines={lines}
        className="display text-[13vw] sm:text-6xl lg:text-7xl"
      />
      {aside && (
        <p className="label max-w-xs leading-relaxed text-muted lg:pb-2 lg:text-right">
          {aside}
        </p>
      )}
    </div>
  );
}
