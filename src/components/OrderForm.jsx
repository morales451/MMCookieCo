import { useEffect, useRef, useState } from 'react';
import { PREFILL_EVENT } from '../lib/prefill.js';

const fieldClasses = 'field';
const labelClasses = 'block font-extrabold text-choc';

export default function OrderForm() {
  const [details, setDetails] = useState('');
  const [prefilled, setPrefilled] = useState(false);
  const nameRef = useRef(null);

  useEffect(() => {
    function onPrefill(e) {
      setDetails(e.detail.text);
      setPrefilled(true);
      setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 700);
    }
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

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
          <p className="mt-4 max-w-[40ch] leading-relaxed text-choc/85">
            Cookie cakes need at least 5 days' notice, dozens at least 3. We invoice once your order is confirmed.
          </p>
        </div>
        <form
          name="order-request"
          method="POST"
          action="/thanks/"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-6 rounded-[2rem] bg-vanilla p-6 shadow-lift sm:p-10"
        >
          <input type="hidden" name="form-name" value="order-request" />
          <p hidden>
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="full-name" className={labelClasses}>
                Full name <span className="text-pink-deep" aria-hidden="true">*</span>
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
                Email <span className="text-pink-deep" aria-hidden="true">*</span>
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
                Phone <span className="text-pink-deep" aria-hidden="true">*</span>
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
                Pickup or delivery date <span className="text-pink-deep" aria-hidden="true">*</span>
              </label>
              <input
                id="pickup-date"
                name="pickup-date"
                type="date"
                required
                className={fieldClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="allergies" className={labelClasses}>
              Allergies or dietary restrictions
            </label>
            <input
              id="allergies"
              name="allergies"
              type="text"
              placeholder="e.g. nut-free, gluten-free"
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="order-details" className={labelClasses}>
              What would you like to order? <span className="text-pink-deep" aria-hidden="true">*</span>
            </label>
            {prefilled && (
              <p className="mt-1 text-sm font-semibold text-pink-deep" role="status">
                Your cake from the top of the page is filled in below. Edit anything you like.
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
              placeholder="Special occasions, message on the cake, packaging requests"
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="referred-by" className={labelClasses}>
              Referred by <span className="font-semibold text-choc/70">(optional, they get $5 off too)</span>
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
