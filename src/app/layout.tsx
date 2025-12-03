import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Little Seedlings English Kindergarten - Montessori Preschool in Saburtalo, Tbilisi",
  description: "Montessori-based English kindergarten in Saburtalo that builds your child's confidence and real-life English skills. A warm, international preschool for ages 3-6.",
  keywords: "kindergarten, Tbilisi, Saburtalo, Montessori, English kindergarten, preschool, international school, Georgia",
  openGraph: {
    title: "Little Seedlings English Kindergarten - Montessori Preschool in Saburtalo, Tbilisi",
    description: "Montessori-based English kindergarten in Saburtalo that builds your child's confidence and real-life English skills.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
