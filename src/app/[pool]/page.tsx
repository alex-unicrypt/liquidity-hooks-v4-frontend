

import Image from "next/image";
import ConnectButton from "@/components/connect-button";
import Link from "next/link";


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
      owner {
      id
      }
      unlockDate
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


export default async function Home({
  params
}: {
  params: {
    pool: string
  }
}
) {



  let data = await fetchGraphQL()


  console.log(data);
  let pools = data.data.pools

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


          <div className="mb-32 ">



            <table className="nes-table bg-black ${tableClasses}"
            //  style={"margin:15px 4px 5px 4px"}
            >
              <thead>
                <tr>
                  <th>Lock ID</th>
                  <th>Owner</th>
                  {/* <th>Unlock TS</th> */}
                </tr>
              </thead>
              <tbody>

                {
                  pools.length > 0 && pools.map((pool: any) => {

                    if (pool.id == params.pool) {

                      return pool.locks.map((lock: any) => {
                        return < tr key={lock.id} >
                          <td>{lock.id}</td>
                          <td>{lock.owner.id}</td>
                          {/* <td>{lock.unlockDate}</td> */}
                        </tr>
                      })
                    }


                  })
                }

              {/* 
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
                      </Link> */}

              {/* <tr>
                  <td>Thou hast had a good morning</td>
                  <td>Thou hast had a good afternoon</td>
                  <td>Thou hast had a good night</td>
                </tr> */}
            </tbody>
          </table>

          {
            pools.length > 0 && pools.map((pool: any) => {

              return <div key={pool.id}>

                {/* <div
                    // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className="nes-container is-rounded px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
                  </div> */}
              </div>
            })
          }


        </div>
      </div>

    </div>
    </main >
  );
  // } catch (error) {
  // console.error('Error fetching pools:', error);
  // Handle the error appropriately
  // }

}


