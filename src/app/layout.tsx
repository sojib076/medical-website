import { Metadata } from "next";
import { Rubik } from "@next/font/google";
import "./globals.css";
import Header from "@/components/CommonParts/Header";
import Footer from "@/components/CommonParts/Footer";

// Import Rubik font
const rubik = Rubik({
  subsets: ["latin"], // You can include other subsets if needed
  weight: ["400", "500", "700"], // Add the font weights you plan to use
  variable: "--font-rubik", // Define a CSS variable for easy use
});

export const metadata: Metadata = {
  title: "Medical & Health Care Solutions",
  description: " Medical & Health Care Solutions - Next.js Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased`}>
        <Header />
       
        {children}
        
        <Footer/>
      </body>
    </html>
  );
}
