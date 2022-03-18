const fetch = require('node-fetch');

function getApi() {
  fetch("http://localhost:3001/recipes")
    .then((resp) => resp.json())
    .then((recipes) => console.log(recipes));
}

getApi();
