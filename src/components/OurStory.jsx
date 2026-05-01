export default function OurStory() {
  return (
    <section id="story" className="py-20 md:py-28 bg-bakeryPink/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2">
            <img
              src="https://source.unsplash.com/800x900/?baker,woman,apron"
              alt="MM Cookie Co founder in her Houston kitchen"
              loading="lazy"
              className="w-full h-auto rounded-2xl shadow-soft object-cover aspect-[4/5]"
            />
          </div>

          <div className="w-full md:w-1/2">
            <span className="text-maroon font-medium tracking-[0.2em] text-xs uppercase">
              Our Story
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl font-bold text-chocolate leading-tight">
              Behind the Apron
            </h2>
            <div className="mt-6 space-y-4 text-chocolate/80 leading-relaxed">
              <p>
                MM Cookie Co began the way the best things usually do — at home,
                in a small Houston kitchen, with a mixer that never quite stopped
                running. What started as treats for friends, neighbors, and
                anyone lucky enough to drop by has grown into a boutique bakery
                obsessed with one thing: the perfect cookie.
              </p>
              <p className="italic text-chocolate">
                Her deep love for baking and crafting the perfect dessert was
                inspired by her dad, who served as the head of the bakery for
                HEB.
              </p>
              <p>
                Every recipe is small-batch, hand-mixed, and tested until it
                feels like a gift worth giving. From thick, gooey chocolate chip
                to plush red velvet, each cookie is a love letter to the people
                who taught her that dessert is never just dessert — it's how you
                show up for the ones you love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
