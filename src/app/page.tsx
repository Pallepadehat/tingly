"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Mail, Send } from "lucide-react";
import Image from "next/image";

const Page = () => (
  <AuroraBackground className="flex items-center justify-center px-4">
    <Card className="relative w-full max-w-2xl border-none bg-background/40 shadow-2xl shadow-primary/10 backdrop-blur-sm">
      <CardHeader className="flex flex-col items-center text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
          <Image
            src="/icons/logo.svg"
            alt="Tingly logo"
            width={40}
            height={40}
            priority
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <CardTitle className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-br from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Tingly
            </span>
          </CardTitle>
        </div>
        <CardDescription className="mt-6 text-lg font-medium text-foreground/90">
          Waitlist opens soon! 🎉
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="mx-auto max-w-xl space-y-4 text-center">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Your private vault for everything you own. Capture every receipt,
            organize each room, and be insurance-ready with a calm, creative
            workspace.
          </p>
          <p className="text-sm text-muted-foreground/80 sm:text-base">
            Secure by default and designed for people who care about what
            matters most.
          </p>
        </div>

        <Separator className="mx-auto max-w-xl bg-primary/10" />

        <form
          className="mx-auto max-w-xl space-y-4"
          aria-label="Join the waitlist"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-3">
            <Label htmlFor="email" className="text-sm font-medium">
              Email address
            </Label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-11 pl-10"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-11 gap-2 bg-primary px-6 hover:bg-primary/90 sm:px-8"
              >
                <Send className="h-4 w-4" />
                Notify me
              </Button>
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="justify-center">
        <div className="flex flex-col items-center gap-3 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground sm:flex-row sm:gap-4">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Closed beta
          </span>
          <Separator
            orientation="vertical"
            className="hidden h-3 bg-primary/20 sm:inline"
          />
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Secure by design
          </span>
        </div>
      </CardFooter>
    </Card>
  </AuroraBackground>
);

export default Page;
