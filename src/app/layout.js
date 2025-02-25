import { iransans, vazirmatn, vazirmatnNumbers, yekanBakh } from "@/utils/fonts";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Layout from "@/components/layout/Layout";
//yekan bakh 400
//yekan bakh 600
//vazir FD-WOL 400
//vazir FD-WOL 700
//vazir matn 800
//vazir FD-WOL 500
//vazir FD-WOL 300

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children,auth }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${yekanBakh.variable} ${vazirmatn.variable} ${vazirmatnNumbers.variable} ${iransans.variable}`}
    >
      <body>
        <Layout>{children}{auth??null}</Layout>
      </body>
    </html>
  );
}
