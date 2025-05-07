import type { Metadata } from "next";
import "./globals.css";
import FloatingButtons from "@/components/floating-buttons";



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
      <body className={` bg-gray-100 text-gray-800`}> {/* Slightly gray background */}
        {/* <Navbar /> */}
        <main>{children}</main>
        {/* <Footer /> */}
        <FloatingButtons />
      </body>
    </html>
  );
}