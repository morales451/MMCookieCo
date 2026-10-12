import { useEffect, useRef, useState } from 'react';
import CookieCake, { PipedMessage } from './bake/CookieCake.jsx';
import { FROSTINGS, Rosette, GlossFilter } from './bake/bake.jsx';
import { CAKE_SIZES, COOKIES } from '../data.js';
import { PICK_SIZE_EVENT, earliestDate, prefillOrder } from '../lib/prefill.js';

const PLACEHOLDER = 'Happy Birthday!';
// Piping is buttercream: letters, numbers and punctuation only.
const EMOJI = /[\p{Extended_Pictographic}\u{1F1E6}-\u{1F1FF}\u{FE0F}\u{200D}]/gu;

function Dollop({ frosting }) {
  return (
    <svg viewBox="-30 -30 60 60" className="h-10 w-10 sm:h-11 sm:w-11" aria-hidden="true">
      <defs>
        <GlossFilter id={`dollop-${frosting}`} blur={1.4} surface={3} />
      </defs>
      <g filter={`url(#dollop-${frosting})`}>
        <Rosette x={0} y={0} r={24} frosting={frosting} />
      </g>
    </svg>
  );
}

export default function CakeBuilder() {
  const [message, setMessage] = useState('');
  const [frosting, setFrosting] = useState('strawberry');
  const [size, setSize] = useState('classic');
  const [flavor, setFlavor] = useState(COOKIES[0].name);
  const [date, setDate] = useState('');
  const [pipeKey, setPipeKey] = useState(0);
  const typing = useRef(null);

  const shown = message.trim() || PLACEHOLDER;

  useEffect(() => {
    const onPick = (e) => setSize(e.detail.id);
    window.addEventListener(PICK_SIZE_EVENT, onPick);
    return () => window.removeEventListener(PICK_SIZE_EVENT, onPick);
  }, []);

  // Re-pipe when a pause in typing settles the message.
  useEffect(() => {
    clearTimeout(typing.current);
    typing.current = setTimeout(() => setPipeKey((k) => k + 1), 450);
    return () => clearTimeout(typing.current);
  }, [shown, frosting]);

  function request(e) {
    e.preventDefault();
    const s = CAKE_SIZES.find((x) => x.id === size);
    const words = message.trim() ? `"${message.trim()}"` : 'message to be decided';
    prefillOrder({
      source: 'cake',
      text: `1 ${s.label} cookie cake (${s.inches}", ${s.price}), ${flavor.toLowerCase()} cookie, ${FROSTINGS[frosting].name.toLowerCase()} frosting, piped with ${words}.`,
      date,
    });
  }

  return (
    <section id="cakes" className="relative overflow-hidden bg-pink" aria-labelledby="cakes-title">
      <div className="relative mx-auto flex min-h-[52rem] max-w-5xl flex-col items-center px-4 pb-10 pt-[7.5rem] text-center sm:justify-center sm:px-6 sm:py-10">
        <h2 id="cakes-title" className="relative z-[1] display max-w-[13ch] text-[clamp(2.25rem,6vw,4.75rem)] sm:max-w-[16ch] text-choc">
          Cookie cakes, piped with whatever you need to say.
        </h2>
        <p className="relative z-[1] mt-3 max-w-[36ch] text-base font-medium leading-snug text-choc sm:mt-4 sm:text-lg">
          Baked fresh to order in Houston. Pick up in the Heights, or we deliver locally for a small fee.
        </p>

        <div className="hero-stage w-full">
          {/* The cake is wider than the screen is tall, so its rim arcs in from the sides. */}
          <div className="hero-cake pointer-events-none" aria-hidden="true">
          <CookieCake
            frosting={frosting}
            clearCenter={0.86}
            chipsBelow={0.15}
            className="block w-full"
          />
        </div>
        <div className="relative mt-3 w-full max-w-[52rem] sm:mx-auto">
          <PipedMessage text={shown} frosting={frosting} pipeKey={pipeKey} className="mx-auto block w-full" />
          <p className="sr-only" aria-live="polite">
            Preview reads: {shown}
          </p>
        </div>

        <form
          onSubmit={request}
          className="relative mx-auto mt-3 grid w-full max-w-3xl grid-cols-[auto_1fr] gap-x-4 gap-y-4 text-left sm:mt-2 sm:grid-cols-[1fr_auto] sm:gap-x-8"
          aria-label="Build your cookie cake"
        >
          <label className="col-span-2 block">
            <span className="flex items-baseline justify-between">
              <span className="label text-choc">Your message</span>
              <span id="message-count" className="text-sm font-bold tabular text-choc">
                {message.length}/40{message.length >= 40 ? ', the most that fits' : ''}
              </span>
            </span>
            <input
              id="cake-message"
              value={message}
              onChange={(e) => setMessage(e.target.value.replace(EMOJI, ''))}
              maxLength={40}
              placeholder="Type it and watch it pipe"
              className="mt-1 block w-full border-0 border-b-[3px] border-choc bg-transparent px-0 pb-2 pt-1 text-[clamp(1.4rem,3vw,2rem)] font-bold text-choc placeholder:font-semibold placeholder:text-choc/85 focus:border-pink-deep focus:shadow-[0_3px_0_0_#C93A68] focus:outline-none focus:ring-0 focus-visible:outline-none"
              aria-describedby="message-count"
            />
          </label>

          <fieldset>
            <legend className="label text-choc">Frosting</legend>
            <div className="mt-1 flex gap-0.5 sm:gap-1.5">
              {Object.entries(FROSTINGS).map(([id, f]) => (
                <label
                  key={id}
                  className={`relative cursor-pointer rounded-full p-0.5 transition-transform duration-150 ${
                    frosting === id ? 'scale-110 ring-[3px] ring-choc' : 'opacity-80 hover:opacity-100'
                  } has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-choc`}
                >
                  <input
                    type="radio"
                    name="frosting"
                    value={id}
                    checked={frosting === id}
                    onChange={() => setFrosting(id)}
                    className="sr-only"
                  />
                  <span className="sr-only">{f.name}</span>
                  <Dollop frosting={id} />
                </label>
              ))}
            </div>
            <p className="mt-1.5 text-sm font-bold text-choc">{FROSTINGS[frosting].name}</p>
          </fieldset>

          <fieldset className="justify-self-end sm:justify-self-auto">
            <legend className="label text-choc">Size</legend>
            <div className="mt-1 flex rounded-full bg-choc p-1">
              {CAKE_SIZES.map((s) => (
                <label
                  key={s.id}
                  className={`grid min-h-[44px] min-w-[44px] cursor-pointer place-content-center rounded-full px-2.5 py-1.5 text-center leading-none transition-colors duration-150 sm:px-4 ${
                    size === s.id ? 'bg-pink text-choc' : 'text-vanilla hover:text-pink-soft'
                  } has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-pink-soft`}
                >
                  <input
                    type="radio"
                    name="size"
                    value={s.id}
                    checked={size === s.id}
                    onChange={() => setSize(s.id)}
                    className="sr-only"
                  />
                  <span className="block text-base font-extrabold tabular">{s.inches}&Prime;</span>
                  <span className="mt-1 block text-[0.8125rem] font-semibold tabular">{s.price}</span>
                </label>
              ))}
            </div>
            <p className="mt-1.5 text-sm font-bold text-choc">
              {CAKE_SIZES.find((x) => x.id === size).label}, {CAKE_SIZES.find((x) => x.id === size).serves.toLowerCase()}
            </p>
          </fieldset>

          <div className="col-span-2 grid grid-cols-2 gap-x-6 gap-y-4">
            <label className="block">
              <span className="label text-choc">Cookie flavor</span>
              <select value={flavor} onChange={(e) => setFlavor(e.target.value)} className="field text-base">
                {COOKIES.map((c) => (
                  <option key={c.name}>{c.name}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="label text-choc">Pickup or delivery date</span>
              <input type="date" min={earliestDate(5)} value={date} onChange={(e) => setDate(e.target.value)} className="field text-base" />
            </label>
          </div>

          <div className="col-span-2 flex flex-wrap items-center gap-x-6 gap-y-3">
            <button type="submit" className="btn-choc text-lg">
              Request this cake
              <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
                <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <a href="#menu" className="font-bold text-choc underline decoration-choc/40 hover:decoration-choc">
              Or browse cookies by the dozen
            </a>
            <p className="w-full text-sm font-semibold text-choc">Cakes need 5+ days. Pickup in the Heights or local delivery.</p>
          </div>
        </form>
        </div>
      </div>
    </section>
  );
}
