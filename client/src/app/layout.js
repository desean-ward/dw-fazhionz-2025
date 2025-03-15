import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header.component";

export const metadata = {
  title: "D.W. Fazhionz!",
  description: "Modern Apparel for Modern Mindz",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
