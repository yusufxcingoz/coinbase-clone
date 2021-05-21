import React from "react";
import SearchIcon from "@material-ui/icons/Search";

function MarketStatus() {
  return (
    <div class="flex flex-row items-center justify-between mt-10 ">
      <div class="align-middle w-64">
        <h1 class=" flex flex-col ">
          <span class="text-sm text-gray-400">In past 24 hours</span>
          <span class="flex flex-row font-semibold text-2xl">
            Market is up
            <span class="text-green-400 mx-3 font-medium">1.49%</span>
          </span>
        </h1>
      </div>

      <div class="table-row-group border-2 rounded-md w-96   ">
        <div class="flex flex-row items-center">
          <SearchIcon class="w-6 fill-current text-gray-400 mx-1" />
          <input
            class=" h-10 p-2 outline-none rounded-lg"
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
