import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from '@clerk/nextjs'

const RethinkSans = Rethink_Sans({ subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rethink-sans'
});

export const metadata: Metadata = {
  title: "Image processor",
  description: "AI powered image processor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={
      {
        variables: {colorPrimary: '#624cf5'}
      }
    }>
      <html lang="en">
        <body className={cn(RethinkSans.variable,'font-RethinkSans antialiased',  )}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
