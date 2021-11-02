// getData.js
// Parte I
// const fetch = require('node-fetch'); //npm i node-fetch@^2

// const getSuperHero = () => {
//   const result = fetch('https://www.superheroapi.com/api.php/4192484924171229/720')
//     .then((response) => response.json())
//     .then((hero) => console.log(hero.name));
//   return result;
// };

// getSuperHero(); // Wonder Woman

// module.exports = getSuperHero;

// Parte II
// getData.js
const fetch = require('node-fetch');

const getSuperHero = () => {
  const result = fetch('https://www.superheroapi.com/api.php/4192484924171229/720')
    .then((response) => response.json())
    .then((hero) => hero.name);
  return result;
};

getSuperHero(); // Wonder Woman

module.exports = getSuperHero;


const getSuperHero = require('./getData');

test('Verifica se o nome do herói é Wonder Woman', async () => {
  const hero = await getSuperHero();
  expect(hero).toBe('Wonder Woman');
});
