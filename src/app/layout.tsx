import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";
import { ThemeContextProvider } from "@/components/general/themeProvider";
import { cookies } from "next/headers";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto"
});

export const metadata: Metadata = {
  title: "Sprout",
  description: "Cryptocurrency and NFTs made easy"
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value as "light" | "dark" | undefined;
  const initialMode = theme === "dark" ? "dark" : "light";
  return (
    <html lang='en' className={`${roboto.variable}`}>
      <body>
        <AppRouterCacheProvider>
          <ThemeContextProvider initialMode={initialMode}>
            {children}
          </ThemeContextProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
