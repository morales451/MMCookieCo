const links = [
  { href: '#menu', label: 'Menu' },
  { href: '#cake-guide', label: 'Cake sizes' },
  { href: '#story', label: 'Our story' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-pink/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3 text-choc" aria-label="MM Cookie Co., back to top">
          <img
            src="/unnamed.png"
            alt=""
            width="48"
            height="48"
            className="h-12 w-12 rounded-full object-cover shadow-press ring-2 ring-choc"
          />
          <span className="display hidden text-[1.6rem] sm:inline">MM Cookie Co.</span>
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
          <a
            href="/wholesale/"
            className="rounded-full border-2 border-choc px-4 py-2 text-[0.95rem] font-bold text-choc transition-colors hover:bg-choc hover:text-pink-soft"
          >
            <span className="hidden sm:inline">Wholesale &amp; </span>Corporate
          </a>
          <a href="#order" className="btn-choc px-5 py-2.5 text-[0.95rem]">
            Order
          </a>
        </nav>
      </div>
    </header>
  );
}
