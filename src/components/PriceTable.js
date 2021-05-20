import React from "react";
import PriceTableItem from "./PriceTableItem";

export default function PriceTable({ coin }) {
  return (
    <div class="text-sm mt-12 border-b-2 border-gray-200  mb-5">
      <div clasS="flex flex-row justify-between">
        <div class="flex flex-row items-center mb-3 ">
          <div class="px-7 py-1 m-2 font-semibold text-blue-600 bg-blue-100 rounded-full">
            All assests
          </div>
          <div class="px-7 py-1 m-2 font-semibold">Tradable</div>
          <div class="px-7 py-1 m-2 font-semibold">Gainers</div>
          <div class="px-7 py-1 m-2 font-semibold">Losers</div>
        </div>
        <div class="flex flex-row font-semibold ">
          <div class="mx-5">1H</div>
          <div class="mx-5 text-blue-600">24H</div>
          <div class="mx-5">1W</div>
          <div class="mx-5">1M</div>
          <div class="ml-5">1Y</div>
        </div>
      </div>
      <div class="flex flex-row  justify-between font-light h-12 items-center border-2 text-xs text-gray-600">
        <div class="w-32 m-5  ">
          <p>Name</p>
        </div>

        <div class="flex flex-row justify-between items-center  ">
          <p class="mx-8">Price</p>
          <p class="mx-8">Change</p>
          <p class="mx-8">Volume(24h)</p>
          <p class="mx-8 flex flex-row items-center">
            Market Cap
            <svg
              class="mx-2"
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="none"
              class="AssetTableHelpers__SortIcon-sc-1o9oxiy-3 hlrgvF"
            >
              <path d="M3.167 0l2.5 2.828h-5L3.167 0z" fill="#B8C2CC"></path>
              <path d="M3.167 8l-2.5-2.828h5L3.167 8z" fill="#1652F0"></path>
            </svg>
          </p>
          <p class="mx-8">Supply</p>
          <p class="mx-8">Trade</p>
        </div>
      </div>
      <PriceTableItem coins={coin} />
    </div>
  );
}
