export default function OurStory() {
  return (
    <section id="story" className="py-28 md:py-36 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-14 md:gap-20">
          <div className="w-full md:w-5/12">
            <img
              src="https://source.unsplash.com/800x900/?baker,woman,apron"
              alt="MM Cookie Co founder in her Houston kitchen"
              loading="lazy"
              className="w-full h-auto rounded-2xl shadow-soft object-cover aspect-[4/5]"
            />
          </div>

          <div className="w-full md:w-7/12">
            <p className="text-xs uppercase tracking-widest text-tan font-medium">
              Our Story
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-brown leading-tight">
              Behind the Apron
            </h2>
            <div className="mt-8 space-y-5 text-brown/75 leading-relaxed text-lg">
              <p>
                Baked fresh for every order, MM Cookie Co. is all about simple,
                homemade treats that feel a little more special.
              </p>
              <p className="italic text-brown">
                Her deep love for baking and crafting the perfect dessert was
                inspired by her dad, who served as the head of the bakery for
                HEB.
              </p>
              <p>
                Every recipe is small-batch, hand-mixed, and made the way
                family recipes are meant to be — slowly, carefully, and with a
                little extra love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
