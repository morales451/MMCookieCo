const fieldClasses =
  'mt-2 block w-full rounded-xl border border-brown/15 bg-cream px-4 py-3 text-brown placeholder:text-brown/35 focus:border-mauve focus:ring-2 focus:ring-mauve/40 outline-none transition-colors';

const labelClasses =
  'block text-xs font-medium text-brown/80 uppercase tracking-widest';

export default function OrderForm() {
  return (
    <section id="order" className="py-28 md:py-36 bg-beige">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-tan font-medium">
            Get In Touch
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl font-bold text-brown leading-tight">
            Request an Order
          </h2>
          <p className="mt-7 italic text-brown/65 max-w-xl mx-auto leading-relaxed">
            This form is for order requests only. We'll review your request
            and contact you directly to coordinate payment and confirm your
            pickup or delivery details in Houston.
          </p>
        </div>

        <form
          name="order-request"
          method="POST"
          action="/thanks/"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="bg-cream rounded-2xl shadow-soft p-7 md:p-12 space-y-7"
        >
          <input type="hidden" name="form-name" value="order-request" />
          <p hidden>
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="full-name" className={labelClasses}>
                Full Name <span className="text-mauve">*</span>
              </label>
              <input
                id="full-name"
                name="full-name"
                type="text"
                required
                autoComplete="name"
                className={fieldClasses}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>
                Email <span className="text-mauve">*</span>
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
                Phone <span className="text-mauve">*</span>
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
                Pickup / Delivery Date <span className="text-mauve">*</span>
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
              Allergies / Dietary Restrictions
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
              What would you like to order? <span className="text-mauve">*</span>
            </label>
            <textarea
              id="order-details"
              name="order-details"
              required
              rows={4}
              placeholder="e.g. 1 cookie cake (chocolate chip) for Saturday"
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="custom-notes" className={labelClasses}>
              Custom Notes
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
              Referred By <span className="text-brown/40 normal-case tracking-normal text-[10px]">(optional — they get $5 off too)</span>
            </label>
            <input
              id="referred-by"
              name="referred-by"
              type="text"
              placeholder="Friend's full name"
              className={fieldClasses}
            />
          </div>

          <div className="pt-2 text-center md:text-left">
            <button
              type="submit"
              className="w-full md:w-auto px-10 py-3.5 rounded-full bg-brown text-cream font-medium tracking-wider text-sm uppercase shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card hover:bg-mauve"
            >
              Send Order Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
