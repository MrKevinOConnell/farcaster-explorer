'use client'
import "./globals.css";
import Link from "next/link";
import Providers from "./providers";
import Search from "@/components/search";
import { usePathname } from 'next/navigation'
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative h-screen flex flex-col items-center justify-center min-h-screen">
        <Providers>
          <div className="absolute top-0 left-0 p-2">
            <Link href="https://www.neynar.com" target="_blank">
              <img className="w-16 md:w-32" src={"/neynar.png"} />
            </Link>
          </div>
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2 p-2">
            <Link href="/" className="text-black font-bold">
              <p className="text-md md:text-">Farcaster Explorer</p>
            </Link>
          </div>
          <div className="w-full absolute top-10 justify-center mt-12 max-h-32 max-w-sm md:max-w-md">
            <Search />
      </div>
          <div className="w-full px-4 md:px-8 mt-24 md:mt-0 flex flex-col ">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
