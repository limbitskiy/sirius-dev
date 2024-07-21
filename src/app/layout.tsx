import type { Metadata } from "next";
import { Inter, Play } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const play = Play({ weight: ["400", "700"], subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Sirius Dev",
  description: "Sirius Dev - creating B2B products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={play.className + " " + inter.className}>{children}</body>
    </html>
  );
}
