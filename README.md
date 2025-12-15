# Clerk Next.js Starter App

A beautiful, production-ready starter template for building authenticated applications with [Clerk](https://clerk.com/) and [Next.js](https://nextjs.org/) App Router.

## Features

- ✅ **Clerk Authentication** - Complete authentication solution with sign-in, sign-up, and user management
- ✅ **Next.js 16 App Router** - Latest Next.js with App Router architecture
- ✅ **Material-UI (MUI)** - Beautiful, responsive UI components
- ✅ **TypeScript** - Full TypeScript support
- ✅ **Modern Design** - Beautiful gradient design with glassmorphism effects
- ✅ **Production Ready** - Configured with best practices

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)
- A Clerk account ([Sign up for free](https://clerk.com))

### Installation

1. Clone this repository:
```bash
git clone https://github.com/liormedan/Clerk-AuthStarter-Next.js.git
cd Clerk-AuthStarter-Next.js
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up your Clerk API keys:

   - Go to your [Clerk Dashboard](https://dashboard.clerk.com)
   - Navigate to [API Keys](https://dashboard.clerk.com/last-active?path=api-keys)
   - Copy your **Publishable Key** and **Secret Key**

4. Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here
```

5. Run the development server:
```bash
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with ClerkProvider and MUI Theme
│   ├── page.tsx        # Home page with beautiful landing design
│   ├── globals.css     # Global styles
│   └── theme.ts        # MUI theme configuration
├── proxy.ts            # Clerk middleware configuration
├── package.json        # Dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Authentication:** [Clerk](https://clerk.com/)
- **UI Library:** [Material-UI (MUI)](https://mui.com/)
- **Language:** TypeScript
- **Package Manager:** pnpm

## Learn More

- [Clerk Documentation](https://clerk.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com/)

## License

MIT

## Author

**Lior Medan**
- Email: liormedan1@gmail.com
- GitHub: [@liormedan](https://github.com/liormedan)

