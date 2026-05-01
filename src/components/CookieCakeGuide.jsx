const sizes = [
  {
    label: 'Petite',
    diameter: '6"',
    serves: 'Serves 6 – 8',
    price: '$35',
    note: 'Just-the-two-of-us nights, small celebrations, surprise drop-offs.',
    accent: 'bg-lilac/50',
  },
  {
    label: 'Classic',
    diameter: '8"',
    serves: 'Serves 12 – 15',
    price: '$55',
    note: 'Birthdays, baby showers, dinner parties — our most-ordered size.',
    accent: 'bg-mauve/50',
    featured: true,
  },
  {
    label: 'Showstopper',
    diameter: '10"',
    serves: 'Serves 18 – 22',
    price: '$75',
    note: 'When the whole family is coming over and you want one cake to rule them all.',
    accent: 'bg-tan/60',
  },
];

export default function CookieCakeGuide() {
  return (
    <section id="cake-guide" className="py-28 md:py-36 bg-beige/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-tan font-medium">
            Cookie Cakes
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-brown leading-tight">
            Sizes &amp; Pricing
          </h2>
          <p className="mt-6 text-brown/70 max-w-xl mx-auto leading-relaxed">
            Choose your size, choose your flavor, add a message. Every cake is
            piped by hand and finished the morning of pickup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sizes.map((size) => (
            <div
              key={size.label}
              className={`relative bg-cream rounded-2xl shadow-soft p-8 md:p-10 flex flex-col ${
                size.featured ? 'md:-translate-y-3 md:shadow-card' : ''
              }`}
            >
              {size.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brown text-cream text-xs uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <span
                className={`inline-block self-start ${size.accent} text-brown text-xs uppercase tracking-widest font-medium px-3 py-1 rounded-full`}
              >
                {size.diameter}
              </span>

              <h3 className="mt-5 font-serif text-3xl font-semibold text-brown">
                {size.label}
              </h3>

              <p className="mt-1 text-sm text-brown/55 uppercase tracking-wider">
                {size.serves}
              </p>

              <p className="mt-5 text-brown/70 leading-relaxed flex-1">
                {size.note}
              </p>

              <p className="mt-8 font-serif text-4xl font-bold text-brown">
                {size.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl mx-auto text-center">
          <p className="text-sm text-brown/60 leading-relaxed">
            Custom designs, themes, and messages are always welcome. Need
            something larger or for a corporate order?{' '}
            <a
              href="#order"
              className="text-mauve underline-offset-4 hover:underline font-medium"
            >
              Send us a request
            </a>{' '}
            and we'll make it work.
          </p>
        </div>
      </div>
    </section>
  );
}
