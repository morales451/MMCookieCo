import CookieCake from './bake/CookieCake.jsx';
import { CAKE_SIZES } from '../data.js';
import { prefillOrder } from '../lib/prefill.js';

const LARGEST = Math.max(...CAKE_SIZES.map((s) => s.inches));

export default function CookieCakeGuide() {
  return (
    <section id="cake-guide" className="bg-dough py-24 md:py-32" aria-labelledby="guide-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="guide-title" className="display max-w-[14ch] text-[clamp(3rem,7vw,5.5rem)] text-choc">
          Three sizes, drawn to scale.
        </h2>
        <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-choc">
          Choose your size, choose your flavor, add a message. Every cake is piped by hand and finished the morning of
          pickup.
        </p>

        <ul className="mt-16 grid gap-14 md:grid-cols-[6fr_8fr_10fr] md:items-end md:gap-8">
          {CAKE_SIZES.map((s) => (
            <li key={s.id} className="flex flex-col">
              <div className="relative flex items-end justify-center md:h-[22rem]">
                <CookieCake
                  frosting={s.featured ? 'strawberry' : 'vanilla'}
                  rosettes={Math.round(s.inches * 3.2)}
                  sprinkles={2}
                  seed={s.inches}
                  clearCenter={0.15}
                  chipDensity={1.2}
                  className="w-full"
                  style={{ maxWidth: `${(s.inches / LARGEST) * 100}%` }}
                />
                {s.featured && (
                  <span className="absolute -top-3 right-0 rotate-6 font-script text-[1.9rem] leading-none text-choc md:-right-4 md:top-6">
                    most ordered
                  </span>
                )}
              </div>
              <div className="mt-6 border-t-[3px] border-choc pt-4">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="display text-[2.1rem] text-choc">
                    {s.label} <span className="tabular">{s.inches}&Prime;</span>
                  </h3>
                  <p className="text-2xl font-extrabold tabular text-choc">{s.price}</p>
                </div>
                <p className="mt-1 font-bold text-choc">{s.serves}</p>
                <p className="mt-3 leading-relaxed text-choc/85">{s.note}</p>
                <button
                  type="button"
                  onClick={() => prefillOrder(`1 ${s.label} cookie cake (${s.inches}", ${s.price}). Flavor and message: `)}
                  className="mt-4 font-bold text-choc underline decoration-choc/40 hover:decoration-choc"
                >
                  Request a {s.label.toLowerCase()} cake
                </button>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-16 max-w-[60ch] text-lg leading-relaxed text-choc">
          Custom designs, themes, and messages are always welcome. Need something larger or for a corporate order?{' '}
          <a href="#order" className="font-bold underline decoration-choc/40 hover:decoration-choc">
            Send us a request
          </a>{' '}
          and we'll make it work.
        </p>
      </div>
    </section>
  );
}
