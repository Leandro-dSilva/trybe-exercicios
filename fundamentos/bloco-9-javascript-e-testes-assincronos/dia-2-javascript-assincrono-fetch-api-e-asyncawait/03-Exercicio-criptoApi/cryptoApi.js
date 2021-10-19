const API_URL = 'https://api.coincap.io/v2/assets';

const getCoins = (coinList) => {
  for (let i = 0; i < 10; i += 1) {
    const { id, symbol, priceUsd } = coinList[i];
    const message = `${id} (${symbol}): ${priceUsd}\n\n`;

    const newLi = document.createElement('li');
    newLi.innerText = message;

    const coinContainer = document.querySelector('#coin-container');
    coinContainer.appendChild(newLi);
  }
}

const fetchCoin = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(coinList => getCoins(coinList.data));
};

window.onload = () => fetchCoin();
