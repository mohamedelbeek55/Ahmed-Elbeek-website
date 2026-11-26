import type { Metadata } from "next";
import { Cairo, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "أحمد البيك للاستيراد والتصدير | Ahmed Elbeek Import & Export",
  description:
    "خدمات الاستيراد والتصدير والتخليص الجمركي وتنسيق نقل البضائع عبر منفذ العوجة البري وميناءي دمياط والإسكندرية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${plusJakarta.variable}`}
    >
      <body className="min-h-screen bg-[#0B0F14] text-[#F5F6F7] selection:bg-[#B51219] selection:text-white">
        {children}
      </body>
    </html>
  );
}
