import { Cookie } from './bake/bake.jsx';

const DOZEN = ['chocolateChip', 'funfetti', 'redVelvet', 'snickerdoodle', 'doubleChocolate', 'chocolateChip', 'funfetti', 'snickerdoodle', 'doubleChocolate', 'redVelvet', 'chocolateChip', 'funfetti'];

export default function Wholesale() {
  return (
    <section id="corporate" className="on-choc bg-choc py-24 text-vanilla md:py-32" aria-labelledby="corporate-title">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 md:grid-cols-[1fr_1.05fr] md:gap-20">
        <div>
          <h2 id="corporate-title" className="display text-[clamp(2.8rem,6vw,4.75rem)] text-pink">
            A dozen for the office. Ten dozen for the conference.
          </h2>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-vanilla/85">
            Boutique cookie boxes for offices, conferences, real-estate closings, and corporate gifting in Houston. Bulk
            pricing and custom branding available.
          </p>
          <a href="/wholesale/" className="btn-pink mt-8">
            Wholesale &amp; corporate orders
            <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
              <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* A box of a dozen, lid off, seen from above. */}
        <div className="rounded-[1.75rem] bg-pink p-3 shadow-lift sm:p-4" aria-hidden="true">
          <div className="grid grid-cols-4 gap-1.5 rounded-[1.25rem] bg-vanilla p-3 sm:gap-2 sm:p-4">
            {DOZEN.map((flavor, i) => (
              <Cookie key={i} flavor={flavor} seed={i * 7 + 2} className="w-full" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
