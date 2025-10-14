import Image from "next/image";
import Link from "next/link";

const links = [
  { title: "Features", href: "#capabilities" },
  { title: "Pricing", href: "#pricing" },
  { title: "Security", href: "#stats" },
  { title: "FAQs", href: "#faqs" },
  { title: "Docs", href: "https://github.com/" },
  { title: "Changelog", href: "#" },
];

export default function FooterSection() {
  return (
    <footer className="py-16 md:py-32" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          href="/"
          aria-label="Tingly home"
          className="mx-auto block size-fit"
        >
          <Image
            src="/icons/Logo.svg"
            alt="Tingly"
            width={56}
            height={56}
            className="mx-auto"
          />
        </Link>

        <p
          id="footer-heading"
          className="mt-6 text-center text-lg font-semibold text-foreground"
        >
          Tingly — the privacy-first home inventory vault.
        </p>

        <div className="my-10 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-muted-foreground hover:text-primary duration-150"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            Terms
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            Privacy
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            Status
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            Transparency
          </Link>
        </div>

        <span className="mt-10 block text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tingly — Built with ❤️ in the Nordics,
          open to the world.
        </span>
      </div>
    </footer>
  );
}
