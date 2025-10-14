# Tingly

<p align="center">
  <img src="./public/repoImages/landing.png" alt="Tingly Landing Page" width="100%" style="border-radius: 12px;"/>
</p>

![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/Pallepadehat/tingly?utm_source=oss&utm_medium=github&utm_campaign=Pallepadehat%2Ftingly&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

---

A modern inventory and insurance platform designed to help you protect what matters.  
Tingly makes it effortless to document your belongings — photos, receipts, and details — so you’re always prepared when the unexpected happens.

---

## Vision

Tingly is built to bring calm and clarity to life’s unpredictable moments.  
It’s where design precision meets functional simplicity — an open-source foundation with a commercial SaaS layer built for trust, transparency, and longevity.

---

## Tech Stack

| Layer       | Technology                       |
| ----------- | -------------------------------- |
| Framework   | **Next.js 16**                   |
| API         | **tRPC**                         |
| ORM         | **Prisma ORM**                   |
| Database    | **Neon (PostgreSQL serverless)** |
| Auth        | **Better Auth**                  |
| Payments    | **Polar**                        |
| Monitoring  | **Sentry**                       |
| Code Review | **CodeRabbit**                   |
| Styling     | **Tailwind CSS + shadcn/ui**     |

---

## Core Features

- Organize belongings by room, category, or type
- Upload photos, invoices, or receipts for proof of ownership
- Automatic cloud backup and metadata extraction
- PDF export for insurance documentation
- Secure authentication and encrypted storage
- Subscription and payment handling via Polar
- Full observability and error tracking through Sentry

---

## Open Source & SaaS Model

Tingly is developed openly and transparently.  
The core codebase is **source-available** — anyone can explore, self-host, and contribute.  
A hosted SaaS version will be provided for convenience, secure backups, and extended functionality such as AI recognition, automated value estimation, and insurance integrations.

This hybrid model ensures both accessibility and sustainability.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Pallepadehat/tingly.git
cd tingly
```

### 2. Install dependencies

```bash
bun install
```

### 3. Configure environment variables

Create a `.env` file based on `.env.example` and set your credentials:

```
DATABASE_URL=
BETTER_AUTH_SECRET=
POLAR_API_KEY=
SENTRY_DSN=
```

### 4. Run database migrations

```bash
bunx prisma migrate deploy
```

### 5. Start the development server

```bash
bun run dev
```

---

## Error Monitoring

Sentry is integrated for complete full-stack observability, ensuring visibility and reliability across both API and client boundaries.

---

## Payments & Subscriptions

Tingly integrates with **Polar** for transparent and developer-friendly payment processing.
This supports recurring subscriptions and open-source sustainability while maintaining trust and clarity for users.

---

## Contributing

Contributions are encouraged and appreciated.
Follow the existing code style, ensure commits are descriptive and scoped, and submit a pull request via GitHub.
All PRs are automatically reviewed and scored through **CodeRabbit** for quality and consistency.

---

## License

Tingly’s source code is licensed under the **Business Source License 1.1 (BUSL-1.1)**.

Under this license:

- You may view, fork, and modify the code.
- You may self-host Tingly for personal or internal business use.
- You may not sell, sublicense, or use Tingly for any commercial offering.
- After the **Change Date (January 1, 2028)**, this license will automatically convert to the **MIT License**.

For full terms, see the [`LICENSE`](./LICENSE) file.

---

© 2025 Tingly. Designed for simplicity. Built for longevity.
