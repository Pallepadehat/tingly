import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl rounded-3xl border border-primary/30 bg-primary/5 px-6 py-12 text-center shadow-lg shadow-primary/10 md:py-20 lg:py-24">
        <div className="space-y-6">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Ready to feel prepared?</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Start a secure list of what you own today. Upgrade only when you need more space or more helping hands.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="rounded-xl px-6 text-base">
            <Link href="#pricing">
              <span>Start your list</span>
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="rounded-xl px-6 text-base">
            <Link href="#faqs">
              <span>Ask a question</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
