// Screenshots are shown at their natural aspect ratio so nothing gets cropped.
// fit="contain" is for portrait shots (e.g. mobile apps): centred on a tinted panel.
export default function BrowserFrame({ src, alt, fit = "cover", className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_24px_60px_-30px_rgb(0_0_0/0.35)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
      </div>

      {fit === "contain" ? (
        <div className="flex aspect-[16/9] items-center justify-center bg-paper-2 p-4">
          <img src={src} alt={alt} loading="lazy" className="h-full w-auto object-contain" />
        </div>
      ) : (
        <img src={src} alt={alt} loading="lazy" className="block h-auto w-full" />
      )}
    </div>
  );
}