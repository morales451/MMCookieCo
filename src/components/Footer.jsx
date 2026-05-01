export default function Footer() {
  return (
    <footer className="bg-beige text-brown">
      <div className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <p className="font-serif text-2xl font-bold tracking-tight">
            MM Cookie Co.
          </p>
          <p className="mt-3 text-sm text-brown/60 leading-relaxed">
            Cookie cakes &amp; custom treats,
            <br />
            baked fresh in Houston, TX.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-tan font-medium">
            Follow
          </p>
          <a
            href="https://instagram.com/mmcookieco"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-base text-brown hover:text-mauve transition-colors"
          >
            @mmcookieco
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-tan font-medium">
            Contact
          </p>
          <a
            href="#order"
            className="mt-3 inline-block text-base text-brown hover:text-mauve transition-colors"
          >
            Send an order request
          </a>
        </div>
      </div>

      <div className="border-t border-brown/10">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brown/55">
          <p>© 2026 MM Cookie Co. All rights reserved.</p>
          <a
            href="#top"
            className="uppercase tracking-widest hover:text-mauve transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
