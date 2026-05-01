const links = [
  { href: '#menu', label: 'Menu' },
  { href: '#story', label: 'Our Story' },
  { href: '#order', label: 'Order' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#top"
          className="font-serif font-bold text-2xl md:text-3xl text-chocolate tracking-tight"
        >
          MM Cookie Co
        </a>
        <nav className="flex items-center gap-5 sm:gap-8 text-sm sm:text-base font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-chocolate/80 hover:text-maroon transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
