const bitcoinPriceElement = document.querySelector("#bitcoin-price");
const bitcoinPriceChangeElement = document.querySelector("#bitcoin-price-change");
const ethereumPriceElement = document.querySelector("#ethereum-price");
const ethereumPriceChangeElement = document.querySelector("#ethereum-price-change");
const binancePriceElement = document.querySelector("#binance-coin-price");
const binancePriceChangeElement = document.querySelector("#binance-coin-price-change");
const tetherPriceElement = document.querySelector("#tether-price");
const tetherPriceChangeElement = document.querySelector("#tether-price-change");

const fetchCryptoPrices = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Ctether&vs_currencies=usd&include_24hr_change=true"
    );
    const data = await response.json();
    const bitcoinPrice = data.bitcoin.usd;
    const bitcoinPriceChange = data.bitcoin.usd_24h_change;
    const ethereumPrice = data.ethereum.usd;
    const ethereumPriceChange = data.ethereum.usd_24h_change;
    const binancePrice = data.binancecoin.usd;
    const binancePriceChange = data.binancecoin.usd_24h_change;
    const tetherPrice = data.tether.usd;
    const tetherPriceChange = data.tether.usd_24h_change;
    bitcoinPriceElement.innerHTML = `$${bitcoinPrice}`;
    bitcoinPriceChangeElement.innerHTML = `${bitcoinPriceChange.toFixed(2)}%`;
    ethereumPriceElement.innerHTML = `$${ethereumPrice}`;
    ethereumPriceChangeElement.innerHTML = `${ethereumPriceChange.toFixed(2)}%`;
    binancePriceElement.innerHTML = `$${binancePrice}`;
    binancePriceChangeElement.innerHTML = `${binancePriceChange.toFixed(2)}%`;
    tetherPriceElement.innerHTML = `$${tetherPrice}`;
    tetherPriceChangeElement.innerHTML = `${tetherPriceChange.toFixed(2)}%`;
  
    if (bitcoinPriceChange < 0) {
      bitcoinPriceChangeElement.classList.add("negative");
    } else {
      bitcoinPriceChangeElement.classList.remove("negative");
    }
  
    if (ethereumPriceChange < 0) {
      ethereumPriceChangeElement.classList.add("negative");
    } else {
      ethereumPriceChangeElement.classList.remove("negative");
    }
  
    if (binancePriceChange < 0) {
      binancePriceChangeElement.classList.add("negative");
    } else {
      binancePriceChangeElement.classList.remove("negative");
    }
  
    if (tetherPriceChange < 0) {
      tetherPriceChangeElement.classList.add("negative");
    } else {
      tetherPriceChangeElement.classList.remove("negative");
    }
  };
  
  fetchCryptoPrices();
  setInterval(() => {
    fetchCryptoPrices();
  }, 2000); // fetch data every 2 seconds
  
  