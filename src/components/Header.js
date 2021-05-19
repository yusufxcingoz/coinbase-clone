import React from "react";

export default function Header() {
  return (
    <div class="w-full border-b-2 flex flex-row justify-center">
      <div class="flex flex-row justify-between w-11/12 h-16  text-2xl  items-center ">
        <h1 class="cursor-pointer font-bold text-blue-600 ml-5 hover:text-blue-500 duration-300 ">
          coinbase
        </h1>
        <div class="flex flex-row text-sm font-medium  items-center">
          <div class="">
            <h1 class="mx-4 cursor-pointer h-16 flex  flex-col justify-center hover:text-gray-600  duration-300">
              Prices
            </h1>
          </div>

          <div>
            {" "}
            <h1 class="hover:text-gray-600 mx-4 cursor-pointer h-16 flex  flex-col justify-center duration-300 ">
              Learn
            </h1>
          </div>
          <div>
            {" "}
            <h1 class="hover:text-gray-600 mx-4 cursor-pointer h-16 flex  flex-col justify-center duration-300">
              Individulas
            </h1>
          </div>
          <div>
            {" "}
            <h1 class="hover:text-gray-600 mx-4 cursor-pointer h-16 flex  flex-col justify-center duration-300">
              Businnes
            </h1>
          </div>
          <div>
            <h1 class="hover:text-gray-600 mx-4 cursor-pointer h-16 flex  flex-col justify-center duration-300">
              Developles
            </h1>
          </div>
          <div>
            {" "}
            <h1 class="hover:text-gray-600 mx-4 cursor-pointer h-16 flex  flex-col justify-center duration-300">
              Company
            </h1>
          </div>
        </div>
        <div class="flex flex-row text-sm items-center">
          <a class="mx-3 font-semibold hover:text-gray-600 cursor-pointer duration-300">
            Sing in
          </a>
          <div>
            <button class="mx-3 bg-blue-600 h-10 w-24 rounded-lg text-white font-semibold hover:bg-blue-500 duration-300">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
