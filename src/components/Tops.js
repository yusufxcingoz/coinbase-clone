import React from "react";
import MarketStatus from "./MarketStatus";
import PriceTable from "./PriceTable";

function Tops({ coins }) {
  return (
    <div class="w-full flex flex-row justify-center ">
      <div class="flex flex-col">
        <MarketStatus />
        <div class="flex mt-10  justify-between">
          <div class="flex flex-col w-96 border-2 h-32 justify-between">
            <h1 class="font-semibold mt-3 mx-5">Top gainer(24h)</h1>
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

          <div class="flex flex-col w-96 border-2 border-l-0 h-32 justify-between">
            <h1 class="font-semibold mt-3 mx-5">New listing</h1>
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
          <div class="flex flex-col w-96 border-2 border-l-0 h-32 justify-between">
            <h1 class="font-semibold mt-3 mx-5">Crypto questions </h1>
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

        <div class="flex  justify-between">
          <div class="flex flex-col w-96 border-2 border-t-0 h-32 justify-between">
            <h1 class="font-semibold mt-3 mx-5">Highest volume(24h)</h1>
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

          <div class="flex flex-col w-96 border-2 border-l-0  border-t-0 h-32 justify-between">
            <h1 class="font-semibold mt-3 mx-5">Most visited(24h)</h1>
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
