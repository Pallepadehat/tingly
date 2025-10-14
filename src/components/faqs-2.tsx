'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

const faqItems = [
  {
    id: 'security',
    question: 'How secure is my inventory data?',
    answer:
      'Every upload is protected with strong encryption. You sign in with Google or Apple, and only the people you invite can view your items. We never sell or share your information.',
  },
  {
    id: 'reports',
    question: 'Can I export reports for my insurance provider?',
    answer:
      'Yes. With one click you can download or email a simple PDF that includes pictures, purchase details, and totals. Pro and Family let you export as many reports as you need.',
  },
  {
    id: 'household',
    question: 'Does Tingly support multiple household members?',
    answer:
      'Yes. The Family plan includes up to four people. Choose who can edit and who can view so everyone stays informed.',
  },
  {
    id: 'self-host',
    question: 'Can I self-host Tingly?',
    answer:
      'You can. We share a self-hosting guide so you can run Tingly on your own servers if you prefer complete control.',
  },
  {
    id: 'cancel',
    question: 'What happens if I cancel my subscription?',
    answer:
      'Your items stay safe. Downgrading to Free simply turns off the extra features. You can export everything or delete your account whenever you wish.',
  },
]

export default function FAQsTwo() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/80">FAQ</p>
          <h2 id="faq-heading" className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl">
            Answers before you even ask.
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Discover how Tingly keeps your belongings safe, your reports accurate, and your household in sync.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-muted w-full rounded-2xl border px-6 py-4 shadow-sm ring-4 dark:ring-0"
          >
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-dashed">
                <AccordionTrigger className="cursor-pointer text-base font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-muted-foreground">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-6 text-center text-sm">
            Can’t find what you need? Contact our{' '}
            <Link href="#" className="text-primary font-medium hover:underline">
              support team
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
