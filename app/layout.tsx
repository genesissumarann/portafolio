import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/layout/Navbar";
import Footer from "@/src/layout/Footer";

const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${font.className} min-h-screen bg-slate-50 text-slate-900`}
      >
        <Navbar />
        <main className="mx-auto w-full max-w-5xl px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
