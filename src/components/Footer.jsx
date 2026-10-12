const visit = [
  { href: '/#top', label: 'Cookie Nachos' },
  { href: '/#menu', label: 'Menu' },
  { href: '/#cake-guide', label: 'Cookie cake sizes' },
  { href: '/#club', label: 'Cookie Club' },
  { href: '/wholesale/', label: 'Wholesale & corporate events' },
  { href: '/#faq', label: 'FAQ' },
];

export default function Footer() {
  return (
    <footer className="on-choc bg-choc text-vanilla">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-12 pt-20 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="whitespace-nowrap font-script text-[3rem] leading-none text-pink">MM Cookie Co.</p>
          <p className="mt-4 max-w-[30ch] text-lg leading-relaxed text-vanilla/80">
            Cookie Nachos, cookie cakes, and custom treats, baked fresh in Houston, TX.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-extrabold text-pink">Visit</h2>
          <ul className="mt-4 space-y-2">
            {visit.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-vanilla/85 hover:text-pink hover:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-extrabold text-pink">Connect</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="https://instagram.com/mm_cookie_co" target="_blank" rel="noreferrer" className="text-vanilla/85 hover:text-pink hover:underline">
                @mm_cookie_co on Instagram
              </a>
            </li>
            <li>
              <a href="/#order" className="text-vanilla/85 hover:text-pink hover:underline">
                Send an order request
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t-2 border-vanilla/15 px-4 py-6 text-sm text-vanilla/65 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© 2026 MM Cookie Co. All rights reserved.</p>
        <a href="#main" className="font-semibold hover:text-pink hover:underline">
          Back to the top
        </a>
      </div>
    </footer>
  );
}
