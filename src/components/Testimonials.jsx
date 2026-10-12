const testimonials = [
  {
    name: 'Alexis Morales',
    quote:
      "Okay these are just good. Like, really good. I made my wife try one with zero context and her whole face changed. We've already ordered three times this month and I'm not even sorry.",
  },
  {
    name: 'Wendy Martinez',
    quote:
      "Surprised my husband with a cookie cake for his birthday and it was gone before we even cut into it properly. He's usually not big on sweets and he had three slices. Already planning the next one for our anniversary.",
  },
  {
    name: 'Ana Rojas',
    quote:
      "I'm not exaggerating when I say I almost cried. They taste like the cookies my mom used to make on Sunday afternoons. I don't know how she does it, but every bite feels like coming home.",
  },
  {
    name: 'Eric Rodriguez',
    quote:
      "Picked some up for my husband's birthday. Wasn't planning to try one. Ate four standing in the parking lot before I made it home.",
  },
  {
    name: 'Francesca Rodriguez',
    quote:
      "The chocolate chip is the one for me. Crispy edges, soft middle, that little flake of salt on top. You can tell whoever's making these actually cares — they don't taste mass-produced, they taste like someone's grandma figured it out.",
  },
  {
    name: 'Matt Allen',
    quote: 'Best cookies in Houston, hands down. Already trying to invent reasons to order more.',
  },
];

export default function Testimonials() {
  const [lead, ...rest] = testimonials;
  return (
    <section id="reviews" className="bg-vanilla py-24 md:py-32" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="reviews-title" className="display max-w-[16ch] text-[clamp(2.6rem,6vw,4.5rem)] text-choc">
          From friends, neighbors, and the regulars who keep the kitchen busy.
        </h2>

        <figure className="mt-14 border-t-[3px] border-choc pt-10">
          <blockquote className="display max-w-[30ch] text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.08] text-choc">
            “{lead.quote}”
          </blockquote>
          <figcaption className="mt-6 font-script text-[2rem] text-pink-deep">{lead.name}</figcaption>
        </figure>

        <div className="mt-16 gap-12 md:columns-2 lg:columns-3">
          {rest.map((t) => (
            <figure key={t.name} className="mb-12 break-inside-avoid border-t-2 border-choc/20 pt-6">
              <blockquote className="text-lg leading-relaxed text-choc">“{t.quote}”</blockquote>
              <figcaption className="mt-4 font-script text-[1.5rem] text-pink-deep">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
