const variants = {
  tan: 'bg-tan/40',
  mauve: 'bg-mauve/35',
  beige: 'bg-beige',
};

export default function CTABanner({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  variant = 'tan',
}) {
  return (
    <section className={`${variants[variant]} py-20 md:py-24`}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        {eyebrow && (
          <p className="text-xs uppercase tracking-widest text-brown/60 font-medium">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-3 font-serif text-3xl md:text-5xl font-bold text-brown leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-5 text-brown/70 leading-relaxed">{subtitle}</p>
        )}
        {ctaLabel && ctaHref && (
          <a
            href={ctaHref}
            className="inline-block mt-8 px-8 py-3 rounded-full bg-brown text-cream font-medium tracking-wider text-sm uppercase shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card hover:bg-mauve"
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
}
