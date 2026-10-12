import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { BowlDefs, DipBowl, NachoChip, NachoDefs } from './bake/Nachos.jsx';
import { prefillOrder } from '../lib/prefill.js';

const BOWL_R = 300;
const QUICK = [25, 50, 100];

// Two rings of chips around the bowl, tips pointing in toward the dip.
function useChips() {
  return useMemo(() => {
    const out = [];
    const inner = 18;
    for (let i = 0; i < inner; i++) {
      const t = (i / inner) * Math.PI * 2 + 0.08;
      out.push({ t, d: BOWL_R + 48, jitter: ((i * 37) % 21) - 10, scale: 0.7, ring: 0 });
    }
    const outer = 24;
    for (let i = 0; i < outer; i++) {
      const t = (i / outer) * Math.PI * 2 + 0.21;
      out.push({ t, d: BOWL_R + 215, jitter: ((i * 53) % 31) - 15, scale: 0.84, ring: 1 });
    }
    return out;
  }, []);
}

function earliest(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export default function NachosHero() {
  const uid = useId().replace(/:/g, '');
  const chips = useChips();
  const reduced = useRef(false);
  const [dipped, setDipped] = useState(() => new Set([2, 9, 14]));
  const [dipping, setDipping] = useState(null);
  const [guests, setGuests] = useState('');
  const [date, setDate] = useState('');

  const dippedRef = useRef(dipped);
  dippedRef.current = dipped;
  const busy = useRef(false);

  function dip(i) {
    if (dippedRef.current.has(i) || busy.current) return;
    if (reduced.current) {
      setDipped((s) => new Set(s).add(i));
      return;
    }
    busy.current = true;
    setDipping(i);
    setTimeout(() => {
      setDipped((s) => new Set(s).add(i));
      setTimeout(() => {
        setDipping(null);
        busy.current = false;
      }, 380);
    }, 420);
  }

  // The tray dips itself, one chip at a time, until every inner chip is coated.
  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced.current) return undefined;
    const id = setInterval(() => {
      const open = chips.map((c, i) => (c.ring === 0 && !dippedRef.current.has(i) ? i : -1)).filter((i) => i >= 0);
      if (!open.length) return clearInterval(id);
      dip(open[Math.floor(Math.random() * open.length)]);
    }, 1900);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chips]);

  function renderChip(c, i) {
    const x = Math.cos(c.t) * c.d;
    const y = Math.sin(c.t) * c.d;
    const rot = (c.t * 180) / Math.PI - 90 + c.jitter;
    return (
      <g key={i} transform={`translate(${x} ${y}) rotate(${rot}) scale(${c.scale}) translate(-100 -100)`}>
        <g className={`nacho ${dipping === i ? 'is-dipping' : ''}`} onPointerEnter={() => dip(i)} style={{ pointerEvents: 'auto' }}>
          <NachoChip seed={i + 1} uid={uid} dipped={dipped.has(i)} />
        </g>
      </g>
    );
  }

  function quote(e) {
    e.preventDefault();
    const n = parseInt(guests, 10);
    const who = n > 0 ? `${n} guests` : 'my event (headcount to confirm)';
    prefillOrder(`Cookie Nachos for ${who}: individually packed cookie chips with buttercream dip. Please send a quote.`, date);
  }

  return (
    <section id="top" className="nachos-hero relative overflow-hidden bg-pink" aria-labelledby="nachos-title">
      <svg viewBox="-600 -600 1200 1200" className="nachos-plate" aria-hidden="true">
        <defs>
          <NachoDefs uid={uid} />
          <BowlDefs uid={uid} />
        </defs>
        {chips.map((c, i) => (c.ring === 1 ? renderChip(c, i) : null))}
        <DipBowl r={BOWL_R} uid={uid} />
        {chips.map((c, i) => (c.ring === 0 ? renderChip(c, i) : null))}
      </svg>

      <div className="nachos-content relative mx-auto flex max-w-[33rem] flex-col items-center text-center">
        <h1 id="nachos-title" className="display text-[clamp(3.4rem,13vw,6.4rem)] text-choc">
          Cookie Nachos
        </h1>
        <p className="mt-3 max-w-[34ch] text-[1.02rem] font-medium leading-snug text-choc sm:text-lg">
          Cookie chips and a cup of buttercream for dipping, packed one per guest. Made for office parties, conferences,
          and events across Houston.
        </p>

        <form onSubmit={quote} className="mt-5 grid w-full max-w-[25rem] grid-cols-2 gap-x-5 gap-y-4 text-left" aria-label="Get a Cookie Nachos quote">
          <div className="col-span-2">
            <label htmlFor="nacho-guests" className="label text-choc">
              How many guests?
            </label>
            <div className="mt-1 flex items-end gap-2">
              <input
                id="nacho-guests"
                type="number"
                inputMode="numeric"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder="e.g. 40"
                className="field mt-0 w-24 shrink-0 text-2xl font-extrabold tabular"
              />
              <div className="flex gap-1.5" role="group" aria-label="Quick headcounts">
                {QUICK.map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setGuests(String(n))}
                    aria-pressed={guests === String(n)}
                    className={`min-h-[44px] rounded-full px-3.5 font-bold tabular transition-colors ${
                      guests === String(n) ? 'bg-choc text-vanilla' : 'bg-pink-soft/60 text-choc hover:bg-pink-soft'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <label htmlFor="nacho-date" className="label text-choc">
              Event date
            </label>
            <input id="nacho-date" type="date" min={earliest(3)} value={date} onChange={(e) => setDate(e.target.value)} className="field" />
          </div>
          <div className="col-span-2 flex flex-col items-center gap-2 pt-1">
            <button type="submit" className="btn-choc w-full text-[1.05rem]">
              Get a Cookie Nachos quote
            </button>
            <p className="text-sm font-medium text-choc">Priced per pack, quoted by headcount. Flavors rotate.</p>
          </div>
        </form>
      </div>
    </section>
  );
}
