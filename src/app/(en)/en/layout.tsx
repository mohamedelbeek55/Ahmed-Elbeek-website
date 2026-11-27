import type { ReactNode } from "react";
import "@/app/globals.css";
import { cairo, plusJakarta } from "@/lib/fonts";
import { sharedViewport } from "@/lib/metadata";

export const viewport = sharedViewport;

export default function EnglishRootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${cairo.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-clip bg-[#0B0F14] font-sans text-[#F5F6F7] antialiased selection:bg-[#B51219]/35 selection:text-[#F5F6F7]">
        {children}
      </body>
    </html>
  );
}
