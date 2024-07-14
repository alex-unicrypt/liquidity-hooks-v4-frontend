'use client'

import React, { ReactNode } from 'react'
import { config, projectId } from '@/appkit_config'

import { createWeb3Modal } from '@web3modal/wagmi/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { State, WagmiProvider } from 'wagmi'
import { Press_Start_2P } from "next/font/google";
const press_Start_2P = Press_Start_2P({ weight: "400", subsets: ["latin"], display: 'swap' });

// Setup queryClient
const queryClient = new QueryClient()

if (!projectId) throw new Error('Project ID is not defined')

// Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default

  themeVariables: {
    '--w3m-accent': '#CCCCCC',
    '--w3m-font-family': `${press_Start_2P.style.fontFamily}, monospace`,
    '--w3m-color-mix': '#AAAAAA',
    '--w3m-color-mix-strength': 5,
    '--w3m-font-size-master': '6',

    '--w3m-border-radius-master': '0px',

  }
})

export default function Web3ModalProvider({
  children,
  initialState
}: {
  children: ReactNode
  initialState?: State
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}