import CookieCard from './CookieCard.jsx';

const SQUARE = '?w=700&h=700&q=80&auto=format&fit=crop';

const cookies = [
  {
    name: 'Custom Cookie Cakes',
    image: `https://plus.unsplash.com/premium_photo-1670895801135-858a7d167ea4${SQUARE}`,
    alt: 'A celebratory stack of cookies on a white plate',
    description:
      'Choose your flavor. Add your message. The perfect centerpiece for birthdays, showers, and quiet weeknight wins.',
    price: 'From $35',
  },
  {
    name: 'Classic Chocolate Chip',
    image: `https://plus.unsplash.com/premium_photo-1668772704254-c4c4798b0e5d${SQUARE}`,
    alt: 'Stack of golden chocolate chip cookies',
    description:
      'Brown-buttered dough, pools of semi-sweet chocolate, finished with flaky sea salt. Crisp edges. Soft center.',
    price: '$4.00 / each',
  },
  {
    name: 'Funfetti Sugar',
    image: `https://images.unsplash.com/photo-1619149651177-b09092806f1a${SQUARE}`,
    alt: 'Sweet treat with creamy white frosting on top',
    description:
      'A buttery sugar cookie loaded with rainbow sprinkles and vanilla bean. Pure birthday-on-a-plate joy.',
    price: '$4.00 / each',
  },
  {
    name: 'Double Chocolate',
    image: `https://images.unsplash.com/photo-1598839950984-034f6dc7b495${SQUARE}`,
    alt: 'Rich brown cookies arranged on a white surface',
    description:
      'Cocoa dough hugging a generous mix of dark and milk chocolate chunks. For the chocolate lover.',
    price: '$4.50 / each',
  },
  {
    name: 'Snickerdoodle',
    image: `https://images.unsplash.com/photo-1597733153203-a54d0fbc47de${SQUARE}`,
    alt: 'Round cinnamon-sugar cookie on a light surface',
    description:
      'Pillowy cream of tartar dough rolled in cinnamon sugar. Tangy, warm, beautifully nostalgic.',
    price: '$4.00 / each',
  },
  {
    name: 'Red Velvet',
    image: `https://images.unsplash.com/photo-1558961363-fa8fdf82db35${SQUARE}`,
    alt: 'Plush, cocoa-kissed cookies served in a small bowl',
    description:
      'Cocoa-kissed crimson dough studded with white chocolate chips. Soft, plush, quietly dramatic.',
    price: '$4.50 / each',
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-28 md:py-36 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-widest text-tan font-medium">
            The Menu
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl font-bold text-brown leading-tight">
            Our Signature Cookies
          </h2>
          <p className="mt-6 text-brown/65 max-w-xl mx-auto leading-relaxed">
            Small-batch favorites, baked fresh in Houston and made to be shared
            (or not — we won't tell).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {cookies.map((cookie) => (
            <CookieCard key={cookie.name} {...cookie} />
          ))}
        </div>
      </div>
    </section>
  );
}
