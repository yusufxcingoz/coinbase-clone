import React from "react";
import MarketStatus from "./MarketStatus";
import PriceTable from "./PriceTable";

function Tops({ coins }) {
  const slicedCoins = coins.slice(0, 6);

  return (
    <div class="w-full flex flex-row justify-center  ">
      <div class="flex flex-col ">
        <MarketStatus />
        <div class="flex mt-10  justify-between rounded-md ">
          <div class="flex flex-col w-96 border-2 h-32 justify-between ">
            <h1 class="font-semibold mt-3 mx-5">Top gainer(24h)</h1>
            <div>
              <div class="flex flex-row items-center justify-between ">
                <div class="flex flex-row m-5">
                  <div class=" w-10 h-10 rounded-full mr-5">
                    <img src={slicedCoins[0].image} />
                  </div>
                  <div class="flex flex-col">
                    <h1>{slicedCoins[0].symbol.toUpperCase()}</h1>
                    <h1 class="text-green-400">
                      {" "}
                      {slicedCoins[0].price_change_percentage_24h
                        .toString()
                        .substring(0, 5)}
                      %
                    </h1>
                  </div>
                </div>
                <div class="mx-5">
                  <h1> USD {slicedCoins[0].current_price}</h1>
                </div>
              </div>
              <p></p>
            </div>
          </div>

          <div class="flex flex-col w-96 border-2 border-l-0 h-32 justify-between">
            <h1 class="font-semibold mt-3 mx-5">New listing</h1>
            <div>
              <div class="flex flex-row items-center justify-between ">
                <div class="flex flex-row m-5">
                  <div class=" w-10 h-10 rounded-full mr-5">
                    <img src={slicedCoins[1].image} />
                  </div>
                  <div class="flex flex-col">
                    <h1>{slicedCoins[1].symbol.toUpperCase()}</h1>
                    <h1 class="text-green-400">
                      {" "}
                      {slicedCoins[1].price_change_percentage_24h
                        .toString()
                        .substring(0, 5)}
                      %
                    </h1>
                  </div>
                </div>
                <div class="mx-5">
                  <h1> USD {slicedCoins[1].current_price}</h1>
                </div>
              </div>
              <p></p>
            </div>
          </div>
          <div class="flex bg-green-coinbase flex-col w-96  h-32 justify-between ">
            <div class="w-48 ml-5 my-auto">
              <h1 class="font-semibold mt-3 mx-5">
                Crypto questions, answered{" "}
              </h1>
              <p class="mt-1 mx-5 font-light text-sm">Learn with Coinbase</p>
            </div>
          </div>
        </div>

        <div class="flex  justify-between">
          <div class="flex flex-col w-96 border-2 border-t-0 h-32 justify-between">
            <h1 class="font-semibold mt-3 mx-5">Highest volume(24h)</h1>
            <div>
              <div class="flex flex-row items-center justify-between ">
                <div class="flex flex-row m-5">
                  <div class=" w-10 h-10 rounded-full mr-5">
                    <img src={slicedCoins[2].image} />
                  </div>
                  <div class="flex flex-col">
                    <h1>{slicedCoins[2].symbol.toUpperCase()}</h1>
                    <h1 class="text-green-400">
                      {slicedCoins[2].price_change_percentage_24h
                        .toString()
                        .substring(0, 5)}
                      %
                    </h1>
                  </div>
                </div>
                <div class="mx-5">
                  <h1> USD {slicedCoins[2].current_price}</h1>
                </div>
              </div>
              <p></p>
            </div>
          </div>

          <div class="flex flex-col w-96 border-2 border-l-0  border-t-0 h-32 justify-between">
            <h1 class="font-semibold mt-3 mx-5">Most visited(24h)</h1>
            <div>
              <div class="flex flex-row items-center justify-between ">
                <div class="flex flex-row m-5">
                  <div class=" w-10 h-10 rounded-full mr-5">
                    <img src={slicedCoins[3].image} />
                  </div>
                  <div class="flex flex-col">
                    <h1>{slicedCoins[1].symbol.toUpperCase()}</h1>
                    <h1 class="text-green-400">
                      {slicedCoins[3].price_change_percentage_24h
                        .toString()
                        .substring(0, 5)}
                      %
                    </h1>
                  </div>
                </div>
                <div class="mx-5">
                  <h1> USD {slicedCoins[3].current_price}</h1>
                </div>
              </div>
              <p></p>
            </div>
          </div>
          <div class="flex flex-col w-96 border-2 border-l-0  border-t-0 h-32 justify-between">
            <h1 class="font-semibold mt-3 mx-5">Earn free crypto</h1>
            <div>
              <div class="flex flex-row items-center justify-between ">
                <div class="flex flex-row m-5">
                  <div class="bg-black w-10 h-10 rounded-full mr-5"></div>
                  <div class="flex flex-col">
                    <h1>Cartesi</h1>
                    <h1 class="text-green-400">+18.68%</h1>
                  </div>
                </div>
                <div class="mx-5">
                  <h1> TRY 10.31</h1>
                </div>
              </div>
              <p></p>
            </div>
          </div>
        </div>
        <PriceTable coin={coins} />
      </div>
    </div>
  );
}

export default Tops;
