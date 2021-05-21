import React from "react";
import Select from "react-select";

function Footer() {
  return (
    <div class="flex justify-center items-center m-auto w-3/4 p-16">
      <div class="flex ">
        <div class="flex-1 my-12 ml-12 pl-5 ">
          <h1 class="cursor-pointer font-semibold mb-5 text-blue-600  md:text-3xl  hover:text-blue-500 duration-300">
            coinbase
          </h1>
          <select name="cars" id="cars" class="border-2 w-56 h-8 rounded-sm">
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="dutch">Dutch</option>
            <option value="german">German</option>
            <option value="turksih">Turkish</option>
          </select>
          <div class="text-sm font-md my-6 text-gray-400">
            <p>© 2021 Coinbase</p>
            <p>Blog • Twitter • Facebook</p>
          </div>
        </div>
        <div class="flex flex-row">
          <div class="flex flex-col my-5 mx-8">
            <div class="flex flex-col my-5 leading-5">
              <h1 class="text-lg font-semibold mb-2 text-gray-800">Compnay</h1>
              <p class="text-md font-medium text-gray-500">About</p>
              <p class="text-md font-medium text-gray-500">Careers</p>
              <p class="text-md font-medium text-gray-500">Affiliates</p>
              <p class="text-md font-medium text-gray-500">Blog</p>
              <p class="text-md font-medium text-gray-500">Press</p>
              <p class="text-md font-medium text-gray-500">Investors</p>
              <p class="text-md font-medium text-gray-500">Legal & privacy</p>
              <p class="text-md font-medium text-gray-500">Cookie policiy</p>
            </div>
            <div class="flex flex-col my-5">
              <h1 class="text-lg font-semibold mb-2 text-gray-800 leading-5">
                Learn
              </h1>
              <p class="text-md font-medium text-gray-500">
                Browse crypto prices
              </p>
              <p class="text-md font-medium text-gray-500">Tips & tutorials</p>
              <p class="text-md font-medium text-gray-500">Market updates </p>
              <p class="text-md font-medium text-gray-500">What is Bitcoin?</p>
              <p class="text-md font-medium text-gray-500">
                What is a blockchain?
              </p>
              <p class="text-md font-medium text-gray-500">
                How to set up a crypto wallet?
              </p>
              <p class="text-md font-medium text-gray-500">
                How to send crypto
              </p>
              <p class="text-md font-medium text-gray-500">Taxes </p>
            </div>
          </div>
          <div class="flex flex-col my-4">
            <div class="flex flex-col my-5">
              <h1 class="text-lg font-semibold mb-2 text-gray-800">
                Individuals
              </h1>
              <p class="text-md font-medium text-gray-500">Buy & sell</p>
              <p class="text-md font-medium text-gray-500">Earn free crypto</p>
              <p class="text-md font-medium text-gray-500">Wallet </p>
              <p class="text-md font-medium text-gray-500">Card</p>
            </div>
            <div class="flex flex-col my-5">
              <h1 class="text-lg font-semibold mb-2 text-gray-800">Businnes</h1>
              <p class="text-md font-medium text-gray-500">Prime</p>
              <p class="text-md font-medium text-gray-500">Custody</p>
              <p class="text-md font-medium text-gray-500">Asset Hub </p>
              <p class="text-md font-medium text-gray-500">Commerce</p>
            </div>
            <div class="flex flex-col my-5">
              <h1 class="text-lg font-semibold mb-2 text-gray-800">
                Developers
              </h1>
              <p class="text-md font-medium text-gray-500">Connect</p>
              <p class="text-md font-medium text-gray-500">Commerce</p>
              <p class="text-md font-medium text-gray-500">Pro </p>
              <p class="text-md font-medium text-gray-500">Bison Trails</p>
              <p class="text-md font-medium text-gray-500">WalletLink</p>
              <p class="text-md font-medium text-gray-500">Rosetta</p>
              <p class="text-md font-medium text-gray-500">USDC</p>
            </div>
          </div>
          <div></div>
        </div>
        <div class="flex-1">
          <div class="flex flex-col my-8 mx-16">
            <h1 class="text-lg font-semibold mb-2 text-gray-800">Support</h1>
            <p class="text-md font-medium text-gray-500">Contact us</p>
            <p class="text-md font-medium text-gray-500">Create account</p>
            <p class="text-md font-medium text-gray-500"> ID verification</p>
            <p class="text-md font-medium text-gray-500">Account information</p>
            <p class="text-md font-medium text-gray-500">Payment methods</p>
            <p class="text-md font-medium text-gray-500">Account acces</p>
            <p class="text-md font-medium text-gray-500">Supported crypto</p>
            <p class="text-md font-medium text-gray-500">Supported countries</p>
            <p class="text-md font-medium text-gray-500">Status</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
