import { useState } from 'react';

const tiers = [
  {
    label: 'Solo',
    serving: '4 cookies / month',
    price: '$15',
    perks: ['One flavor of your choice', 'Hand-packed each week', 'Cancel anytime'],
  },
  {
    label: 'Duo',
    serving: '8 cookies / month',
    price: '$28',
    perks: ['Mix two flavors', 'A small surprise each month', 'Cancel anytime'],
    featured: true,
  },
  {
    label: 'Family',
    serving: '1 dozen / month',
    price: '$40',
    perks: ['Mix three flavors', 'First dibs on seasonal flavors', 'Cancel anytime'],
  },
];

export default function CookieClub() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true));
  }

  return (
    <section id="club" className="py-28 md:py-36 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-tan font-medium">
            The Cookie Club
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-brown leading-tight">
            Fresh cookies, every month.
          </h2>
          <p className="mt-6 text-brown/70 max-w-xl mx-auto leading-relaxed">
            A small monthly subscription for the people who can't stop ordering
            anyway. Pick your size, pick your flavors, and we handle the rest.
          </p>
          <p className="mt-3 inline-block text-xs uppercase tracking-widest text-mauve font-medium bg-mauve/15 px-4 py-1 rounded-full">
            Launching soon — join the waitlist
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {tiers.map((tier) => (
            <div
              key={tier.label}
              className={`relative bg-beige/40 rounded-2xl p-8 md:p-10 flex flex-col shadow-soft ${
                tier.featured ? 'md:-translate-y-3 md:shadow-card bg-cream ring-1 ring-mauve/30' : ''
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mauve text-cream text-xs uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="font-serif text-3xl font-semibold text-brown">
                {tier.label}
              </h3>
              <p className="mt-1 text-sm text-brown/55 uppercase tracking-wider">
                {tier.serving}
              </p>

              <p className="mt-6 font-serif text-4xl font-bold text-brown">
                {tier.price}
                <span className="text-sm font-sans font-normal text-brown/55 tracking-wider">
                  {' '}
                  / mo
                </span>
              </p>

              <ul className="mt-7 space-y-2.5 text-sm text-brown/70 flex-1">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <span className="text-mauve mt-1">✦</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto text-center">
          {submitted ? (
            <div className="bg-beige/50 rounded-2xl p-8">
              <p className="text-xs uppercase tracking-widest text-tan font-medium">
                You're In
              </p>
              <h3 className="mt-3 font-serif text-2xl text-brown">
                We'll be in touch.
              </h3>
              <p className="mt-3 text-brown/70 leading-relaxed text-sm">
                We'll email you the moment the Cookie Club opens up — usually
                with a small founder's discount baked in.
              </p>
            </div>
          ) : (
            <form
              name="club-waitlist"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              className="space-y-3"
            >
              <input type="hidden" name="form-name" value="club-waitlist" />
              <p hidden>
                <label>
                  Don't fill: <input name="bot-field" />
                </label>
              </p>
              <p className="text-sm text-brown/65 mb-2">
                Drop your email and we'll let you know the second it goes live.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  autoComplete="email"
                  className="flex-1 rounded-full border border-brown/15 bg-cream px-5 py-3 text-brown placeholder:text-brown/35 focus:border-mauve focus:ring-2 focus:ring-mauve/40 outline-none transition-colors text-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-brown text-cream font-medium tracking-wider text-xs uppercase shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card hover:bg-mauve whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
