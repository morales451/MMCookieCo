export default function Footer() {
  return (
    <footer className="bg-chocolate text-cream">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center text-center gap-4">
        <p className="font-serif text-2xl font-semibold tracking-wide">
          MM Cookie Co
        </p>
        <p className="text-cream/80 text-sm tracking-wide">Houston, TX</p>
        <a
          href="#top"
          className="mt-2 text-sm text-bakeryPink hover:text-cream transition-colors uppercase tracking-[0.2em]"
        >
          Back to top
        </a>
        <p className="mt-4 text-cream/60 text-xs">
          © 2026 MM Cookie Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
