import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Fernando Almeida",
  description: "Fernando Almeida Pinto's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark ${roboto.className} container px-4 md:mx-auto transition-all duration-300
        bg-color6 dark:bg-color1 text-color1 dark:text-color6`}>
        {children}
      </body>
    </html>
  );
}
