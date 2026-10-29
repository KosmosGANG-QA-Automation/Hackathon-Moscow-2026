import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter", display: "swap" });
const oswald = Oswald({ subsets: ["latin", "cyrillic"], variable: "--font-oswald", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Максим Косов: тренер по боксу, преподаватель C# .NET, мерч",
    template: "%s | Максим Косов",
  },
  description:
    "Косов Максим Александрович: мастер спорта по боксу, чемпион Страны. Персональные тренировки по боксу и тайскому боксу, обучение C# .NET 8.0, авторский мерч.",
  keywords: ["тренер по боксу", "тайский бокс", "персональные тренировки", "обучение C#", ".NET 8.0", "мерч"],
  openGraph: {
    title: "Максим Косов: бокс, C# .NET и мерч",
    description: "Мастер спорта по боксу, чемпион Страны. Тренировки онлайн и офлайн, обучение C#.",
    type: "website",
    locale: "ru_RU",
    images: [{ url: "/logo.jpg", alt: "Косов Максим Александрович, тренер по боксу" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${oswald.variable}`}>
      <body className="noise">
        <ScrollProgress />
        <CursorGlow />
        <Header />
        <main className="relative z-10 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
