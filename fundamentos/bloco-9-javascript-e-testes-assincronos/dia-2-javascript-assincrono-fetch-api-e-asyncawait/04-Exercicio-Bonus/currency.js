const API_URL_Coincap = 'https://api.coincap.io/v2/assets';
const API_URL_currency = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';

const getCoins = (coinList, usdToBrl) => {
  for (let i = 0; i < 10; i += 1) {
    const { id, symbol, priceUsd } = coinList[i];
    const message = `${id} (${symbol}): ${priceUsd * usdToBrl}\n\n`;

    const newLi = document.createElement('li');
    newLi.innerText = message;

    const coinContainer = document.querySelector('#coin-container');
    coinContainer.appendChild(newLi);
  }
}

const fetchCoin = (usdToBrl) => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL_Coincap, myObject)
    .then(response => response.json())
    .then(coinList => getCoins(coinList.data, usdToBrl));
};

const fetchCurrency = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL_currency, myObject)
  .then(response => response.json())
  .then(currency => fetchCoin(currency.usd.brl));
};

window.onload = fetchCurrency();
