let stateSelect = document.querySelector('#state');
let dateInput = document.querySelector('#date');
let submitButton = document.querySelector('#submit-button');
let messageError = document.querySelector('#message-error')

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

submitButton.addEventListener('click', (event) => {
  // event.preventDefault();
  messageError.innerText = '';
  let dateValue = dateInput.value;
  let dateSplit = dateValue.split('/')

  let validation = (dateSplit[0] > 0 && dateSplit[0] <= 31) && (dateSplit[1] >0 && dateSplit[1] <= 12) && (dateSplit[2] > 0);

  if (!validation) {
    messageError.innerText = 'Preencha uma data válida no formato dd/mm/aaaa'
  }
});
