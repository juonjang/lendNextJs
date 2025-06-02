import type { Metadata } from "next";
import { kanit } from "./fonts";
import "./globals.css"; 

export const metadata: Metadata = {
  title: "juon",
  description: "juON",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        {children}
      </body>
    </html>
  );
}
