import type { Metadata } from "next";
// Import your chosen font if needed, e.g., Tajawal
import { Tajawal } from "next/font/google";
import "./globals.css";
import FloatingButtons from "@/components/floating-buttons";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


// Setup font if using one
const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  // variable: "--font-tajawal", // Optional if not using CSS var
});

export const metadata: Metadata = {
  title: "العالمية للصيانة | خدمة صيانة معتمدة", // Adjusted Title
  description: "مركز العالمية للصيانة يقدم خدمات صيانة لـ كارير، يونيون اير، شارب، توشيبا، ال جي، فريش.", // Updated Desc
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      {/* Apply font class if needed */}
      <body className={`${tajawal.className} bg-gray-100 text-gray-800`}> {/* Slightly gray background */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}