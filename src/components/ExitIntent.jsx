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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brown/40 backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="bg-cream rounded-2xl p-8 md:p-10 max-w-md w-full shadow-card relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          className="absolute top-4 right-4 h-8 w-8 rounded-full text-brown/50 hover:text-brown hover:bg-beige flex items-center justify-center text-xl leading-none transition-colors"
        >
          ×
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <p className="text-xs uppercase tracking-widest text-tan font-medium">
              Welcome
            </p>
            <h3 className="mt-3 font-serif text-3xl text-brown">
              You're on the list.
            </h3>
            <p className="mt-4 text-brown/70 leading-relaxed">
              We'll send the menu the day before each fresh batch goes live.
            </p>
          </div>
        ) : (
          <>
            <p className="text-xs uppercase tracking-widest text-tan font-medium">
              Wait —
            </p>
            <h3
              id="exit-intent-title"
              className="mt-3 font-serif text-3xl md:text-4xl text-brown leading-tight"
            >
              Get the weekly menu.
            </h3>
            <p className="mt-4 text-brown/70 leading-relaxed">
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
                className="w-full rounded-xl border border-brown/15 bg-cream px-4 py-3 text-brown placeholder:text-brown/35 focus:border-mauve focus:ring-2 focus:ring-mauve/40 outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full bg-brown text-cream font-medium tracking-wider text-xs md:text-sm uppercase shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card hover:bg-mauve"
              >
                Send me the menu
              </button>
            </form>

            <button
              type="button"
              onClick={close}
              className="mt-4 text-xs uppercase tracking-widest text-brown/50 hover:text-brown transition-colors"
            >
              No thanks
            </button>
          </>
        )}
      </div>
    </div>
  );
}
