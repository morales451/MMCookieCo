import { useEffect, useState } from 'react';

const STORAGE_KEY = 'mmcc_exit_intent_dismissed';

export default function ExitIntent() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    function onMouseLeave(e) {
      if (e.clientY <= 5 && !sessionStorage.getItem(STORAGE_KEY)) {
        setOpen(true);
      }
    }
    document.addEventListener('mouseleave', onMouseLeave);
    return () => document.removeEventListener('mouseleave', onMouseLeave);
  }, []);

  function close() {
    setOpen(false);
    sessionStorage.setItem(STORAGE_KEY, '1');
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-choc/60 p-4"
      onClick={close}
    >
      <div
        className="relative w-full max-w-md rounded-[2rem] bg-pink p-8 shadow-lift md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-choc transition-colors hover:bg-choc hover:text-pink"
        >
          <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <h3 className="display text-[2.4rem] text-choc">
              You're on the list.
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-choc">
              We'll send the menu the day before each fresh batch goes live.
            </p>
          </div>
        ) : (
          <>
            <h3
              id="exit-intent-title"
              className="display pr-8 text-[2.6rem] text-choc"
            >
              Get the weekly menu.
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-choc">
              We send a short note each week with what's coming out of the
              oven. No spam, ever.
            </p>

            <form
              name="newsletter"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="mt-6 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                fetch('/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: new URLSearchParams(data).toString(),
                })
                  .then(() => {
                    setSubmitted(true);
                    sessionStorage.setItem(STORAGE_KEY, '1');
                    setTimeout(() => setOpen(false), 2200);
                  })
                  .catch(() => setSubmitted(true));
              }}
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <p hidden>
                <label>
                  Don't fill: <input name="bot-field" />
                </label>
              </p>
              <input
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                autoComplete="email"
                aria-label="Email address"
                className="field mt-0"
              />
              <button
                type="submit"
                className="btn-choc w-full"
              >
                Send me the menu
              </button>
            </form>

            <button
              type="button"
              onClick={close}
              className="mt-4 font-semibold text-choc underline decoration-choc/40 hover:decoration-choc"
            >
              No thanks
            </button>
          </>
        )}
      </div>
    </div>
  );
}
