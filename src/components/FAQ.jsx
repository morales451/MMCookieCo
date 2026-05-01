const faqs = [
  {
    q: 'How much notice do you need?',
    a: 'We ask for at least 5 days notice for cookie cakes and 3 days for dozens. Larger or fully custom orders may need a little more lead time — send the request and we\'ll confirm what works.',
  },
  {
    q: 'Where are you located? Do you deliver?',
    a: 'We bake out of Houston, TX. Pickup is the easiest option, but local delivery within Houston is available for a small fee depending on distance. We\'ll work out the details once you send your request.',
  },
  {
    q: 'What\'s the minimum order?',
    a: 'Cookies start at one dozen per flavor. Cookie cakes can be ordered as a single cake — no minimum.',
  },
  {
    q: 'Are you a nut-free kitchen?',
    a: 'We bake with peanut butter and other nuts in the same kitchen, so we cannot guarantee a fully allergen-free environment. If you have a serious allergy, please let us know in your order request and we\'ll be honest about what we can and can\'t accommodate.',
  },
  {
    q: 'How do I pay?',
    a: 'Once we confirm your order, we send a quick invoice. We accept Zelle, Venmo, Cash App, and most major cards.',
  },
  {
    q: 'Can you do custom designs and themes?',
    a: 'Absolutely — birthdays, baby showers, graduations, corporate gifts. Tell us the vibe (colors, occasion, message), and we\'ll send back a quick sketch before we bake.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-28 md:py-36 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-tan font-medium">
            Good to Know
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-brown leading-tight">
            Frequently asked
          </h2>
          <p className="mt-6 text-brown/65 max-w-xl mx-auto leading-relaxed">
            A few of the things people ask before they order. If you don't see
            yours,{' '}
            <a href="#order" className="text-mauve underline-offset-4 hover:underline font-medium">
              send us a note
            </a>
            .
          </p>
        </div>

        <div className="divide-y divide-brown/10 border-y border-brown/10">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group py-5 md:py-6"
            >
              <summary className="flex items-center justify-between gap-6 cursor-pointer list-none font-serif text-lg md:text-xl text-brown font-semibold marker:hidden">
                <span>{q}</span>
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 h-7 w-7 rounded-full bg-beige flex items-center justify-center text-brown text-lg leading-none transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-brown/70 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
