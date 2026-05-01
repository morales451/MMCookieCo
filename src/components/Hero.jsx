export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1670895801135-858a7d167ea4?w=1800&q=80&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-chocolate/40" aria-hidden="true" />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-cream leading-tight drop-shadow-md">
          Houston's Finest Boutique Cookies
        </h1>
        <p className="mt-5 text-lg md:text-xl text-cream/95 font-light tracking-wide">
          Handcrafted, thick, and gooey.
        </p>
        <a
          href="#menu"
          className="inline-block mt-8 px-8 py-3 rounded-full bg-bakeryPink text-chocolate font-semibold tracking-wide shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          View Menu
        </a>
      </div>
    </section>
  );
}
