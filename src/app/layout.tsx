import type { Metadata } from "next";
import "nes.css/css/nes.min.css"
import "./globals.css";

import { Press_Start_2P } from "next/font/google";
import Web3ModalProvider from "@/appkit_context";
import ConnectButton from "@/components/connect-button";
import Link from "next/link";

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
          <main className="items-center max-w-screen-lg flex mx-auto my-10">

            <div className="nes-container title is-centered w-full border-2 rounded-2xl with-title is-rounded">



              {/* Heading */}
              <div className="flex mb-4 justify-between w-full ">
                <div className=" text-xl">
                  🪝 RugStop Factory
                </div>
                <ConnectButton />
              </div>

              <div className="w-full border border-dotted border-gray-800 mt-12" />

              {/* clipboard */}
              <div className="text-left text-sm">
                <div className="mt-8 mb-4 text-gray-400">Address</div>
                <div className="nes-container is-rounded w-fit max-w-screen-md">
                  0x9206a06620Cd141c546B454a5B0e53b0152aA41e
                </div>
                {/* Bio */}
                <div className="mt-8 mb-4 text-gray-400">What am I?</div>
                <div className="nes-container is-rounded w-fit max-w-screen-md">
                  I am a hook that prevents rugs. Any time someone adds liquidity it gets locked making it sticky.
                </div>
                {/* Bio */}
                <div className="mt-8 mb-4 text-gray-400">What can I do?</div>
                <div className="nes-container is-rounded w-fit max-w-screen-md">
                  - Create a sticky pool <br />
                  - Relock your liquidity <br />
                  - Get you a pizza (jk, cant do that yet...)
                </div>
              </div>

              <div className="w-full border border-dotted border-gray-800 mt-12" />

              <div className="mt-12 flex gap-8 underline">
                <Link scroll={false} href={'/'} className="nes-btn">Pool Dashboard

                </Link>

                <Link scroll={false} href={'/create'} className="nes-btn">Create a Pool

                </Link>

                <Link scroll={false} href={'/lock'} className="nes-btn">Manage Lock


                </Link>
              </div>

              {children}

            </div>
          </main>
        </body>
      </html>
    </Web3ModalProvider>
  );
}
