'use client'

import Image from "next/image";
import ConnectButton from "@/components/connect-button";
import Link from "next/link";
import { Slider } from "@/components/ui/slider"
import { useState } from "react";



export default function CreatePage() {

  const [getPercentage, setPercentage] = useState<number>(0)


  return (
    <div className="">

      <main className=" items-center max-w-screen-lg mx-auto my-10 rounded-2xl with-title is-rounded">

        {/* Heading */}
        <div className="flex mb-4 justify-between w-full ">
          <div className=" text-xl">
            Create a Pool
          </div>
        </div>

        {/* clipboard */}
        <div className="mb-8">
          <div className=" text-sm">
            <div className="mt-8 mb-4 text-gray-400">Token A</div>
            <div className="nes-container is-rounded">
              0x5Fb13F64b79AE7bC88b863797Cc27f2C5a9555cF
            </div>
          </div>
          <div className=" text-sm">
            <div className="mt-8 mb-4 text-gray-400">Token B</div>
            <div className="nes-container is-rounded">
              0x5Fb13F64b79AE7bC88b863797Cc27f2C5a9555cF
            </div>
          </div>
        </div>

        <div className="pb-8">
          <div className="mt-8 mb-4 text-gray-400">Fee %</div>
          <div className="flex justify-between">
            <Slider
              defaultValue={[0]}
              max={10}
              step={1}
              onValueChange={(e: [number]) => {
                setPercentage(e[0])
              }}
            />
            <div className="ml-4">{getPercentage}%</div>
          </div>
        </div>
        <button disabled={true} type="button" className={`nes-btn ${true ? 'is-disabled' : 'is-success'}`}>Submit</button>
      </main>
    </div>
  );
}
