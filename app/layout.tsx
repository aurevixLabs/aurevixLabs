import type {Metadata} from "next";
import {DM_Mono, Sora, Geist} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import {Providers} from "./providers";

const geist = Geist({subsets: ["latin"], variable: "--font-sans"});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-code",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurevix Labs",
  description:
    "Aurevix Labs builds software products, developer systems, and experimental infrastructure.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body className={`${sora.variable} ${dmMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
