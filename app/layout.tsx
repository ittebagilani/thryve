import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import CornerNav from "@/components/ui/corner-nav";


const mont = Raleway({
  subsets: ["latin"],
  variable: "--font-mont",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Thryve",
  description: "Thryve Marketing Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mont.className} antialiased`}
      >
        {/* <Navigation /> */}
        <CornerNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
