const links = [
  { href: '#menu', label: 'Menu' },
  { href: '#story', label: 'Our Story' },
  { href: '#order', label: 'Order' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-brown/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 text-brown"
          aria-label="MM Cookie Co — back to top"
        >
          <img
            src="/unnamed.png"
            alt=""
            className="h-11 w-11 md:h-12 md:w-12 rounded-full object-cover ring-1 ring-brown/10"
          />
          <span className="font-serif font-bold text-lg md:text-xl tracking-tight hidden sm:inline">
            MM Cookie Co.
          </span>
        </a>
        <nav className="flex items-center gap-6 sm:gap-9 text-xs sm:text-sm font-medium uppercase tracking-widest">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-brown/70 hover:text-mauve transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
