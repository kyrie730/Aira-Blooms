import { PageTitle } from "@/shared/Constant";
import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import TopLoader from "nextjs-toploader";
import ApplicationProviders from "@/shared/Component/ApplicationProviders";

const LatoConfig = Lato({
  weight: ["300", "400", "700"],
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: PageTitle.Main,
  description: `Aira Blooms, A Story Still Growing. Every bloom carries a hope for love to flourish and hearts to grow in harmony.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Quicksand:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={LatoConfig.className}>
        <TopLoader showSpinner color="#BA4E63" />
        <ApplicationProviders>{children}</ApplicationProviders>
      </body>
    </html>
  );
}
