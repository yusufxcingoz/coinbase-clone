import React from "react";

function PriceTableItem({ coins }) {
  return (
    <div>
      {coins.map((e) => {
        if (e.market_cap_change_24h > 0) {
          return (
            <div class="flex flex-row items-center border-l-2 font-semibold border-r-2 justify-between hover:bg-blue-100 cursor-pointer duration-200">
              <div class="px-5 py-3 flex flex-row items-center ">
                <div class="w-10 h-10  rounded-full">
                  <img src={e.image} />
                </div>
                <div class="text-lg mx-5 flex flex-row">
                  <h1>{e.name}</h1>
                  <h1 class="mx-5 font-light text-gray-500">
                    {e.symbol.toUpperCase()}
                  </h1>
                </div>
              </div>

              <div class="flex flex-row justify-between items-center px-5 py-3 ">
                <div class="flex justify-end ml-8 mr-2">
                  <p class=" font-semibold">USD {e.current_price}</p>
                </div>
                <div class="flex mx-8 justify-end">
                  <p class=" text-green-400">
                    % {e.price_change_percentage_24h.toString().substring(0, 5)}
                  </p>
                </div>
                <div class="flex justify-end mx-5">
                  <p class="">
                    USD {e.total_volume.toString().substring(0, 5)}
                  </p>
                </div>
                <div class="mx-10">
                  <p>
                    USD {e.market_cap_change_24h.toString().substring(0, 5)}
                  </p>
                </div>
                <p class="mr-10 ml-4">116.0M</p>
                <button class=" bg-blue-600 text-white w-16 h-8 rounded-lg">
                  Trade
                </button>
              </div>
            </div>
          );
        } else {
          return (
            <div class="flex flex-row items-center border-l-2 border-r-2 font-semibold justify-between hover:bg-blue-100 cursor-pointer duration-200">
              <div class="px-5 py-3 flex flex-row items-center ">
                <div class="w-10 h-10  rounded-full">
                  <img src={e.image} />
                </div>
                <div class="text-lg mx-5 flex flex-row">
                  <h1>{e.name}</h1>
                  <h1 class="mx-5 font-light text-gray-500">
                    {e.symbol.toUpperCase()}
                  </h1>
                </div>
              </div>

              <div class="flex flex-row justify-between items-center px-5 py-3 ">
                <div class="flex justify-end ml-8 mr-2">
                  <p class=" font-semibold">USD {e.current_price}</p>
                </div>
                <div class="flex mx-8 justify-end">
                  <p class=" text-red-600">
                    % {e.price_change_percentage_24h.toString().substring(0, 5)}
                  </p>
                </div>

                <div class="flex justify-end mx-5 ">
                  <p class="">
                    USD {e.total_volume.toString().substring(0, 5)}
                  </p>
                </div>
                <p class="mr-12 ml-4">
                  USD {e.market_cap_change_24h.toString().substring(0, 5)}
                </p>
                <p class="mr-10 ml-4">116.0M</p>
                <button class=" bg-blue-600 text-white w-16 h-8 rounded-lg">
                  Trade
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default PriceTableItem;
