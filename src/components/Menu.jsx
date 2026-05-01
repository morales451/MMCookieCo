import CookieCard from './CookieCard.jsx';

const cookies = [
  {
    name: 'Classic Chocolate Chip',
    image: 'https://source.unsplash.com/600x600/?chocolate-chip-cookie',
    description:
      'Our flagship: brown-buttered dough, pools of semi-sweet chocolate, finished with flaky sea salt. Crisp edges, molten center, every single time.',
    price: '$4.00 / each',
  },
  {
    name: 'Funfetti Sugar',
    image: 'https://source.unsplash.com/600x600/?sprinkle-cookie',
    description:
      'A buttery sugar cookie loaded with rainbow sprinkles and a kiss of vanilla bean. Soft, chewy, and pure birthday-on-a-plate joy.',
    price: '$4.00 / each',
  },
  {
    name: 'Double Chocolate',
    image: 'https://source.unsplash.com/600x600/?double-chocolate-cookie',
    description:
      'Rich cocoa dough hugging a generous mix of dark and milk chocolate chunks. For the chocolate lover who refuses to compromise.',
    price: '$4.50 / each',
  },
  {
    name: 'Snickerdoodle',
    image: 'https://source.unsplash.com/600x600/?snickerdoodle',
    description:
      'Pillowy cream of tartar dough rolled in cinnamon sugar and baked until just set. Tangy, warm, and beautifully nostalgic.',
    price: '$4.00 / each',
  },
  {
    name: 'Red Velvet',
    image: 'https://source.unsplash.com/600x600/?red-velvet-cookie',
    description:
      'Cocoa-kissed crimson dough studded with white chocolate chips. Soft, plush, and quietly dramatic — exactly as red velvet should be.',
    price: '$4.50 / each',
  },
  {
    name: 'Peanut Butter',
    image: 'https://source.unsplash.com/600x600/?peanut-butter-cookie',
    description:
      'Stone-ground peanut butter folded into a tender brown sugar dough, criss-crossed by the classic fork press. Salty, sweet, and deeply satisfying.',
    price: '$4.00 / each',
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-chocolate">
            Our Signature Cookies
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-bakeryPink" />
          <p className="mt-5 text-chocolate/70 max-w-xl mx-auto">
            Six small-batch favorites, baked fresh in Houston and made to be
            shared (or not — we won't tell).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cookies.map((cookie) => (
            <CookieCard key={cookie.name} {...cookie} />
          ))}
        </div>
      </div>
    </section>
  );
}
