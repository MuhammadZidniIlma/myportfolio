import { Geist, Geist_Mono, Press_Start_2P, Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MZI Portfolio",
  description: "My Portfolio",
};


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart.variable} ${montserrat.className} antialiased bg-red-600 `}
      >
        <Navbar />
        <div className="relative overflow-x-hidden">
        {children}
        </div>
      </body>
    </html>
  );
}
