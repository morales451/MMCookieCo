import CookieCard from './CookieCard.jsx';

const SQUARE = '?w=700&h=700&q=80&auto=format&fit=crop';

const cookies = [
  {
    name: 'Classic Chocolate Chip',
    image: `https://plus.unsplash.com/premium_photo-1668772704254-c4c4798b0e5d${SQUARE}`,
    alt: 'Stack of golden chocolate chip cookies',
    description:
      'Our flagship: brown-buttered dough, pools of semi-sweet chocolate, finished with flaky sea salt. Crisp edges, molten center, every single time.',
    price: '$4.00 / each',
  },
  {
    name: 'Funfetti Sugar',
    image: `https://images.unsplash.com/photo-1619149651177-b09092806f1a${SQUARE}`,
    alt: 'Sweet treat with creamy white frosting on top',
    description:
      'A buttery sugar cookie loaded with rainbow sprinkles and a kiss of vanilla bean. Soft, chewy, and pure birthday-on-a-plate joy.',
    price: '$4.00 / each',
  },
  {
    name: 'Double Chocolate',
    image: `https://images.unsplash.com/photo-1598839950984-034f6dc7b495${SQUARE}`,
    alt: 'Rich brown cookies arranged on a white surface',
    description:
      'Rich cocoa dough hugging a generous mix of dark and milk chocolate chunks. For the chocolate lover who refuses to compromise.',
    price: '$4.50 / each',
  },
  {
    name: 'Snickerdoodle',
    image: `https://images.unsplash.com/photo-1597733153203-a54d0fbc47de${SQUARE}`,
    alt: 'Round cinnamon-sugar cookie on a light surface',
    description:
      'Pillowy cream of tartar dough rolled in cinnamon sugar and baked until just set. Tangy, warm, and beautifully nostalgic.',
    price: '$4.00 / each',
  },
  {
    name: 'Red Velvet',
    image: `https://images.unsplash.com/photo-1558961363-fa8fdf82db35${SQUARE}`,
    alt: 'Plush, cocoa-kissed cookies served in a small bowl',
    description:
      'Cocoa-kissed crimson dough studded with white chocolate chips. Soft, plush, and quietly dramatic — exactly as red velvet should be.',
    price: '$4.50 / each',
  },
  {
    name: 'Peanut Butter',
    image: `https://plus.unsplash.com/premium_photo-1670895801135-858a7d167ea4${SQUARE}`,
    alt: 'Stack of cookies on a white plate',
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
