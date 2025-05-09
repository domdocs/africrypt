import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AfriCrypt.space | Africa's Premier Crypto Community",
  description: "Join Africa's leading crypto community. Connect, learn, and build the future of finance and AI across the continent.",
  keywords: "cryptocurrency, africa, blockchain, bitcoin, ethereum, web3, crypto community, African crypto, DeFi, digital assets, crypto meetups",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="theme-color" content="#050505" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}