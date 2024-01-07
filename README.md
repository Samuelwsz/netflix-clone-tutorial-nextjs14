This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Dependências

npm install -D nodemailer

## [shadcn/ui](https://ui.shadcn.com/)

```
npx shadcn-ui@latest init
```

### [button](https://ui.shadcn.com/docs/components/button)

```
npx shadcn-ui@latest add button
```

### [input](https://ui.shadcn.com/docs/components/input)

```
npx shadcn-ui@latest add input
```

### [avatar](https://ui.shadcn.com/docs/components/avatar)

```
npx shadcn-ui@latest add avatar
```

### [modal](https://ui.shadcn.com/docs/components/dialog)

```
npx shadcn-ui@latest add dialog
```

### [dropdown menu](https://ui.shadcn.com/docs/components/dropdown-menu)

```
npx shadcn-ui@latest add dropdown-menu
```

### [nextauth](https://next-auth.js.org/getting-started/example)

<p>Autenticação de login</p>

```
npm install next-auth
```

### [prisma/nextauth](https://authjs.dev/reference/adapter/prisma?_gl=1*v9mulu*_gcl_au*NDkwMjk4MTE4LjE3MDQ0ODUyNjY.)

```
npm install @prisma/client @auth/prisma-adapter
npm install prisma --save-dev
```

```
npx prisma init
```

[Best practice for instantiating PrismaClient with Next.js](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices)

conectar o prisma com a database. Sempre que realizar alguma alteração no schema.prisma usar o comando abaixo

```
npx prisma db push
npx prisma generate
```

### [supabase]()

### [resend](https://resend.com/home)

https://resend.com/changelog/smtp-service
