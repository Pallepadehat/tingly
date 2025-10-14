import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-12 px-6 md:space-y-20">
        <h2 className="text-center text-4xl font-semibold leading-tight md:max-w-3xl md:text-left md:text-5xl">
          A simple habit that pays off when life gets messy.
        </h2>
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center">
          <div className="relative mx-auto w-full max-w-xl sm:order-1">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-3xl from-primary/40 to-transparent p-1 dark:from-primary/25">
              <Image
                src="/payments.png"
                className="hidden rounded-[22px] dark:block"
                alt="Tingly dashboard showing rooms and item values"
                width={1207}
                height={929}
              />
              <Image
                src="/payments-light.png"
                className="rounded-[22px] shadow-lg dark:hidden"
                alt="Tingly dashboard light showing rooms and item values"
                width={1207}
                height={929}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 text-center sm:text-left">
            <p className="text-lg text-muted-foreground">
              Snap a photo, write a quick note, and choose the room. Tingly keeps the story of each item together so you can pull it back up in seconds from any device.
            </p>
            <p className="text-muted-foreground">
              Invite family members to help, or give your insurance contact read-only access when something happens. Everything stays in sync across phone, tablet, and desktop.
            </p>

            <blockquote className="rounded-3xl border border-primary/20 bg-primary/5 px-6 py-5 text-left text-sm shadow-sm shadow-primary/10 sm:text-base">
              <p className="text-foreground">
                “Tingly turned our messy photo roll into a clear checklist. When wildfire season hit, we knew every favourite book and heirloom was logged.”
              </p>

              <div className="mt-6 space-y-1 text-sm">
                <cite className="block font-medium text-foreground">Aisha Clarke</cite>
                <span className="block text-muted-foreground">Director of Risk, Horizon Collective</span>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
