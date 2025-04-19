import { iransans, vazirmatn, vazirmatnNumbers, yekanBakh } from "@/utils/fonts";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import ReactQueryProvider from "@/components/partials/provider/ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
//yekan bakh 400
//yekan bakh 600
//vazir FD-WOL 400
//vazir FD-WOL 700
//vazir matn 800
//vazir FD-WOL 500
//vazir FD-WOL 300

export const metadata = {
  title: "تورینو | بهترین تجربه سفر و رزرو تور آنلاین",
  author:"Mohammad Saber Khanpayeh",
  description: "تورینو ارائه‌دهنده خدمات رزرو تورهای مسافرتی داخلی و خارجی به‌صورت آنلاین، با پشتیبانی ۲۴ ساعته و پیشنهادهای ویژه سفر.",
  keywords: "رزرو تور آنلاین، خرید اینترنتی تور، تورهای داخلی و خارجی، سفرهای تفریحی، بهترین تورهای گردشگری، رزرو هتل و اقامتگاه، برنامه سفر، گردشگری بین‌المللی، تور یک روزه، مقاصد گردشگری محبوب",
  themeColor: "#28A745",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon/icon.ico",
    shortcut: "/favicon/icon.png",
  },
};

export default function RootLayout({ children,auth }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${yekanBakh.variable} ${vazirmatn.variable} ${vazirmatnNumbers.variable} ${iransans.variable}`}
    >
      <head>
        <meta name="author" content="Mohammad Saber Khanpayeh" />
      </head>
      <body>
        <ReactQueryProvider>
        <Layout>{children}{auth??null}
          <ToastContainer/>
        </Layout>
        {/* <ReactQueryDevtools/> */}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
