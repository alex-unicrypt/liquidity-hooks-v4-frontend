

import Image from "next/image";
import ConnectButton from "@/components/connect-button";
import Link from "next/link";

import { AllPoolsQueryQuery, getBuiltGraphSDK } from '../../.graphclient'

export const dynamic = 'force-dynamic'
export const revalidate = 0
import { execute } from '../../.graphclient'
async function fetchGraphQL() {
  const query = `
    {
  pools {
    id
    currency0 {
      id
      decimals
      name
      symbol
    }
    currency1 {
      id
      decimals
      name
      symbol
    }
    locks {
      id
    }
  }
}
  `;

  const response = await fetch('https://api.studio.thegraph.com/query/64359/univ4-locker/v0.0.5', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query })
  });

  if (!response.ok) {
    const message = `An error has occurred: ${response.statusText}`;
    throw new Error(message);
  }

  const data = await response.json();
  return data;
}


export default async function Home() {

  //   const response = await execute(
  //     /* GraphQL */ `
  //       {
  //   pools {
  //     id
  //     # locks {
  //     #   id
  //     # }
  //   }

  // }
  //     `,
  //     {},
  //   )

  let data = await fetchGraphQL()
  // const sdk = getBuiltGraphSDK()

  // try {
  // let allPools = await sdk.AllPoolsQuery();
  // rest of your component logic


  let pools = data.data.pools

  console.log(pools);
  
  return (
    <main className=" items-center max-w-screen-lg mx-auto my-10 rounded-2xl with-title is-rounded">

      {/* Heading */}
      <div className="flex mb-4 justify-between w-full ">
        <div className=" text-xl">
          Latest Pools
        </div>
      </div>
      <div className="items-center flex mx-auto my-10">

        <div className="items-center flex justify-between p-8">


          <div className="mb-32 gap-8 grid text-center lg:mb-0 lg:w-full lg:grid-cols-3 lg:text-left">


            {
              pools.length > 0 && pools.map((pool: any) => {

                return <div key={pool.id}>

                  <Link
                    href={`${pool.id}`}
                    className="is-rounded"
                    // target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className="mb-3 w-full text-2xl font-semibold">
                      {pool.currency0.symbol} /
                      {pool.currency1.symbol}
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50">
                      {pool.locks.length} Locks
                    </p>
                  </Link>
                </div>
              })
            }


          </div>
        </div>

      </div>
    </main>
  );
  // } catch (error) {
  // console.error('Error fetching pools:', error);
  // Handle the error appropriately
  // }

}
