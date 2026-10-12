// The hero's cake builder hands its order to the request form below.
export const PREFILL_EVENT = 'mm:prefill-order';

export function prefillOrder(text) {
  window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: { text } }));
  const form = document.getElementById('order');
  if (form) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
