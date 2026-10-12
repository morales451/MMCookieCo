import { useEffect } from 'react';
import { Cookie } from './bake/bake.jsx';

// Live Instagram feed via Behold (https://behold.so).
// To activate: sign up at behold.so, connect @mm_cookie_co, create a widget,
// and paste the Feed ID below. The widget will auto-render in place of the
// fallback grid. Setup takes ~2 min and refreshes new posts automatically.
const BEHOLD_FEED_ID = '';

const HANDLE = 'mm_cookie_co';
const PROFILE_URL = `https://instagram.com/${HANDLE}`;
const TILES = ['chocolateChip', 'funfetti', 'redVelvet', 'snickerdoodle', 'doubleChocolate', 'chocolateChip'];

function InstagramIcon({ className = 'h-5 w-5' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function BeholdWidget({ feedId }) {
  useEffect(() => {
    if (document.querySelector('script[data-behold]')) return;
    const script = document.createElement('script');
    script.src = 'https://w.behold.so/widget.js';
    script.type = 'module';
    script.async = true;
    script.dataset.behold = 'true';
    document.body.appendChild(script);
  }, []);

  return <behold-widget feed-id={feedId} class="block" />;
}

function PlaceholderGrid() {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-6">
      {TILES.map((flavor, i) => (
        <a
          key={i}
          href={PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          aria-label={`See fresh bakes on Instagram, @${HANDLE}`}
          className="group grid aspect-square place-items-center rounded-2xl bg-dough-light p-4 transition-colors hover:bg-vanilla"
        >
          <Cookie flavor={flavor} seed={i * 11 + 4} className="w-full transition-transform duration-500 ease-out group-hover:rotate-45" />
        </a>
      ))}
    </div>
  );
}

export default function Instagram() {
  return (
    <section className="bg-dough py-24 md:py-28" aria-labelledby="ig-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 id="ig-title" className="display text-[clamp(2.6rem,6vw,4.5rem)] text-choc">
              Fresh out of the oven
            </h2>
            <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-choc">
              Fresh batches, behind-the-scenes, and the occasional warm-cookie giveaway.
            </p>
          </div>
          <a href={PROFILE_URL} target="_blank" rel="noreferrer" className="btn-choc self-start md:self-auto">
            <InstagramIcon />
            Follow @{HANDLE}
          </a>
        </div>

        {BEHOLD_FEED_ID ? <BeholdWidget feedId={BEHOLD_FEED_ID} /> : <PlaceholderGrid />}
      </div>
    </section>
  );
}
