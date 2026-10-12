// Builders higher on the page hand their order to the request form below.
export const PREFILL_EVENT = 'mm:prefill-order';

export function prefillOrder(text, date) {
  window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: { text, date } }));
  const target = document.getElementById('order-details') || document.getElementById('order');
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
