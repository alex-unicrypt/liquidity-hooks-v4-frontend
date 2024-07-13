import type { Metadata } from "next";
import "nes.css/css/nes.min.css"
import "./globals.css";

import { Press_Start_2P } from "next/font/google";
import Web3ModalProvider from "@/appkit_context";

export const metadata: Metadata = {
  title: "Sticky Hook",
  description: "Uniswap V4 hook where the liquidity just cant escape!",
};


const press_Start_2P = Press_Start_2P({ weight: "400", subsets: ["greek"], display: 'swap' });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    // Todo: rename me to context providers

    <Web3ModalProvider>
      <html lang="en">
        <body className={press_Start_2P.className}>
          {children}
        </body>
      </html>
    </Web3ModalProvider>
  );
}
