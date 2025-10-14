import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

type FeatureRow = {
  feature: string;
  free: string | boolean;
  pro: string | boolean;
  family: string | boolean;
};

const featureMatrix: FeatureRow[] = [
  { feature: "Items you can store", free: "Up to 25", pro: "Unlimited", family: "Unlimited" },
  { feature: "Rooms & categories", free: "All rooms", pro: "All rooms", family: "All rooms" },
  { feature: "Photos & receipts", free: true, pro: true, family: true },
  { feature: "Smart receipt reading", free: false, pro: true, family: true },
  { feature: "Automatic cloud backup", free: false, pro: true, family: true },
  { feature: "Insurance PDFs", free: "1 / month", pro: "Unlimited", family: "Unlimited" },
  { feature: "Invite other people", free: false, pro: false, family: "Up to 4" },
  { feature: "Shared family view", free: false, pro: false, family: true },
  { feature: "Secure cloud sync", free: true, pro: true, family: true },
  { feature: "Google / Apple sign-in", free: true, pro: true, family: true },
  { feature: "Priority support", free: false, pro: true, family: true },
  { feature: "Early feature access", free: false, pro: true, family: true },
  { feature: "Self-host option", free: true, pro: true, family: true },
];

const planSummaries = [
  { plan: "Free", price: "0 kr / mo", description: "For personal use" },
  { plan: "Pro", price: "49 kr / mo", description: "For individuals who want full control" },
  { plan: "Family", price: "89 kr / mo", description: "For shared homes or small households" },
];

const renderCell = (value: FeatureRow["free"]) => {
  if (value === true || value === false) {
    return value ? <Check className="size-4 text-primary" /> : <span className="text-muted-foreground">—</span>;
  }
  return <span>{value}</span>;
};

export default function PricingComparator() {
  return (
    <section className="py-16 md:py-32" aria-labelledby="pricing-comparison-heading" id="comparison">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Compare</p>
          <h2 id="pricing-comparison-heading" className="text-4xl font-semibold md:text-5xl">
            Pick the plan that fits.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Free covers the basics. Pro adds smart help. Family keeps every room in sync.
          </p>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="overflow-hidden rounded-3xl border border-border/50 bg-background/90 shadow-lg">
            <table className="w-full min-w-[720px] border-separate border-spacing-y-1 text-sm">
              <thead className="bg-background/95 text-left text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <tr>
                  <th className="p-4 font-semibold text-muted-foreground/80">Feature</th>
                  {planSummaries.map((plan, index) => (
                    <th key={plan.plan} className={`p-4 align-bottom ${index !== 0 ? "border-l border-border/40" : ""}`}>
                      <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary/70">{plan.plan}</div>
                      <div className="text-2xl font-semibold text-foreground">{plan.price}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{plan.description}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureMatrix.map((row) => (
                  <tr key={row.feature} className="rounded-xl bg-background/70">
                    <th scope="row" className="p-4 text-left text-sm font-medium text-foreground">
                      {row.feature}
                    </th>
                    {[row.free, row.pro, row.family].map((value, index) => (
                      <td
                        key={index}
                        className={`p-4 text-center align-middle text-foreground/90 ${index !== 0 ? "border-l border-border/30" : ""}`}
                      >
                        {renderCell(value)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <Button asChild variant="outline" size="sm" className="rounded-full border-primary/40 text-primary">
            <Link href="#">Self-host guide</Link>
          </Button>
          <span>Need more seats? Reach out and we’ll tailor a plan.</span>
        </div>
      </div>
    </section>
  );
}
