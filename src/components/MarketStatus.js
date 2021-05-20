import React from "react";

function MarketStatus() {
  return (
    <div class="flex flex-row items-center justify-between mt-12 ">
      <div class="align-middle w-64">
        <h1 class=" flex flex-col ">
          <span class="text-sm text-gray-400">In past 24 hours</span>
          <span class="flex flex-row font-semibold text-2xl">
            Market is up
            <span class="text-green-400 mx-3 font-medium">1.49%</span>
          </span>
        </h1>
      </div>

      <div class="table-row-group">
        <input
          class="border-2 w-96 h-12 p-2 rounded-lg"
          type="text"
          name="name"
          placeholder=" Search all assests"
        />
      </div>
    </div>
  );
}

export default MarketStatus;
