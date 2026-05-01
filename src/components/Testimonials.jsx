const testimonials = [
  {
    name: 'Alexis Morales',
    quote:
      "Okay these are just good. Like, really good. I made my wife try one with zero context and her whole face changed. We've already ordered three times this month and I'm not even sorry.",
  },
  {
    name: 'Wendy Martinez',
    quote:
      "Got these for my daughter's birthday and they were gone in fifteen minutes. The kids loved them, but I caught my husband sneaking seconds when nobody was looking. Definitely ordering again for her next party.",
  },
  {
    name: 'Ana Rojas',
    quote:
      "I'm not exaggerating when I say I almost cried. They taste like the cookies my mom used to make on Sunday afternoons. I don't know how she does it, but every bite feels like coming home.",
  },
  {
    name: 'Eric Rodriguez',
    quote:
      'Not really a sweets guy. Tried one. Ordered a dozen the next day. Ate four standing in the kitchen before I sat down.',
  },
  {
    name: 'Francesca Rodriguez',
    quote:
      "The chocolate chip is the one for me. Crispy edges, soft middle, that little flake of salt on top. You can tell whoever's making these actually cares — they don't taste mass-produced, they taste like someone's grandma figured it out.",
  },
  {
    name: 'Matt Allen',
    quote:
      'Best cookies in Houston, hands down. Already trying to invent reasons to order more.',
  },
];

function QuoteMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7 text-mauve/70"
      fill="currentColor"
    >
      <path d="M7.17 6A4.17 4.17 0 003 10.17v3.66A2.17 2.17 0 005.17 16H8a1 1 0 001-1v-3a1 1 0 00-1-1H6.5a.5.5 0 01-.5-.5V10A2 2 0 018 8a1 1 0 100-2H7.17zm10 0A4.17 4.17 0 0013 10.17v3.66A2.17 2.17 0 0015.17 16H18a1 1 0 001-1v-3a1 1 0 00-1-1h-1.5a.5.5 0 01-.5-.5V10a2 2 0 012-2 1 1 0 100-2h-.83z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-28 md:py-36 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-tan font-medium">
            Kind Words
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-brown leading-tight">
            What people are saying
          </h2>
          <p className="mt-6 text-brown/65 max-w-xl mx-auto leading-relaxed">
            From friends, neighbors, and the regulars who keep the kitchen busy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {testimonials.map(({ name, quote }) => (
            <figure
              key={name}
              className="bg-beige/50 rounded-2xl p-8 shadow-soft flex flex-col"
            >
              <QuoteMark />
              <blockquote className="mt-4 text-brown/80 leading-relaxed flex-1">
                {quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-brown/10 font-serif italic text-brown">
                — {name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
