import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFloat from "@/components/ContactFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "蔷薇花开舞蹈学校 - 少儿舞蹈启蒙与专业培训",
  description: "专注少儿舞蹈教育，开设中国舞、拉丁舞、芭蕾舞等课程。两个校区，专业师资，试听预约中。",
  keywords: "少儿舞蹈, 舞蹈培训, 中国舞, 拉丁舞, 芭蕾舞, 舞蹈学校",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ContactFloat />
      </body>
    </html>
  );
}
