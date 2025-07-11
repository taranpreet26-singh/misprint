import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import NavWrapper from "@/components/wrapper/NavWrapper";
import { ThemeProvider } from "@/components/ThemeProvider";
import LenisScroller from "@/lib/LenisScroll";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
});


export const metadata: Metadata = {
  title: "Misprint",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"suppressHydrationWarning >
      <body 
      
      className={`${oswald.variable}  transition-all duration-1000 ease-in-out dark:bg-["#171717"] bg-neutral-400 ${oswald.variable} antialiased`}
      >
        <LenisScroller>

        <ThemeProvider
           attribute="class"
           defaultTheme="system"
           enableSystem
           >
          <NavWrapper>
            {children}
          </NavWrapper>
        </ThemeProvider>
      </LenisScroller>
      </body>
    </html>
  );
}
