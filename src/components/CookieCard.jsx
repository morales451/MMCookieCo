export default function CookieCard({ name, image, alt, description, price }) {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={alt || name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl font-semibold text-chocolate">
          {name}
        </h3>
        <p className="mt-2 text-chocolate/75 leading-relaxed text-sm">
          {description}
        </p>
        <span className="inline-block mt-4 px-4 py-1.5 rounded-full bg-bakeryPink/60 text-maroon font-semibold tracking-wide text-sm shadow-sm">
          {price}
        </span>
      </div>
    </article>
  );
}
