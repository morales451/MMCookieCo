import { useEffect, useState } from 'react';

export default function StickyOrderCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      const past = window.scrollY > window.innerHeight * 0.7;
      const orderEl = document.getElementById('order');
      let orderInView = false;
      if (orderEl) {
        const rect = orderEl.getBoundingClientRect();
        orderInView = rect.top < window.innerHeight * 0.6 && rect.bottom > 0;
      }
      setShow(past && !orderInView);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#order"
      aria-label="Jump to order request form"
      className={`fixed z-40 bottom-5 right-5 md:bottom-6 md:right-6 px-6 py-3 rounded-full bg-mauve text-cream font-medium tracking-wider text-xs md:text-sm uppercase shadow-card transition-all duration-300 hover:bg-brown hover:-translate-y-0.5 ${
        show
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      Order Now
    </a>
  );
}
