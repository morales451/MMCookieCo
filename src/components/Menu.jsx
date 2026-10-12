import { Cookie } from './bake/bake.jsx';
import CookieCake from './bake/CookieCake.jsx';
import { COOKIES } from '../data.js';

export default function Menu() {
  return (
    <section id="menu" className="on-choc bg-choc pb-28 pt-24 text-vanilla md:pb-36 md:pt-32" aria-labelledby="menu-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-x-16 gap-y-6 md:grid-cols-[1fr_1.1fr] md:items-end">
          <h2 id="menu-title" className="display text-[clamp(3rem,7vw,5.5rem)] text-pink">
            Our signature cookies
          </h2>
          <p className="max-w-[44ch] text-lg leading-relaxed text-vanilla/85 md:pb-2">
            Small-batch favorites, baked fresh in Houston and made to be shared (or not, we won't tell). Cookies come by
            the dozen per flavor.
          </p>
        </div>

        <div className="mt-16 grid gap-x-16 gap-y-14 md:mt-20 md:grid-cols-[0.9fr_1.1fr]">
          <a
            href="#cake-guide"
            className="group block self-start rounded-[2.5rem] text-vanilla md:sticky md:top-28"
            aria-labelledby="menu-cake-name"
          >
            <CookieCake
              frosting="vanilla"
              rosettes={30}
              sprinkles={3}
              seed={4}
              clearCenter={0.2}
              chipDensity={1}
              className="mx-auto w-full max-w-[26rem] transition-transform duration-500 ease-out group-hover:rotate-[8deg]"
            />
            <div className="mt-6 flex items-baseline justify-between gap-6 border-t-2 border-vanilla/20 pt-5">
              <h3 id="menu-cake-name" className="display text-[2.2rem] text-vanilla">
                Custom cookie cakes
              </h3>
              <p className="shrink-0 text-xl font-bold tabular text-pink">From $35</p>
            </div>
            <p className="mt-3 max-w-[46ch] leading-relaxed text-vanilla/80">
              Choose your flavor. Add your message. The perfect centerpiece for birthdays, showers, and quiet weeknight
              wins.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 font-bold text-pink underline decoration-pink/40 group-hover:decoration-pink">
              See the three sizes
            </span>
          </a>

          <ul className="divide-y-2 divide-vanilla/15 border-y-2 border-vanilla/15">
            {COOKIES.map((c) => (
              <li key={c.name} className="group grid grid-cols-[5.5rem_1fr] items-center gap-x-5 py-6 sm:grid-cols-[7rem_1fr_auto] sm:gap-x-7">
                <Cookie
                  flavor={c.flavor}
                  seed={c.seed}
                  className="w-full transition-transform duration-500 ease-out group-hover:-rotate-12 group-hover:scale-105"
                />
                <div>
                  <h3 className="display text-[1.75rem] text-vanilla">{c.name}</h3>
                  <p className="mt-2 max-w-[48ch] text-[0.98rem] leading-relaxed text-vanilla/75">{c.description}</p>
                  <p className="mt-2 font-bold tabular text-pink sm:hidden">
                    {c.price} <span className="font-medium text-vanilla/70">each</span>
                  </p>
                </div>
                <p className="hidden text-right font-bold tabular text-pink sm:block">
                  <span className="text-xl">{c.price}</span>
                  <span className="block text-sm font-medium text-vanilla/70">each</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
