import React from "react";
import Link from "next/link";
import { ArrowRight, Boxes, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import type { Transition, Variants } from "motion/react";
import StatsSection from "@/components/landingpage/stats-4";
import ContentSection from "@/components/landingpage/content-1";
import FeaturesSection from "@/components/landingpage/features-8";
import Pricing from "@/components/landingpage/pricing";
import PricingComparator from "@/components/landingpage/pricing-comparator";
import FAQsTwo from "@/components/landingpage/faqs-2";
import CallToAction from "@/components/landingpage/call-to-action";
import FooterSection from "@/components/landingpage/footer";
import { HeroHeader } from "./header";

const heroPrimaryTransition: Transition = {
  type: "spring",
  bounce: 0.25,
  duration: 1.2,
};

const heroPrimaryVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    y: 16,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: heroPrimaryTransition,
  },
};

const heroContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.35,
    },
  },
};

const heroBenefits = [
  {
    icon: ShieldCheck,
    label: "Keep photos, receipts, and serial numbers in one safe place.",
  },
  {
    icon: Sparkles,
    label: "Add new items in seconds with simple, guided steps.",
  },
  {
    icon: Boxes,
    label: "Send a tidy insurance report whenever you need it.",
  },
];

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section className="relative isolate">
          <div className="absolute inset-x-0 top-0 -z-20 mx-auto h-[660px] max-w-6xl rounded-[4rem] bg-gradient-to-b from-primary/15 via-primary/5 to-transparent blur-3xl" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_-20%,rgba(41,122,255,0.25),transparent_55%)]" />

          <div className="mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center px-6 pb-24 pt-36 text-center md:pt-48">
            <AnimatedGroup
              variants={{
                container: heroContainerVariants,
                item: heroPrimaryVariants,
              }}
              className="flex w-full flex-col items-center gap-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
                Built for peace of mind
              </div>

              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.25}
                as="h1"
                className="text-balance text-4xl font-semibold leading-snug tracking-tight md:text-5xl lg:text-6xl"
              >
                Know what you own. Keep it safe.
              </TextEffect>

              <TextEffect
                per="line"
                preset="fade-in-blur"
                delay={0.3}
                speedSegment={0.25}
                as="p"
                className="text-pretty text-lg text-muted-foreground md:text-xl"
              >
                Tingly gives you one simple place to store photos, receipts, and
                values for every belonging. If something happens, you already
                have proof in hand.
              </TextEffect>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-xl px-6 text-base md:px-7"
                >
                  <Link href="#pricing">
                    Start for free
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-primary/30 px-6 text-base text-primary hover:bg-primary/10"
                >
                  <Link href="#comparison">Compare plans</Link>
                </Button>
              </div>

              <AnimatedGroup
                variants={{
                  container: heroContainerVariants,
                  item: heroPrimaryVariants,
                }}
                className="mt-10 flex w-full flex-col items-center space-y-4"
              >
                {heroBenefits.map((benefit) => (
                  <div
                    key={benefit.label}
                    className="flex w-full max-w-2xl items-center justify-center gap-3 rounded-full bg-background/70 px-4 py-3"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <benefit.icon className="size-4" />
                    </span>
                    <p className="text-base leading-relaxed text-foreground">
                      {benefit.label}
                    </p>
                  </div>
                ))}
              </AnimatedGroup>
            </AnimatedGroup>
          </div>
        </section>

        <section
          id="trust"
          className="border-t border-border/40 bg-background/60 py-12 md:py-16"
        >
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-16 gap-y-6 px-6 text-sm text-muted-foreground">
            <span>Trusted by families, insurers, and restoration teams.</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-emerald-500" />
                <span>99.98% uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-primary" />
                <span>BUSL-1.1 open source</span>
              </div>
            </div>
          </div>
        </section>

        <section id="stats">
          <StatsSection />
        </section>

        <section id="story">
          <ContentSection />
        </section>

        <FeaturesSection />

        <section id="pricing">
          <Pricing />
        </section>

        <PricingComparator />

        <section id="faqs">
          <FAQsTwo />
        </section>

        <CallToAction />

        <FooterSection />
      </main>
    </>
  );
}
