import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import Footer from "./components/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Anil Kumar Mahato | Web Developer",
  description:
    "Full-stack web developer specializing in Next.js, React, and Tailwind CSS. Explore my projects and skills.",
  keywords: [
    "Anil Kumar Mahato",
    "Web Developer",
    "Next.js",
    "React",
    "Full-Stack Development",
    "Portfolio",
  ],
  authors: [
    { name: "Anil Kumar Mahato", url: "https://anilkumarmahato.com.np/" },
  ],
  creator: "Anil Kumar Mahato",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
       
      </body>
    </html>
  );
}
