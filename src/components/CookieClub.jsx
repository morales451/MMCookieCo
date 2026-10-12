import { useState } from 'react';
import { Cookie } from './bake/bake.jsx';

const tiers = [
  {
    label: 'Solo',
    count: 4,
    serving: '4 cookies a month',
    price: '$15',
    perks: ['One flavor of your choice', 'Hand-packed each month', 'Cancel anytime'],
  },
  {
    label: 'Duo',
    count: 8,
    serving: '8 cookies a month',
    price: '$28',
    perks: ['Mix two flavors', 'A small surprise each month', 'Cancel anytime'],
    featured: true,
  },
  {
    label: 'Family',
    count: 12,
    serving: '1 dozen a month',
    price: '$40',
    perks: ['Mix three flavors', 'First dibs on seasonal flavors', 'Cancel anytime'],
  },
];

const ROTATION = ['chocolateChip', 'funfetti', 'snickerdoodle', 'redVelvet', 'doubleChocolate'];

export default function CookieClub() {
  const [status, setStatus] = useState('idle');

  function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.currentTarget);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    })
      .then((res) => setStatus(res.ok ? 'done' : 'error'))
      .catch(() => setStatus('error'));
  }

  return (
    <section id="club" className="bg-pink py-24 md:py-32" aria-labelledby="club-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 id="club-title" className="display text-[clamp(3rem,7vw,5.5rem)] text-choc">
            The Cookie Club, launching soon.
          </h2>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-choc">
            Fresh cookies, every month: a small subscription for the people who can't stop ordering anyway. Pick your size, pick your
            flavors, and we handle the rest.
          </p>
        </div>

        <ul className="mt-16 grid border-y-[3px] border-choc md:grid-cols-3">
          {tiers.map((tier, t) => (
            <li
              key={tier.label}
              className={`flex flex-col py-8 md:px-8 md:py-10 ${t > 0 ? 'border-t-2 border-choc/25 md:border-l-2 md:border-t-0' : ''} ${
                tier.featured ? 'md:bg-pink-soft/45' : ''
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="display text-[2.4rem] text-choc">{tier.label}</h3>
                <p className="text-choc">
                  <span className="text-[2.2rem] font-extrabold tabular">{tier.price}</span>
                  <span className="font-semibold"> / mo</span>
                </p>
              </div>
              <p className="mt-1 font-bold text-choc">
                {tier.serving}
                {tier.featured && <span className="ml-2 font-script text-[1.2rem] font-normal">most popular</span>}
              </p>
              <div className="mt-6 grid grid-cols-6 gap-1" aria-hidden="true">
                {Array.from({ length: tier.count }).map((_, i) => (
                  <Cookie key={i} flavor={ROTATION[(i + t) % ROTATION.length]} seed={i * 5 + t * 17 + 1} className="w-full" />
                ))}
              </div>
              <ul className="mt-6 space-y-2 text-choc">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5">
                    <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0" aria-hidden="true">
                      <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-12 max-w-xl">
          {status === 'done' ? (
            <div role="status">
              <h3 className="display text-[2rem] text-choc">You're on the list.</h3>
              <p className="mt-2 text-lg leading-relaxed text-choc">
                We'll email you the moment the Cookie Club opens up.
              </p>
            </div>
          ) : (
            <form name="club-waitlist" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit}>
              <input type="hidden" name="form-name" value="club-waitlist" />
              <p hidden>
                <label>
                  Don't fill: <input name="bot-field" />
                </label>
              </p>
              <label htmlFor="club-email" className="block text-lg font-bold text-choc">
                Join the waitlist and we'll tell you the second it goes live.
              </label>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <input
                  id="club-email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  autoComplete="email"
                  className="field mt-0 flex-1"
                />
                <button type="submit" className="btn-choc whitespace-nowrap" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Joining…' : 'Join the waitlist'}
                </button>
              </div>
              {status === 'error' && (
                <p className="mt-3 font-semibold text-choc" role="alert">
                  That didn't go through. Check your connection and try again, or DM us @mm_cookie_co.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
