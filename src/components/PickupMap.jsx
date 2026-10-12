const MAP_QUERY = 'Montie+Beach+Park,+Houston,+TX+77009';
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
const EMBED_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&z=15&output=embed`;

const details = [
  { term: 'Neighborhood', value: 'Houston Heights, TX 77009' },
  { term: 'Local delivery', value: 'Available within Houston for a small fee, confirmed at order.' },
  { term: 'Pickup window', value: 'Confirmed in your order details, typically afternoons and weekends.' },
];

export default function PickupMap() {
  return (
    <section id="pickup" className="bg-pink py-24 md:py-32" aria-labelledby="pickup-title">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="pickup-title" className="display text-[clamp(3rem,7vw,5.5rem)] text-choc">
            Where to find us.
          </h2>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-choc">
            Pickup is by appointment in the <strong>Houston Heights</strong> area, near{' '}
            <strong>Montie Beach Park (77009)</strong>. We'll send the exact address when we confirm your order.
          </p>
          <dl className="mt-8 divide-y-2 divide-choc/20 border-y-[3px] border-choc">
            {details.map((d) => (
              <div key={d.term} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="font-extrabold text-choc">{d.term}</dt>
                <dd className="text-choc">{d.value}</dd>
              </div>
            ))}
          </dl>
          <a href={MAP_LINK} target="_blank" rel="noreferrer" className="btn-choc mt-8">
            Open in Google Maps
          </a>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-vanilla shadow-lift ring-[6px] ring-choc md:aspect-[4/5] lg:aspect-square">
          {/* Drawn fallback: shows if the embed is blocked or still loading. */}
          <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <rect width="400" height="400" fill="#FFF4E6" />
            <g stroke="#2B1610" strokeOpacity="0.22" strokeWidth="9" strokeLinecap="round" fill="none">
              <path d="M-10 120 H410 M-10 260 H410 M90 -10 V410 M300 -10 V410" />
              <path d="M-10 330 Q160 300 410 340" strokeWidth="14" strokeOpacity="0.3" />
            </g>
            <path d="M150 150 Q210 130 255 165 Q275 215 230 240 Q170 250 145 210 Q130 175 150 150Z" fill="#5CCB8F" opacity="0.55" />
            <text x="200" y="285" textAnchor="middle" fontFamily="'Leckerli One', cursive" fontSize="22" fill="#2B1610">Montie Beach Park</text>
            <circle cx="200" cy="190" r="16" fill="#F06A93" stroke="#2B1610" strokeWidth="4" />
          </svg>
          <iframe
            title="MM Cookie Co. pickup area, Houston Heights"
            src={EMBED_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
