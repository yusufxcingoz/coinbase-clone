import axios from "axios";

import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import FooterHero from "./components/FooterHero";
import Header from "./components/Header";
import MarketStatus from "./components/MarketStatus";
import PriceTable from "./components/PriceTable";
import Tops from "./components/Tops";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div class=" flex flex-col justify-center">
      <div></div>
      <Header />
      <Tops coins={coins} />
      <FooterHero />
      <Footer />
    </div>
  );
}

export default App;
