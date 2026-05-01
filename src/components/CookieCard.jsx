export default function CookieCard({ name, image, alt, description, price }) {
  return (
    <article className="group bg-cream rounded-2xl shadow-soft overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-card">
      <div className="aspect-square overflow-hidden bg-beige">
        <img
          src={image}
          alt={alt || name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-7">
        <h3 className="font-serif text-2xl font-semibold text-brown">
          {name}
        </h3>
        <p className="mt-3 text-brown/65 leading-relaxed text-sm">
          {description}
        </p>
        <span className="inline-block mt-5 px-4 py-1.5 rounded-full bg-lilac/60 text-brown font-medium tracking-wider text-xs uppercase shadow-sm">
          {price}
        </span>
      </div>
    </article>
  );
}
