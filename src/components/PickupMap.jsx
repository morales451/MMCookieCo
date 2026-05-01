const MAP_QUERY = 'Montie+Beach+Park,+Houston,+TX+77009';
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
const EMBED_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&z=15&output=embed`;

export default function PickupMap() {
  return (
    <section id="pickup" className="py-28 md:py-36 bg-beige/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-tan font-medium">
              Pickup &amp; Delivery
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-brown leading-tight">
              Where to find us.
            </h2>
            <p className="mt-6 text-brown/70 leading-relaxed text-lg">
              Pickup is by appointment in the{' '}
              <span className="text-brown font-medium">Houston Heights</span>{' '}
              area, near{' '}
              <span className="text-brown font-medium">
                Montie Beach Park (77009)
              </span>
              . We'll send the exact address when we confirm your order.
            </p>

            <dl className="mt-8 space-y-4 text-brown/75">
              <div>
                <dt className="text-xs uppercase tracking-widest text-tan font-medium">
                  Neighborhood
                </dt>
                <dd className="mt-1 font-medium text-brown">
                  Houston Heights, TX 77009
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-tan font-medium">
                  Local Delivery
                </dt>
                <dd className="mt-1">
                  Available within Houston for a small fee — confirmed at order.
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-tan font-medium">
                  Pickup Window
                </dt>
                <dd className="mt-1">
                  Confirmed in your order details, typically afternoons and
                  weekends.
                </dd>
              </div>
            </dl>

            <a
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-10 px-7 py-3 rounded-full bg-brown text-cream font-medium tracking-wider text-xs uppercase shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card hover:bg-mauve"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-card ring-1 ring-brown/10">
            <iframe
              title="MM Cookie Co. pickup area — Houston Heights"
              src={EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
