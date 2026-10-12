import { useEffect, useRef, useState } from 'react';
import { PREFILL_EVENT, SOURCES, earliestDate } from '../lib/prefill.js';

const fieldClasses = 'field';
const labelClasses = 'block font-extrabold text-choc';

export default function OrderForm() {
  const [details, setDetails] = useState('');
  const [last, setLast] = useState(null);
  const [minDays, setMinDays] = useState(3);
  const nameRef = useRef(null);
  const dateRef = useRef(null);
  const lines = useRef({});
  const mins = useRef({});

  useEffect(() => {
    function onPrefill(e) {
      const { source, key, text, date } = e.detail;
      const prev = lines.current[key];
      // Replace this builder's own line if it's still there; otherwise add it below
      // whatever the visitor already typed.
      setDetails((current) => {
        if (prev && current.includes(prev)) return current.replace(prev, text);
        return current.trim() ? `${current.trim()}\n${text}` : text;
      });
      lines.current[key] = text;
      mins.current[key] = SOURCES[source]?.minDays ?? 3;
      setMinDays(Math.max(...Object.values(mins.current)));
      if (date && dateRef.current) dateRef.current.value = date;
      setLast(source);
      setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 700);
    }
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  const minDate = earliestDate(minDays);

  return (
    <section id="order" className="bg-dough py-24 md:py-32" aria-labelledby="order-title">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <h2 id="order-title" className="display text-[clamp(3rem,7vw,5.5rem)] text-choc">
            Request an order
          </h2>
          <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-choc">
            This form is for order requests only. We'll review your request and contact you directly to coordinate
            payment and confirm your pickup or delivery details in Houston.
          </p>
          <p className="mt-4 max-w-[40ch] leading-relaxed text-choc">
            For Cookie Nachos, give us your headcount and date and we'll reply within 24 hours with a quote. Cookie
            cakes need at least 5 days' notice, dozens at least 3. We invoice once your order is confirmed.
          </p>
          <p className="mt-4 max-w-[40ch] leading-relaxed text-choc">
            Ordering for a company with branding or a big headcount?{' '}
            <a href="/wholesale/" className="font-bold underline decoration-choc/40 hover:decoration-choc">
              Our wholesale page
            </a>{' '}
            handles branded packs and boxes.
          </p>
          <div className="mt-10 border-t-[3px] border-choc pt-6">
            <h3 className="display text-[2rem] text-choc">Share the cookies. Save $5.</h3>
            <p className="mt-3 max-w-[40ch] leading-relaxed text-choc">
              Most of our orders come from word of mouth. If a friend sent you, put their name in "Referred by": you get $5
              off your first order and they get $5 off their next one, as many times as you like. Applied on the invoice,
              no codes.
            </p>
          </div>
        </div>
        <form
          name="order-request"
          method="POST"
          action="/thanks/"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-7"
        >
          <input type="hidden" name="form-name" value="order-request" />
          <p hidden>
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-x-10">
            <div>
              <label htmlFor="full-name" className={labelClasses}>
                Full name <span aria-hidden="true">*</span>
              </label>
              <input
                id="full-name"
                name="full-name"
                type="text"
                required
                autoComplete="name"
                ref={nameRef}
                className={fieldClasses}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>
                Email <span aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={fieldClasses}
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClasses}>
                Phone <span aria-hidden="true">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className={fieldClasses}
              />
            </div>

            <div>
              <label htmlFor="pickup-date" className={labelClasses}>
                Pickup or delivery date <span aria-hidden="true">*</span>
              </label>
              <input
                id="pickup-date"
                name="pickup-date"
                type="date"
                required
                min={minDate}
                ref={dateRef}
                className={fieldClasses}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-x-10">
            <div>
              <label htmlFor="allergies" className={labelClasses}>
                Allergies or dietary restrictions
              </label>
              <input
                id="allergies"
                name="allergies"
                type="text"
                placeholder="e.g. peanut allergy, gluten-free (we bake with nuts)"
                className={fieldClasses}
              />
            </div>
            <div>
              <label htmlFor="company" className={labelClasses}>
                Company <span className="font-semibold">(optional, for the invoice)</span>
              </label>
              <input id="company" name="company" type="text" autoComplete="organization" className={fieldClasses} />
            </div>
          </div>

          <div>
            <label htmlFor="order-details" className={labelClasses}>
              What would you like to order? <span aria-hidden="true">*</span>
            </label>
            {last && (
              <p className="mt-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-xl bg-vanilla px-3 py-2 text-sm font-bold text-choc" role="status">
                <span>Filled in from {SOURCES[last].label}. Edit anything you like.</span>
                <a href={SOURCES[last].back} className="underline decoration-choc/40 hover:decoration-choc">
                  Back to {SOURCES[last].label}
                </a>
              </p>
            )}
            <textarea
              id="order-details"
              name="order-details"
              required
              rows={4}
              placeholder="e.g. 1 cookie cake (chocolate chip) for Saturday"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="custom-notes" className={labelClasses}>
              Custom notes
            </label>
            <textarea
              id="custom-notes"
              name="custom-notes"
              rows={3}
              placeholder="The occasion, colors or theme, packaging or branding requests"
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="referred-by" className={labelClasses}>
              Referred by <span className="font-semibold">(optional, they get $5 off too)</span>
            </label>
            <input
              id="referred-by"
              name="referred-by"
              type="text"
              placeholder="Friend's full name"
              className={fieldClasses}
            />
          </div>

          <div className="pt-2">
            <button type="submit" className="btn-choc w-full text-lg sm:w-auto">
              Send order request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
