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
