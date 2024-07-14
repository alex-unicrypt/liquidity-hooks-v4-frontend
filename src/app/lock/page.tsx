'use client'

import Image from "next/image";
import ConnectButton from "@/components/connect-button";
import Link from "next/link";
import { Slider } from "@/components/ui/slider"
import { useEffect, useState } from "react";
import {
  useAccount,
  useBalance,
  useReadContract,
  useWriteContract,
  useSimulateContract,
  useSwitchChain,
  useWaitForTransactionReceipt,
} from 'wagmi'

import { useRouter } from "next/navigation";
import { formatUnits } from 'viem'

// ABIs
import { erc20Abi } from '@/abis/erc20Abi'
import { rugStopFactoryAbi } from '@/abis/rugStopPoolFactoryAbi'


export default function LockPage() {

  const [getPercentage, setPercentage] = useState<number>(0)
  const [getTokenA, setTokenA] = useState<string>('')
  const [getTokenB, setTokenB] = useState<string>('')

  const { address, chain } = useAccount()
  const router = useRouter()

  // const [getAddressState, setAddressState] = useState<string | undefined>()

  const userBalanceTokenA = useBalance({
    address: address as `0x${string}`, token: getTokenA as `0x${string}`, query: { enabled: getTokenA.length === 42 }
  })

  const userBalanceTokenB = useBalance({
    address: address as `0x${string}`, token: getTokenB as `0x${string}`, query: { enabled: getTokenB.length === 42 }
  })


  // const hookAllowanceA = useReadContract({
  //   address: getTokenA as `0x${string}`, abi: erc20ABI,
  //   functionName: 'allowance',
  //   chainId: Number(chain),
  //   args: [address as `0x${string}`, "0x5Fb13F64b79AE7bC88b863797Cc27f2C5a9555cF" as `0x${string}`],
  // })

  // const hookAllowanceB = useReadContract({
  //   address: getTokenB as `0x${string}`, abi: erc20ABI,
  //   functionName: 'allowance',
  //   chainId: Number(chain),
  //   args: [address as `0x${string}`, "0x5Fb13F64b79AE7bC88b863797Cc27f2C5a9555cF" as `0x${string}`],
  // })

  const simulateCreatePool = useSimulateContract({
    address: '0x5Fb13F64b79AE7bC88b863797Cc27f2C5a9555cF' as `0x${string}`, // TODO: change into a map of ABIs
    abi: rugStopFactoryAbi,
    functionName: 'initializePool',
    args: [getTokenA as `0x${string}`, getTokenB as `0x${string}`, getPercentage],
  })


  const { data: createPoolHash, writeContract: createPoolWriteContract } = useWriteContract()

  const waitForPoolCreate = useWaitForTransactionReceipt({
    confirmations: 1,
    hash: createPoolHash,
  })


  // useEffect(() => {

  //   if (waitForPoolCreate.isSuccess) {

  //   }

  // }, [waitForPoolCreate.isSuccess])


  const canProceed = getTokenA !== '' && getTokenB !== '' && !simulateCreatePool.isError && !simulateCreatePool.isLoading

  return (
    <div className="">

      <main className=" items-center max-w-screen-lg mx-auto my-10 rounded-2xl with-title is-rounded">

        {/* Heading */}
        <div className="flex mb-4 mt-8 justify-between w-full ">
          <div className=" text-xl">
            Lock
          </div>
        </div>

        {/* clipboard */}
        <div className="mb-8">
          <div className=" text-sm">
            <div className="mt-8 mb-4 text-gray-400">Token A</div>
            <input value={getTokenA} onChange={(e) => setTokenA(e.target.value)} type="text" placeholder="0x..." className="nes-input bg-black is-rounded" />
          </div>

          <div className="text-sm mt-2 text-gray-600">
            {userBalanceTokenA.data ? userBalanceTokenA.data?.value.toString() : 'Enter a token address'}
          </div>

          <div className=" text-sm">
            <div className="mt-8 mb-4 text-gray-400">Token B</div>
            <input value={getTokenB} onChange={(e) => setTokenB(e.target.value)} type="text" placeholder="0x..." className="nes-input bg-black is-rounded" />
          </div>
          <div className="text-sm mt-2 text-gray-600">
            {userBalanceTokenB.data ? userBalanceTokenB.data?.value.toString() : 'Enter a token address'}
          </div>

        </div>

        <div className="pb-8">
          {
            simulateCreatePool.isError ?
              <div>
                <div>{simulateCreatePool.error.name}</div>
                <div>{simulateCreatePool.error.message}</div>
              </div> : simulateCreatePool.isLoading ? 'Simulating...' : 'Simulation Passed'
          }
        </div>

        <div>
          <button onClick={() => { simulateCreatePool && simulateCreatePool.data && createPoolWriteContract(simulateCreatePool.data.request) }} disabled={!canProceed} type="button" className={`nes-btn ${!canProceed ? 'is-disabled' : 'is-success'}`}>{waitForPoolCreate.isLoading ? 'Loading...' : waitForPoolCreate.isSuccess ? 'Success!' : 'Submit'}</button>
        </div>


        {/* TEST */}
        {/* <div className="flex mb-4 justify-between w-full ">
          <div className=" text-xl">
            Drain
          </div>
        </div> */}


        {/* TEST RELOCK */}
        <div className="flex mb-4 justify-between w-full ">
          <div className=" text-xl">
            Relock
          </div>
        </div>

        {/* clipboard */}
        <div className="mb-8">
          {/* <div className=" text-sm">
            <div className="mt-8 mb-4 text-gray-400">Token A</div>
            <input value={getTokenA} onChange={(e) => setTokenA(e.target.value)} type="text" placeholder="0x..." className="nes-input bg-black is-rounded" />
          </div> */}
          <div className="pb-8">
            <div className="mt-8 mb-4 text-gray-400">Days</div>
            <div className="flex justify-between">
              <Slider
                defaultValue={[0]}
                max={365}
                step={1}
                onValueChange={(e: [number]) => {
                  setPercentage(e[0])
                }}
              />
              {/* <div className="ml-4">{getPercentage}%</div> */}
            </div>
          </div>
          <div className="text-sm mt-2 text-gray-600">
            {`Relocking for ${'100'} days`}
          </div>


          <div className="pb-8">
            {
              simulateCreatePool.isError ?
                <div>
                  <div>{simulateCreatePool.error.name}</div>
                  <div>{simulateCreatePool.error.message}</div>
                </div> : simulateCreatePool.isLoading ? 'Simulating...' : 'Simulation Passed'
            }
          </div>

          <div>
            <button onClick={() => { simulateCreatePool && simulateCreatePool.data && createPoolWriteContract(simulateCreatePool.data.request) }} disabled={!canProceed} type="button" className={`nes-btn ${!canProceed ? 'is-disabled' : 'is-success'}`}>{waitForPoolCreate.isLoading ? 'Loading...' : waitForPoolCreate.isSuccess ? 'Success!' : 'Submit'}</button>
          </div>
          {/* <div className=" text-sm">
            <div className="mt-8 mb-4 text-gray-400">Token B</div>
            <input value={getTokenB} onChange={(e) => setTokenB(e.target.value)} type="text" placeholder="0x..." className="nes-input bg-black is-rounded" />
          </div>
          <div className="text-sm mt-2 text-gray-600">
            {userBalanceTokenB.data ? userBalanceTokenB.data?.value.toString() : 'Enter a token address'}
          </div> */}

        </div>





      </main>
    </div>
  );
}
