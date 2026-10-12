import { NachoPack } from './bake/Nachos.jsx';

const facts = [
  { term: 'Packed', value: 'One per guest: cookie chips and their own cup of buttercream dip, together in one pack.' },
  { term: 'Made for', value: 'Office parties, conferences, client meetings, real-estate closings, showers, and team events.' },
  { term: 'Flavors', value: "Chip and dip flavors rotate. Ask what's baking for your date." },
  { term: 'Pricing', value: 'Priced per pack and quoted by headcount, with pickup in the Heights or local delivery.' },
  { term: 'Reply', value: 'Within 24 hours of your request, with per-pack pricing for your headcount and date.' },
];

export default function EventPacks() {
  return (
    <section id="events" className="on-choc bg-choc pb-24 pt-28 text-vanilla md:pb-32 md:pt-36" aria-labelledby="events-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_1fr] md:gap-16">
          <NachoPack className="mx-auto w-full max-w-[34rem] -rotate-3" />
          <div>
            <h2 id="events-title" className="display text-[clamp(3rem,7vw,5.5rem)] text-pink">
              One pack per guest.
            </h2>
            <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-vanilla/90">
              No shared platter, no tongs. Every guest gets their own Cookie Nachos to grab between
              sessions or take back to their desk.
            </p>
            <dl className="mt-8 divide-y-2 divide-vanilla/15 border-y-2 border-vanilla/25">
              {facts.map((f) => (
                <div key={f.term} className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-6">
                  <dt className="font-extrabold text-pink">{f.term}</dt>
                  <dd className="text-vanilla/90">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="#top"
                className="btn-pink"
                onClick={() => setTimeout(() => document.getElementById('nacho-guests')?.focus({ preventScroll: true }), 500)}
              >
                Get a Cookie Nachos quote
              </a>
              <a href="/wholesale/" className="font-bold text-vanilla underline decoration-vanilla/40 hover:decoration-vanilla">
                Wholesale &amp; corporate orders
              </a>
            </div>
          </div>
        </div>

        {/* Twenty-four guests, twenty-four packs: what a table looks like. */}
        <figure className="mt-24 md:mt-32">
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 sm:gap-3" aria-hidden="true">
            {Array.from({ length: 24 }).map((_, i) => (
              <NachoPack key={i} simple seed={i + 3} className={`w-full ${i % 2 ? 'rotate-2' : '-rotate-2'}`} />
            ))}
          </div>
          <figcaption className="mt-6 display text-[clamp(1.8rem,4vw,2.6rem)] text-vanilla">
            Twenty-four guests, twenty-four packs.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
