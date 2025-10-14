export default function StatsSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            Everything in one clear, calm view.
          </h2>
          <p className="text-lg text-muted-foreground">
            Tingly keeps photos, receipts, and values beside each other so anyone in the family can find what they need without digging through folders.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div>
            <p className="text-muted-foreground">
              Add important documents once and they stay organised forever. Need a receipt, serial number, or value? Search by room or item and it appears instantly.
            </p>
            <div className="mb-12 mt-12 grid grid-cols-2 gap-3 md:mb-0">
              <div className="space-y-3">
                <div className="bg-linear-to-r from-primary/80 to-primary bg-clip-text text-5xl font-bold text-transparent">
                  12.5M
                </div>
                <p className="text-sm text-muted-foreground">Items saved safely inside Tingly</p>
              </div>
              <div className="space-y-3">
                <div className="bg-linear-to-r from-emerald-500 to-emerald-600 bg-clip-text text-5xl font-bold text-transparent">
                  2 days
                </div>
                <p className="text-sm text-muted-foreground">Average insurance response when Tingly reports are used</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <blockquote className="border-l-4 border-primary/30 pl-4">
              <p className="text-lg text-foreground">
                “When a pipe burst in our rental, I opened Tingly, pressed export, and emailed the list right away. The adjuster said it was the clearest proof they’d ever seen.”
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <cite className="block font-semibold text-foreground">Morgan Bailey</cite>
                <span className="block text-muted-foreground">Head of Claims, Shelter Mutual Partners</span>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
