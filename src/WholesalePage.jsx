import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import RosetteBorder from './components/bake/RosetteBorder.jsx';
import { RosetteSprite } from './components/bake/bake.jsx';
import { NachoPack } from './components/bake/Nachos.jsx';

const BOXES = [
  {
    name: 'The Office Drop',
    dozens: 2,
    price: '$72',
    note: 'Perfect for a small team meeting, a client touch, or a Friday afternoon win.',
    perks: ['2 dozen mixed flavors', 'Branded gift tag', 'Ribbon and tissue'],
  },
  {
    name: 'The Team Box',
    dozens: 4,
    price: '$135',
    note: 'Great for a department, a client closing, or a thoughtful holiday round.',
    perks: ['4 dozen mixed flavors', 'Custom card insert', 'Hand-tied packaging'],
  },
  {
    name: 'The Event Spread',
    dozens: 8,
    price: '$255',
    note: 'Built for conferences, weddings, launches, and offices that want to be remembered.',
    perks: ['8 dozen mixed flavors', 'Custom branding options', 'Tray or boxed delivery'],
  },
];

const USES = [
  { term: 'Real estate closings', value: 'A sweet reminder of the keys you just handed over.' },
  { term: 'Client thank-yous', value: 'The kind of gift that gets a screenshot.' },
  { term: 'Office celebrations', value: 'Birthdays, retirements, hitting the quarterly number.' },
  { term: 'Conferences and events', value: "A welcome that's warmer than a swag bag." },
  { term: 'Holiday gifting', value: 'Bulk-friendly without ever feeling bulk.' },
  { term: 'Wedding welcomes', value: 'Hotel-room favors that feel hand-picked.' },
];

const DOUGHS = ['#E1A862', '#F1CF91', '#8E1F2C', '#E3B678', '#5A3222', '#E1A862'];

// A dozen box from above, kept light: twelve cookies as flat discs, one box per dozen.
function MiniDozen() {
  return (
    <svg viewBox="0 0 64 48" className="w-[3.4rem]">
      <rect x="1" y="1" width="62" height="46" rx="6" fill="#FFF4E6" stroke="#2B1610" strokeOpacity="0.25" strokeWidth="2" />
      {Array.from({ length: 12 }).map((_, i) => (
        <circle key={i} cx={10 + (i % 4) * 14.7} cy={10 + Math.floor(i / 4) * 14} r="6.2" fill={DOUGHS[(i + Math.floor(i / 4)) % DOUGHS.length]} />
      ))}
    </svg>
  );
}
const TABLE_MAX = 48;

