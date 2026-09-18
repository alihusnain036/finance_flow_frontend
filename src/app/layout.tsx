import "../assets/css/globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "FinanceFlow", template: "%s | FinanceFlow" },
  description: "Buy, trade, and hold 350+ cryptocurrencies with FinanceFlow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="flex min-h-screen flex-col">
        <NavBar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
