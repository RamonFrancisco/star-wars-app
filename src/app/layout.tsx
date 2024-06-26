import type { Metadata } from "next";
import "./globals.css";
import { lato } from "./fonts";

export const metadata: Metadata = {
  title: "Star Wars App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PT-br">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
