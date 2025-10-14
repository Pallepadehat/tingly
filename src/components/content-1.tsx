import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
          A simple habit that pays off when life gets messy.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-primary/40 to-transparent p-px dark:from-primary/30">
              <Image
                src="/payments.png"
                className="hidden rounded-[15px] dark:block"
                alt="Tingly dashboard showing rooms and item values"
                width={1207}
                height={929}
              />
              <Image
                src="/payments-light.png"
                className="rounded-[15px] shadow dark:hidden"
                alt="Tingly dashboard light showing rooms and item values"
                width={1207}
                height={929}
              />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-lg text-muted-foreground">
              Snap a photo, write a quick note, and choose the room. Tingly keeps the story of each item together so you can pull it back up in seconds.
            </p>
            <p className="text-muted-foreground">
              Invite family members to help, or give your insurance contact read-only access when something happens. Works on phone, tablet, and desktop with automatic sync.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 border-primary/30 pl-4">
                <p className="text-foreground">
                  “Tingly turned our messy photo roll into a clear checklist. When wildfire season hit, we knew every favourite book and heirloom was logged.”
                </p>

                <div className="mt-6 space-y-3 text-sm">
                  <cite className="block font-medium text-foreground">Aisha Clarke</cite>
                  <span className="block text-muted-foreground">Director of Risk, Horizon Collective</span>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
