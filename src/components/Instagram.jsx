import { useEffect } from 'react';

// Live Instagram feed via Behold (https://behold.so).
// To activate: sign up at behold.so, connect @mm_cookie_co, create a widget,
// and paste the Feed ID below. The widget will auto-render in place of the
// fallback grid. Setup takes ~2 min and refreshes new posts automatically.
const BEHOLD_FEED_ID = '';

const HANDLE = 'mm_cookie_co';
const PROFILE_URL = `https://instagram.com/${HANDLE}`;

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
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
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <a
            key={i}
            href={PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            aria-label={`View MM Cookie Co. on Instagram (post placeholder ${i + 1})`}
            className="group aspect-square rounded-2xl bg-cream shadow-soft flex flex-col items-center justify-center text-brown/45 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card hover:text-mauve"
          >
            <InstagramIcon />
            <span className="mt-2 text-[10px] uppercase tracking-widest">
              Coming soon
            </span>
          </a>
        ))}
      </div>
      <p className="mt-10 text-center text-xs text-brown/45">
        Instagram feed is connecting soon — follow us for the latest in the
        meantime.
      </p>
    </>
  );
}

export default function Instagram() {
  return (
    <section className="py-28 md:py-36 bg-lilac/25">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-tan font-medium">
            Latest Bakes
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-brown leading-tight">
            Follow along on Instagram
          </h2>
          <p className="mt-6 text-brown/65 max-w-xl mx-auto leading-relaxed">
            Fresh batches, behind-the-scenes, and the occasional warm-cookie
            giveaway.
          </p>
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-7 px-6 py-2.5 rounded-full bg-cream text-brown text-sm font-medium tracking-wider uppercase shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card hover:bg-brown hover:text-cream"
          >
            <InstagramIcon />
            <span>@{HANDLE}</span>
          </a>
        </div>

        {BEHOLD_FEED_ID ? (
          <BeholdWidget feedId={BEHOLD_FEED_ID} />
        ) : (
          <PlaceholderGrid />
        )}
      </div>
    </section>
  );
}
