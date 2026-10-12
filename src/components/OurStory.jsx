export default function OurStory() {
  return (
    <section id="story" className="on-choc bg-choc py-24 text-vanilla md:py-32" aria-labelledby="story-title">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <img
          src="/unnamed.png"
          alt="The MM Cookie Co. badge: an illustration of the baker in her kitchen holding a chocolate chip cookie, beside a cookie cake ringed in pink and white rosettes."
          width="1254"
          height="1254"
          loading="lazy"
          className="mx-auto w-full max-w-[28rem] rounded-full shadow-lift ring-[6px] ring-pink"
        />
        <div>
          <h2 id="story-title" className="display text-[clamp(3rem,7vw,5.5rem)] text-pink">
            Behind the apron
          </h2>
          <div className="mt-8 max-w-[52ch] space-y-5 text-lg leading-relaxed text-vanilla/90">
            <p>
              Baked fresh for every order, MM Cookie Co. is all about simple, homemade treats that feel a little more
              special.
            </p>
            <p className="font-semibold text-vanilla">
              Her deep love for baking and crafting the perfect dessert was inspired by her dad, who served as the head
              of the bakery for HEB.
            </p>
            <p>
              Every recipe is small-batch, hand-mixed, and made the way family recipes are meant to be: slowly,
              carefully, and with a little extra love.
            </p>
          </div>
          <div className="mt-10 border-t-2 border-vanilla/20 pt-8">
            <p className="display text-[2rem] text-vanilla">A small kitchen. A short list.</p>
            <p className="mt-3 max-w-[50ch] leading-relaxed text-vanilla/80">
              We keep it intentionally small so every cookie leaves the kitchen at its best. Each week we bake a small
              number of cookie cakes and dozens; send a request and we'll confirm your spot.
            </p>
            <a href="#order" className="btn-pink mt-6">
              Request an order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
