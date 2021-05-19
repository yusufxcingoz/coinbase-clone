import React from "react";

function MarketStatus() {
  return (
    <div class="w-full flex flex-row justify-center mt-12">
      <div class="flex flex-row justify-between w-3/5 items-center  ">
        <div class="flex flex-col ">
          <p class="text-sm text-gray-400">In the past 24 hours</p>
          <div class="flex flex-ro<w">
            <h1 class="text-2xl mr-5">Market is up </h1>
            <h1 class="text-2xl text-green-400">1.19%</h1>
          </div>
        </div>

        <div>
          <input
            class="border-2 w-96 h-12 p-2 rounded-lg"
            type="text"
            name="name"
            placeholder=" Search all assests"
          />
        </div>
      </div>
    </div>
  );
}

export default MarketStatus;
