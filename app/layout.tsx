import type { Metadata } from "next";
import "./globals.css";
import { Kanit } from 'next/font/google'
 
const kanit = Kanit({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Artsgoz – TSC",
  description: "Artsgoz TSC MODE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <main className={kanit.className}>{children}</main>
      </body>
    </html>
  );
}
