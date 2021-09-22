let stateSelect = document.querySelector('#state');
let dateInput = document.querySelector('#date');
let submitButton = document.querySelector('#submit-button');
let messageError = document.querySelector('#message-error');
let ps = document.getElementsByTagName('p');
let confirmYourData = document.querySelector('#confirm-your-data')

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

// form.nodeList

function confirm() {
  confirmYourData.innerHTML = '';

  let h2 = document.createElement('h2')
  h2.innerText = 'Confirme seus dados';
  confirmYourData.appendChild(h2);

  for (let i = 0; i < ps.length; i += 1) {
    let div = document.createElement('div');
    div.innerText = ps[i].innerText
    div.style.fontSize = 'larger';
    div.style.margin = '2% auto 0.5%';
    confirmYourData.appendChild(div);
    let div2 = document.createElement('div');
    div2.innerText = ps[i].nextElementSibling.value
    confirmYourData.appendChild(div2);
  }
  let confirmButton = document.createElement('button');
  confirmButton.type = 'submit'
  confirmButton.innerText = 'Confirmar';
  confirmButton.style.margin = '4%';
  confirmYourData.appendChild(confirmButton);
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  messageError.innerText = '';
  let dateValue = dateInput.value;
  let dateSplit = dateValue.split('/')

  let validation = (dateSplit[0] > 0 && dateSplit[0] <= 31) && (dateSplit[1] >0 && dateSplit[1] <= 12) && (dateSplit[2] > 0);

  if (!validation) {
    messageError.innerText = 'Preencha uma data válida no formato dd/mm/aaaa'
  } else {
    confirm();
  }
});

