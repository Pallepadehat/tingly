import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface WaitlistConfirmationEmailProps {
  email: string;
  position: number;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export function WaitlistConfirmationEmail({
  email,
  position,
}: WaitlistConfirmationEmailProps) {
  const previewText = `You're #${position} on the Tingly waitlist! 🎉`;

  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-zinc-50 px-2 font-sans">
          <Preview>{previewText}</Preview>
          <Container className="mx-auto my-[40px] max-w-[465px] rounded-2xl border border-zinc-200 bg-white p-[32px] shadow-sm">
            {/* Logo Section */}
            <Section className="mt-[16px] text-center">
              <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Img
                  src={`${baseUrl}/icons/Logo.svg`}
                  width="40"
                  height="40"
                  alt="Tingly Logo"
                  className="mx-auto"
                />
              </div>
            </Section>

            {/* Heading */}
            <Heading className="mx-0 my-[30px] p-0 text-center text-[28px] font-bold text-zinc-900">
              You're on the Tingly waitlist! 🎉
            </Heading>

            {/* Main Content */}
            <Text className="text-[16px] leading-[26px] text-zinc-700">
              Thank you for your interest in Tingly!
            </Text>

            <Text className="text-[16px] leading-[26px] text-zinc-700">
              We're building a secure, private vault for everything you own —
              capture receipts, organize rooms, and be insurance-ready with a
              calm, creative workspace.
            </Text>

            {/* Position Badge */}
            <Section className="my-[32px] text-center">
              <div className="inline-block rounded-xl border border-primary/20 bg-primary/5 px-6 py-4">
                <Text className="m-0 text-[14px] font-medium uppercase tracking-wider text-zinc-600">
                  Your Position
                </Text>
                <Text className="m-0 mt-1 text-[36px] font-bold text-primary">
                  #{position}
                </Text>
              </div>
            </Section>

            <Text className="text-[16px] text-center leading-[26px] text-zinc-700">
              We'll notify you at{" "}
              <span className="font-semibold text-zinc-900">{email}</span> as
              soon as we're ready to launch. You'll be among the first to
              experience Tingly.
            </Text>

            {/* CTA Button */}
            <Section className="my-[32px] text-center">
              <Button
                className="rounded-xl bg-blue-500 px-6 py-3 text-center text-[14px] font-semibold text-white no-underline"
                href={baseUrl}
              >
                Visit Tingly
              </Button>
            </Section>

            {/* Divider */}
            <Hr className="mx-0 my-[26px] w-full border border-zinc-200" />

            {/* What to Expect */}
            <Text className="text-[14px] font-semibold text-zinc-900">
              What to expect:
            </Text>
            <ul className="m-0 mb-4 list-inside list-disc pl-0">
              <li className="mb-2 text-[14px] leading-[22px] text-zinc-600">
                Early access to Tingly before public launch
              </li>
              <li className="mb-2 text-[14px] leading-[22px] text-zinc-600">
                Influence product development with your feedback
              </li>
              <li className="mb-2 text-[14px] leading-[22px] text-zinc-600">
                Special perks for early supporters
              </li>
            </ul>

            {/* Footer */}
            <Hr className="mx-0 my-[26px] w-full border border-zinc-200" />

            <Text className="text-[12px] leading-[20px] text-zinc-500 text-center">
              This confirmation was sent to
              <span className="text-zinc-700 pl-1 ">{email}</span> because you
              joined the Tingly waitlist. If you didn't sign up for this, you
              can safely ignore this email.
            </Text>

            {/* Security Badge */}
            <Section className="mt-[24px]">
              <div className="flex items-center justify-center gap-4 text-center">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                  Closed Beta
                </span>
                <span className="text-zinc-300">•</span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                  Secure by Design
                </span>
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

WaitlistConfirmationEmail.PreviewProps = {
  email: "you@example.com",
  position: 42,
} as WaitlistConfirmationEmailProps;

export default WaitlistConfirmationEmail;
