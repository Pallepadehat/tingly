import { ShieldCheck, Sparkles, Users, FileCheck, Cloud, Globe } from "lucide-react";

const features = [
  {
    title: "Locked down storage",
    description: "Strong encryption keeps every photo and receipt private. We never sell or share your data.",
    icon: ShieldCheck,
  },
  {
    title: "Easy insurance reports",
    description: "Download a neat list with photos, prices, and totals in one click when an insurer asks.",
    icon: FileCheck,
  },
  {
    title: "Share with family",
    description: "Invite the people you trust. Give them full access or view-only so everyone stays in sync.",
    icon: Users,
  },
  {
    title: "Smart suggestions",
    description: "Tingly reads receipts, fills in details, and suggests the best room or category for you.",
    icon: Sparkles,
  },
  {
    title: "Works anywhere",
    description: "Log items during a move or inspection. They sync the moment you’re back online.",
    icon: Cloud,
  },
  {
    title: "Open and dependable",
    description: "Built in the open with clear pricing and a self-host option if you want total control.",
    icon: Globe,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-muted/20 py-16 md:py-32" id="capabilities">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary/80">Why Tingly</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            What makes Tingly different
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A single workspace to inventory, valuate, and insure your belongings — designed for clarity when
            everything else feels chaotic.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-border/40 bg-background/70 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-lg"
            >
              <div className="absolute -right-16 -top-24 h-52 w-52 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />
              <feature.icon className="relative z-10 size-5 text-primary" />
              <h3 className="relative z-10 mt-6 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="relative z-10 mt-3 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
