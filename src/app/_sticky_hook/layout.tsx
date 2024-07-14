import type { Metadata } from "next";
import "nes.css/css/nes.min.css"
import "./globals.css";

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
    <>
      {children}
    </>
  );
}
