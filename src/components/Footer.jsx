export default function Footer() {
  return (
    <footer className="bg-beige text-brown">
      <div className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        <div className="md:col-span-2">
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
            Visit
          </p>
          <ul className="mt-3 space-y-2 text-base">
            <li>
              <a
                href="#menu"
                className="text-brown hover:text-mauve transition-colors"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#club"
                className="text-brown hover:text-mauve transition-colors"
              >
                Cookie Club
              </a>
            </li>
            <li>
              <a
                href="/wholesale/"
                className="text-brown hover:text-mauve transition-colors"
              >
                Wholesale &amp; Corporate
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-brown hover:text-mauve transition-colors"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-tan font-medium">
            Connect
          </p>
          <ul className="mt-3 space-y-2 text-base">
            <li>
              <a
                href="https://instagram.com/mm_cookie_co"
                target="_blank"
                rel="noreferrer"
                className="text-brown hover:text-mauve transition-colors"
              >
                @mm_cookie_co
              </a>
            </li>
            <li>
              <a
                href="#order"
                className="text-brown hover:text-mauve transition-colors"
              >
                Send an order request
              </a>
            </li>
          </ul>
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
