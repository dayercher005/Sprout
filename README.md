# Sprout
Sprout is a light-weight real-time data-driven web application designed for NFT and cryptocurrency pricing analysis. 
This platform provides a centralized dashboard to discover trending NFT collections, track historical floor prices, analyze
market capitalizations, and view real-time trading volumes across multiple blockchain networks.

## ✨ Key Features
- Multi-Chain Comparison: Compare collection entry points side-by-side across Ethereum, Solana, and Polygon in a unified view.

- Smart Caching: Temporarily holds fetched data locally using a configurable Time-To-Live (TTL) module to completely eliminate redundant external requests.

- Delta Snapshotting: Preserves local chronological logs to track price variances without hitting premium historical API endpoints.

- Zero Cost Overhead: Tailored explicitly to operate reliably within standard public tiers or free developer account limitations.



## 🛠️ Tech Stack:

- Next.js
- React.js
- Tanstack Query
- Typescript
- Material-UI (MUI)


## 📁 Project Structure

```bash
.
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── eslint.config.mts
├── next.config.ts
├── package-lock.json
├── package.json
├── prettier.config.ts
├── public
├── README.md
├── src
│   ├── app
│   │   ├── (auth)
│   │   │   ├── layout.tsx
│   │   │   ├── login
│   │   │   │   └── page.tsx
│   │   │   ├── page.tsx
│   │   │   └── signup
│   │   │       └── page.tsx
│   │   ├── (main)
│   │   │   ├── calculator
│   │   │   │   └── page.tsx
│   │   │   ├── dashboard
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── watchlist
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components
│   │   ├── calculator
│   │   │   ├── calculate.tsx
│   │   │   ├── calculateDisplay.tsx
│   │   │   ├── calculateHeader.tsx
│   │   │   └── calculateInput.tsx
│   │   ├── dashboard
│   │   ├── general
│   │   │   ├── navbar.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── themeProvider.tsx
│   │   │   └── themeToggle.tsx
│   │   ├── home
│   │   │   ├── banner.tsx
│   │   │   ├── features.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── nav.tsx
│   │   │   └── setup.tsx
│   │   └── watchlist
│   │       ├── content.tsx
│   │       └── statistics.tsx
│   ├── config.ts
│   ├── context
│   │   └── themeContext.ts
│   ├── data
│   │   ├── calculator.ts
│   │   ├── home.ts
│   │   ├── navbar.ts
│   │   └── watchlist.ts
│   ├── hooks
│   │   └── theme.ts
│   ├── libs
│   └── types.ts
└── tsconfig.json
```

## Setup and Installation

### Prerequisites

- Node.js


### Setup Environment
- Create a .env file:
```bash
cp .env.example .env
```
You can find the required environment variables in `.env.example`.


### Start Development Environment

- Install Dependencies
```bash
cd frontend
npm i
```

- Run Frontend Application
```bash
npm run dev
```



### Local URLs

- Frontend Application
```bash
http://localhost:3000
```
