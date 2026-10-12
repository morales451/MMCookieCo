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
    <section id="faq" className="bg-vanilla py-24 md:py-32" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div>
          <h2 id="faq-title" className="display text-[clamp(3rem,7vw,5.5rem)] text-choc md:sticky md:top-28">
            Good to know
          </h2>
          <p className="mt-6 max-w-[34ch] text-lg leading-relaxed text-choc">
            A few of the things people ask before they order. If you don't see yours,{' '}
            <a href="#order" className="font-bold underline decoration-choc/40 hover:decoration-choc">
              send us a note
            </a>
            .
          </p>
        </div>

        <div className="divide-y-2 divide-choc/15 border-y-[3px] border-choc">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-xl py-4 text-[1.35rem] font-extrabold leading-tight text-choc marker:hidden [&::-webkit-details-marker]:hidden">
                <span>{q}</span>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-7 w-7 shrink-0 rounded-full bg-pink p-1.5 text-choc transition-transform duration-300 ease-out group-open:rotate-45"
                >
                  <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="max-w-[60ch] pb-5 text-lg leading-relaxed text-choc/85">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
