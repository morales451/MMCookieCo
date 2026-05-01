export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 50% 20%, #F7F3EF 0%, #EFE7DF 55%, #E8DED6 100%)',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-lilac/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-mauve/30 blur-3xl"
      />

      <div className="relative max-w-3xl mx-auto px-6 py-28 md:py-40 text-center">
        <img
          src="/unnamed.png"
          alt=""
          className="mx-auto h-28 w-28 md:h-36 md:w-36 rounded-full object-cover shadow-soft ring-1 ring-brown/10"
        />

        <p className="mt-10 text-xs md:text-sm uppercase tracking-widest text-tan font-medium">
          Houston, Texas
        </p>

        <h1 className="mt-4 font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-brown leading-[1.05]">
          MM Cookie Co.
        </h1>

        <p className="mt-6 font-serif italic text-2xl md:text-3xl text-brown/80">
          Cookie Cakes &amp; Custom Treats
        </p>

        <p className="mt-5 text-base md:text-lg text-brown/70 font-light tracking-wide">
          Freshly baked, made with love.
        </p>

        <a
          href="#order"
          className="inline-block mt-10 px-10 py-3.5 rounded-full bg-mauve text-cream font-medium tracking-wider shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card hover:bg-brown"
        >
          Order Now
        </a>

        <p className="mt-6 text-xs uppercase tracking-widest text-brown/50">
          <a href="#menu" className="hover:text-brown transition-colors">
            View the Menu ↓
          </a>
        </p>
      </div>
    </section>
  );
}
