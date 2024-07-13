{/* <ConnectButton /> */ }

import type { Metadata } from "next";
// import { Press_Start_2P } from "next/font/google";
import "nes.css/css/nes.min.css"
import "./globals.css";
import { cookieToInitialState } from 'wagmi'
import { headers } from 'next/headers'

import { config } from '@/appkit_config'

import Web3ModalProvider from '@/appkit_context'
// import ConnectButton from "./_modules/connect-button";


// const press_Start_2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sticky Hook",
  description: "Uniswap V4 hook where the liquidity just cant escape!",
};

export default function StickyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    // Todo: rename me to context providers

    // <Web3ModalProvider>

    //   <html lang="en">
    //     <body className={press_Start_2P.className}>
    //     </body>
    //   </html>
    // </Web3ModalProvider>
    
    <>
      {children}
    </>
  );
}
