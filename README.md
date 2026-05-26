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


### Frontend

- Next.js
- React.js
- Tanstack Query
- Typescript
- Material-UI (MUI)

### Backend

- Spring 
- Java
- Docker

## 📁 Project Structure

```bash
.
├── backend
│   ├── build.gradle
│   ├── docker-compose.yaml
│   ├── Dockerfile
│   ├── gradle
│   │   └── wrapper
│   │       ├── gradle-wrapper.jar
│   │       └── gradle-wrapper.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── settings.gradle
│   └── src
│       ├── main
│       │   ├── java
│       │   │   └── com
│       │   │       └── backend
│       │   │           ├── BackendApplication.java
│       │   │           ├── config
│       │   │           │   └── WebConfiguration.java
│       │   │           ├── entity
│       │   │           │   ├── User.java
│       │   │           │   └── Watchlist.java
│       │   │           ├── middleware
│       │   │           │   └── AuthenticationService.java
│       │   │           ├── repository
│       │   │           │   └── UserRepository.java
│       │   │           └── service
│       │   └── resources
│       │       ├── application.yaml
│       │       ├── static
│       │       └── templates
│       └── test
│           └── java
│               └── com
│                   └── backend
│                       └── BackendApplicationTests.java
├── frontend
│   ├── AGENTS.md
│   ├── CLAUDE.md
│   ├── eslint.config.mjs
│   ├── eslint.config.mts
│   ├── next.config.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── prettier.config.ts
│   ├── public
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── next.svg
│   │   ├── vercel.svg
│   │   └── window.svg
│   ├── README.md
│   ├── src
│   │   ├── app
│   │   │   ├── (auth)
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── login
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── signup
│   │   │   │       └── page.tsx
│   │   │   ├── (main)
│   │   │   │   ├── calculator
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── dashboard
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   └── watchlist
│   │   │   │       └── page.tsx
│   │   │   ├── globals.css
│   │   │   └── layout.tsx
│   │   ├── components
│   │   │   ├── calculator
│   │   │   │   ├── calculate.tsx
│   │   │   │   ├── calculateDisplay.tsx
│   │   │   │   ├── calculateHeader.tsx
│   │   │   │   └── calculateInput.tsx
│   │   │   ├── dashboard
│   │   │   ├── general
│   │   │   │   ├── navbar.tsx
│   │   │   │   ├── sidebar.tsx
│   │   │   │   └── themeToggle.tsx
│   │   │   ├── home
│   │   │   │   ├── hero.tsx
│   │   │   │   └── nav.tsx
│   │   │   └── watchlist
│   │   │       ├── content.tsx
│   │   │       └── statistics.tsx
│   │   ├── config.ts
│   │   ├── context
│   │   │   └── ThemeContext.tsx
│   │   ├── data
│   │   │   ├── calculator.ts
│   │   │   ├── home.ts
│   │   │   ├── navbar.ts
│   │   │   └── watchlist.ts
│   │   ├── hooks
│   │   ├── libs
│   │   ├── theme.ts
│   │   └── types.ts
│   └── tsconfig.json
└── README.md
```

## Setup and Installation

### Prerequisites

- Node.js
- Docker
- JDK 26


### Setup Environment
- Create a .env file:
```bash
cp .env.example .env
```
You can find the required environment variables in `.env.example`.

> [!NOTE]
> There are more than one `.env.example` files. 
> Configure them each with respect to the frontend/backend directory accordingly.

### Start Development Environment

- Install Dependencies
```bash
cd frontend
npm i
```

- Run Frontend Application
```bash
cd frontend
npm run dev
```

- Run Backend Server (Using Gradle wrapper)
```bash
cd backend
./ gradlew bootRun
```

- Run Backend Server (Package into Jar before running)
```bash
cd backend
./gradlew build
java -jar build/backend-0.0.1-SNAPSHOT.jar
```


### Local URLs

- Frontend Application
```bash
http://localhost:3000
```

- Backend Server
```bash
http://localhost:8080
```