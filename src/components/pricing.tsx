import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0 kr / mo",
    billing: "For personal use",
    description: "Great for getting started with your own belongings.",
    cta: "Start for free",
    href: "/",
    highlight: false,
    features: [
      "Up to 25 saved items",
      "One workspace for one person",
      "One insurance PDF each month",
      "Secure cloud sync",
      "Sign in with Google or Apple",
    ],
  },
  {
    name: "Pro",
    price: "49 kr / mo",
    billing: "For individuals who want full control",
    description:
      "Unlimited storage, smart helpers, and fast reports for busy households.",
    cta: "Upgrade to Pro",
    href: "/",
    highlight: true,
    features: [
      "Unlimited items and rooms",
      "Reads receipts and fills in details",
      "Unlimited insurance PDFs",
      "Automatic encrypted backups",
      "Priority help and early features",
    ],
  },
  {
    name: "Family",
    price: "89 kr / mo",
    billing: "For shared homes or small households",
    description: "Invite the whole household and share every room together.",
    cta: "Protect the family",
    href: "/",
    highlight: false,
    features: [
      "Unlimited items for the whole home",
      "Up to 4 members with simple permissions",
      "Shared family inventory view",
      "Unlimited insurance PDFs",
      "Priority support & early updates",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-16 md:py-32" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/80">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="text-4xl font-semibold md:text-5xl"
          >
            Simple plans. Zero surprises.
          </h2>
          <p className="text-lg text-muted-foreground">
            Pick the plan that fits today. You can upgrade or downgrade anytime.
            Every plan keeps your data private and backed up.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:mt-20 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex h-full flex-col border-border/60 ${
                plan.highlight
                  ? "border-primary/50 shadow-lg shadow-primary/10"
                  : ""
              }`}
            >
              {plan.highlight ? (
                <span className="bg-linear-to-r absolute inset-x-10 -top-3 flex justify-center rounded-full from-primary/80 to-primary px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary-foreground shadow-sm">
                  Most popular
                </span>
              ) : null}
              <CardHeader className="space-y-3 pb-4">
                <CardTitle className="text-2xl font-semibold">
                  {plan.name}
                </CardTitle>
                <span className="text-3xl font-bold">{plan.price}</span>
                <CardDescription className="text-sm text-muted-foreground">
                  {plan.billing}
                </CardDescription>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <hr className="my-4 border-dashed" />
                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-1 size-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto pt-6">
                <Button
                  asChild
                  className="w-full"
                  variant={plan.highlight ? "default" : "outline"}
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-3xl rounded-3xl border border-primary/20 bg-primary/5 px-6 py-8 text-center text-base text-foreground shadow-sm shadow-primary/10 sm:px-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
              Included in every plan
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {["No ads or tracking.", "Everything stays encrypted.", "Delete your account instantly.", "Sign in with Google or Apple.", "Open source with BUSL-1.1.", "Self-host if you want full control."].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                    <Check className="size-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
