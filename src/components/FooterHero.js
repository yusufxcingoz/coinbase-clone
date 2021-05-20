import React from "react";

function FooterHero() {
  return (
    <div class="w-full h-96 bg-blue-hero flex flex-row justify-end mt-32">
      <div class="mr-auto w-96 mt-32 ml-96 ">
        <div class="font-semibold w-72 text-3xl">
          <h1>Earn up to $28 worth of crypto</h1>
        </div>
        <div class="w-full">
          <p class="text-md">
            Discover how specific cryptocurrencies work — and get a bit of each
            crypto to try out for yourself.
          </p>
        </div>
        <button class="bg-blue-600 text-white h-10 w-32 mt-6 rounded-xl font-semibold hover:bg-blue-500 duration-200">
          Start earning
        </button>
      </div>
      <div class="h-full">
        <img
          class="h-full"
          src="https://assets.coinbase.com/assets/earn-upsell-desktop.dad0f473399e16fa8c176a9599c883ea.webp"
        />
      </div>
    </div>
  );
}

export default FooterHero;
