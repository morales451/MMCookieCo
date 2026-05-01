const steps = [
  {
    number: '01',
    title: 'Tell a friend',
    body: 'Share MM Cookie Co. with someone who hasn\'t ordered yet.',
  },
  {
    number: '02',
    title: 'They drop your name',
    body: 'When they place their first order, they list your name in the "Referred by" field.',
  },
  {
    number: '03',
    title: 'You both get $5 off',
    body: 'They get $5 off their first order. You get $5 off your next one. As many times as you like.',
  },
];

export default function Referral() {
  return (
    <section id="referral" className="py-24 md:py-28 bg-mauve/15">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-tan font-medium">
            Refer a Friend
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-brown leading-tight">
            Share the cookies. Save $5.
          </h2>
          <p className="mt-6 text-brown/70 max-w-xl mx-auto leading-relaxed">
            Most of our orders come from word of mouth. Here's our small thank
            you when you spread the word.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-cream rounded-2xl p-8 shadow-soft text-center"
            >
              <span className="font-serif text-4xl text-mauve italic">
                {step.number}
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-brown">
                {step.title}
              </h3>
              <p className="mt-3 text-brown/70 leading-relaxed text-sm">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-brown/55 max-w-md mx-auto">
          Discounts are applied when we send your invoice. No codes, no
          tracking links — just tell them to mention you.
        </p>
      </div>
    </section>
  );
}
