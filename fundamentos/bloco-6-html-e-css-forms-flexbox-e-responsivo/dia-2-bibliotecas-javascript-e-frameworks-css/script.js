let stateSelect = document.querySelector('#state');

let states = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
 'Bahia',
 'Ceará',
 'Distrito Federal',
 'Espírito Santo',
 'Goías',
 'Maranhão',
 'Mato Grosso',
 'Mato Grosso do Sul',
 'Minas Gerais',
 'Pará',
 'Paraíba',
 'Paraná',
 'Pernambuco',
 'Piauí',
 'Rio de Janeiro',
 'Rio Grande do Norte',
 'Rio Grande do Sul',
 'Rondônia',
 'Roraíma',
 'Santa Catarina',
 'São Paulo',
 'Sergipe',
 'Tocantins'
];

for (let i = 0; i < states.length; i +=1) {
  let state = states[i];
  let option = document.createElement('option');
  option.innerText = `${state}`;
  stateSelect.appendChild(option);
}
