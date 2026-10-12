const steps = [
  {
    title: 'Tell a friend',
    body: "Share MM Cookie Co. with someone who hasn't ordered yet.",
  },
  {
    title: 'They drop your name',
    body: 'When they place their first order, they list your name in the "Referred by" field.',
  },
  {
    title: 'You both get $5 off',
    body: 'They get $5 off their first order. You get $5 off your next one. As many times as you like.',
  },
];

export default function Referral() {
  return (
    <section id="referral" className="on-choc bg-choc py-24 text-vanilla md:py-28" aria-labelledby="referral-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-end">
          <h2 id="referral-title" className="display text-[clamp(3rem,7vw,5.5rem)] text-pink">
            Share the cookies. Save $5.
          </h2>
          <p className="max-w-[44ch] text-lg leading-relaxed text-vanilla/85 md:pb-2">
            Most of our orders come from word of mouth. Here's our small thank you when you spread the word.
          </p>
        </div>

        <ol className="mt-14 grid gap-10 border-t-2 border-vanilla/20 pt-10 md:grid-cols-3 md:gap-12">
          {steps.map((step, i) => (
            <li key={step.title} className="grid grid-cols-[3rem_1fr] gap-4">
              <span className="font-script text-[3rem] leading-[0.9] text-pink" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3 className="display text-[1.8rem] text-vanilla">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-vanilla/80">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-12 max-w-[56ch] text-vanilla/75">
          Discounts are applied when we send your invoice. No codes, no tracking links. Just tell them to mention you.
        </p>
      </div>
    </section>
  );
}
