import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const font = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SOUFIANECODE",
  description: "SOUFIANE's Portfolio",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="max-w-[1110px] mx-auto bg-background">
          
          {children}
        </div>
      </body>
    </html>
  );
}
