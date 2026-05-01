const fieldClasses =
  'mt-2 block w-full rounded-xl border border-chocolate/20 bg-white px-4 py-3 text-chocolate placeholder:text-chocolate/40 focus:border-bakeryPink focus:ring-2 focus:ring-bakeryPink/40 outline-none transition-colors';

const labelClasses = 'block text-sm font-medium text-chocolate';

export default function OrderForm() {
  return (
    <section id="order" className="py-20 md:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-chocolate">
            Request an Order
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-bakeryPink" />
          <p className="mt-6 italic text-chocolate/70 max-w-xl mx-auto leading-relaxed">
            This form is for order requests only. We will review your request
            and contact you directly to coordinate payment and confirm your
            pickup/delivery details in Houston.
          </p>
        </div>

        <form
          name="order-request"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="bg-white rounded-2xl shadow-soft p-6 md:p-10 space-y-6"
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
                Full Name <span className="text-maroon">*</span>
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
                Email <span className="text-maroon">*</span>
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
                Phone Number <span className="text-maroon">*</span>
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
                Desired Pickup/Delivery Date{' '}
                <span className="text-maroon">*</span>
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
              What would you like to order?{' '}
              <span className="text-maroon">*</span>
            </label>
            <textarea
              id="order-details"
              name="order-details"
              required
              rows={4}
              placeholder="e.g. 1 dozen Classic Chocolate Chip, 6 Funfetti Sugar"
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
              placeholder="Special occasions, packaging requests, anything we should know"
              className={fieldClasses}
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-10 py-3 rounded-full bg-bakeryPink text-chocolate font-semibold tracking-wide shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Send Order Request
          </button>
        </form>
      </div>
    </section>
  );
}
