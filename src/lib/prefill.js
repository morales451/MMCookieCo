// Builders higher on the page hand their order to the request form below.
// Each builder owns one line (its `source`): resubmitting replaces that line
// instead of stacking a second, contradicting one.
export const PREFILL_EVENT = 'mm:prefill-order';

export const SOURCES = {
  nachos: { minDays: 3, back: '#top', label: 'your Cookie Nachos quote' },
  cake: { minDays: 5, back: '#cakes', label: 'your cake' },
  dozen: { minDays: 3, back: '#menu', label: 'the menu' },
};

export function earliestDate(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export function prefillOrder({ source, key = source, text, date }) {
  window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: { source, key, text, date } }));
  const target = document.getElementById('order-details') || document.getElementById('order');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (target) target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
}

// The size guide hands its choice to the cake builder, so every cake request
// comes from one place with a flavor, a message, and a date.
export const PICK_SIZE_EVENT = 'mm:pick-cake-size';

export function pickCakeSize(id) {
  window.dispatchEvent(new CustomEvent(PICK_SIZE_EVENT, { detail: { id } }));
  const target = document.getElementById('cakes');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (target) target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  setTimeout(() => document.getElementById('cake-message')?.focus({ preventScroll: true }), reduce ? 0 : 700);
}