function earliest(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export default function WholesalePage() {
  const [company, setCompany] = useState('');
  const [guests, setGuests] = useState('40');
  const [product, setProduct] = useState('Cookie Nachos packs');
  const [quantity, setQuantity] = useState('');
  const n = Math.max(0, Math.min(500, parseInt(guests, 10) || 0));
  const drawn = Math.min(n, TABLE_MAX);

  function startQuote(e) {
    e.preventDefault();
    setProduct('Cookie Nachos packs');
    if (n) setQuantity(`${n} guests`);
    document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => document.getElementById('contact-name')?.focus({ preventScroll: true }), 700);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <RosetteSprite />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-choc focus:px-5 focus:py-3 focus:text-vanilla">
        Skip to content
      </a>
      <Header page="wholesale" />
      <main id="main" className="flex-1">
        {/* The corporate version of the dip: your company's name on every pack. */}
        <section className="bg-pink pb-20 pt-12 md:pb-28 md:pt-16" aria-labelledby="ws-title">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[1fr_1.05fr] md:gap-14">
            <div>
              <h1 id="ws-title" className="display text-[clamp(3rem,7.5vw,6rem)] text-choc">
                Cookie Nachos for the whole office.
              </h1>
              <p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-choc">
                Cookie chips and a cup of buttercream dip, packed one per guest, for team events, conferences, client
                meetings, and closings across Houston. Hand-baked, delivered ready to hand out.
              </p>
              <form onSubmit={startQuote} className="mt-8 grid max-w-md gap-5" aria-label="Start a corporate quote">
                <label className="block">
                  <span className="label text-choc">Company name, for the sticker</span>
                  <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    maxLength={28}
                    placeholder="Your company"
                    autoComplete="organization"
                    className="field text-2xl font-extrabold"
                  />
                </label>
                <label className="block">
                  <span className="label text-choc">How many guests?</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    min="1"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="field w-32 text-2xl font-extrabold tabular"
                  />
                </label>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <button type="submit" className="btn-choc text-lg">
                    {n ? `Quote ${n} packs` : 'Get a quote'}
                  </button>
                  <a href="#boxes" className="font-bold text-choc underline decoration-choc/40 hover:decoration-choc">
                    Or see cookie boxes
                  </a>
                </div>
              </form>
            </div>
            <NachoPack sticker={company.trim() || 'Your company'} className="mx-auto w-full max-w-[36rem] rotate-2" />
          </div>
        </section>

        <RosetteBorder frosting="strawberry" />

        <section className="on-choc bg-choc py-24 text-vanilla md:py-32" aria-labelledby="table-title">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end">
              <h2 id="table-title" className="display text-[clamp(2.8rem,6.5vw,5rem)] text-pink">
                {n ? `${n} guests, ${n} packs.` : 'One pack per guest.'}
              </h2>
              <p className="max-w-[44ch] text-lg leading-relaxed text-vanilla/90 md:pb-2">
                No shared platter, no tongs, nobody hovering over a tray. Each pack holds its own chips and its own cup of
                dip, so it works on a conference table, at a desk, or in a goody bag. Chip and dip flavors rotate.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-4 gap-2 sm:grid-cols-6 sm:gap-3 lg:grid-cols-8" aria-hidden="true">
              {Array.from({ length: drawn }).map((_, i) => (
                <NachoPack key={i} simple seed={i + 3} className={`w-full ${i % 2 ? 'rotate-2' : '-rotate-2'}`} />
              ))}
            </div>
            {n > TABLE_MAX && (
              <p className="mt-6 text-lg font-bold text-pink">
                …and {n - TABLE_MAX} more. We'll quote the whole table.
              </p>
            )}
          </div>
        </section>

        <section id="boxes" className="bg-dough py-24 md:py-32" aria-labelledby="boxes-title">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 id="boxes-title" className="display max-w-[16ch] text-[clamp(2.8rem,6.5vw,5rem)] text-choc">
              Cookie boxes, three sizes, fully customizable.
            </h2>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-choc">
              Mix any of our signature flavors. Add your branding, gift tags, or a custom note in each box.
            </p>
            <ul className="mt-14 divide-y-2 divide-choc/20 border-y-[3px] border-choc">
              {BOXES.map((b) => (
                <li key={b.name} className="grid gap-5 py-8 md:grid-cols-[13rem_1fr_auto] md:items-center md:gap-10">
                  <div className="flex flex-wrap gap-1.5" aria-hidden="true">
                    {Array.from({ length: b.dozens }).map((_, i) => (
                      <MiniDozen key={i} />
                    ))}
                  </div>
                  <div>
                    <h3 className="display text-[2.1rem] text-choc">
                      {b.name} <span className="font-bold tabular">· {b.dozens} dozen</span>
                    </h3>
                    <p className="mt-2 max-w-[52ch] leading-relaxed text-choc">{b.note}</p>
                    <p className="mt-2 font-semibold text-choc">{b.perks.join(' · ')}</p>
                  </div>
                  <p className="text-[2.1rem] font-extrabold tabular text-choc">{b.price}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-vanilla py-24 md:py-28" aria-labelledby="uses-title">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr]">
            <h2 id="uses-title" className="display text-[clamp(2.8rem,6.5vw,5rem)] text-choc">
              Made for the moments that matter.
            </h2>
            <dl className="grid gap-x-10 sm:grid-cols-2">
              {USES.map((u) => (
                <div key={u.term} className="border-t-[3px] border-choc py-5">
                  <dt className="text-xl font-extrabold text-choc">{u.term}</dt>
                  <dd className="mt-1 leading-relaxed text-choc">{u.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <RosetteBorder frosting="vanilla" />

        <section id="inquiry" className="bg-dough py-24 md:py-32" aria-labelledby="inquiry-title">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <h2 id="inquiry-title" className="display text-[clamp(2.8rem,6.5vw,5rem)] text-choc">
                Tell us about your event.
              </h2>
              <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-choc">
                Fill in a few details and we'll send pricing, availability, and a sample mockup within a business day.
                We invoice once your order is confirmed.
              </p>
            </div>
            <form name="wholesale-inquiry" method="POST" action="/thanks/" data-netlify="true" netlify-honeypot="bot-field" className="space-y-7">
              <input type="hidden" name="form-name" value="wholesale-inquiry" />
              <p hidden>
                <label>
                  Don't fill: <input name="bot-field" />
                </label>
              </p>
              <div className="grid gap-7 sm:grid-cols-2 sm:gap-x-10">
                <label className="block">
                  <span className="block font-extrabold text-choc">Company or organization <span aria-hidden="true">*</span></span>
                  <input name="company" required autoComplete="organization" value={company} onChange={(e) => setCompany(e.target.value)} className="field" />
                </label>
                <label className="block">
                  <span className="block font-extrabold text-choc">Contact name <span aria-hidden="true">*</span></span>
                  <input id="contact-name" name="contact-name" required autoComplete="name" className="field" />
                </label>
                <label className="block">
                  <span className="block font-extrabold text-choc">Email <span aria-hidden="true">*</span></span>
                  <input name="email" type="email" required autoComplete="email" className="field" />
                </label>
                <label className="block">
                  <span className="block font-extrabold text-choc">Phone</span>
                  <input name="phone" type="tel" autoComplete="tel" className="field" />
                </label>
                <label className="block">
                  <span className="block font-extrabold text-choc">What are you after? <span aria-hidden="true">*</span></span>
                  <select name="product" required value={product} onChange={(e) => setProduct(e.target.value)} className="field">
                    <option>Cookie Nachos packs</option>
                    <option>Cookie boxes</option>
                    <option>Both</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="block">
                  <span className="block font-extrabold text-choc">Guests or quantity <span aria-hidden="true">*</span></span>
                  <input name="quantity" required value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="e.g. 60 guests, or 4 dozen" className="field" />
                </label>
                <label className="block">
                  <span className="block font-extrabold text-choc">Occasion <span aria-hidden="true">*</span></span>
                  <select name="occasion" required defaultValue="" className="field">
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Real estate closing</option>
                    <option>Client gift</option>
                    <option>Office celebration</option>
                    <option>Conference or event</option>
                    <option>Holiday gifting</option>
                    <option>Wedding</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="block">
                  <span className="block font-extrabold text-choc">When do you need them?</span>
                  <input name="needed-by" type="date" min={earliest(3)} className="field" />
                </label>
              </div>
              <label className="block">
                <span className="block font-extrabold text-choc">Anything we should know?</span>
                <textarea name="details" rows={4} placeholder="Branding, dietary restrictions, delivery details, who should receive the invoice" className="field" />
              </label>
              <button type="submit" className="btn-choc w-full text-lg sm:w-auto">
                Send inquiry
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
