const sections = [
  { hash: '#top', label: 'Cookie Nachos' },
  { hash: '#cakes', label: 'Cookie cakes' },
  { hash: '#menu', label: 'Menu' },
  { hash: '#faq', label: 'FAQ' },
];

// On the wholesale page the section links point back to the home page.
export default function Header({ page = 'home' }) {
  const home = page === 'home';
  const links = sections.map((s) => ({ href: home ? s.hash : `/${s.hash}`, label: s.label }));
  return (
    <header className="sticky top-0 z-50 bg-pink/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6">
        <a href={home ? '#top' : '/'} className="flex items-center gap-3 text-choc" aria-label={home ? 'MM Cookie Co., back to top' : 'MM Cookie Co. home'}>
          <img
            src="/unnamed.png"
            alt=""
            width="48"
            height="48"
            className="h-10 w-10 rounded-full object-cover shadow-press ring-2 ring-choc sm:h-12 sm:w-12"
          />
          <span className="display hidden text-[1.5rem] sm:inline">MM Cookie Co.</span>
        </a>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 font-bold text-choc transition-colors hover:bg-choc hover:text-pink-soft"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {home && (
            <a
              href="/wholesale/"
              className="rounded-full border-2 border-choc px-4 py-2 text-base font-bold text-choc transition-colors hover:bg-choc hover:text-pink-soft"
            >
              <span className="hidden sm:inline">Wholesale &amp; </span>Corporate
            </a>
          )}
          <a href={home ? '#order' : '#inquiry'} className="btn-choc px-5 py-2.5 text-base">
            {home ? 'Order' : 'Get a quote'}
          </a>
        </nav>
      </div>
      {/* Small screens keep the section links as a scrolling row instead of hiding them. */}
      <nav aria-label="Sections" className="lg:hidden">
        <ul className="flex gap-1 overflow-x-auto px-3 pb-1.5 [scrollbar-width:none]">
          {links.map((link) => (
            <li key={link.href} className="shrink-0">
              <a href={link.href} className="block rounded-full bg-pink-soft/50 px-3.5 py-1 text-sm font-bold text-choc hover:bg-choc hover:text-pink-soft">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
