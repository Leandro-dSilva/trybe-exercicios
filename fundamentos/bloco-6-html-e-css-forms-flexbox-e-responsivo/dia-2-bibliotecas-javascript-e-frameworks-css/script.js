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

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true
    },
    cpf: {
      required: true
    },
    addressInput: {
      required: true
    },
    cityInput: {
      required: true
    },
    state: {
      required: true
    },
    radio: {
      required: true
    },
    textArea: {
      required: true
    },
    office: {
      required: true
    },
    JobDescription: {
      required: true
    },
    datepicker: {
    required: true
    }
  },
  messages: {
 
    name: 'Campo Obrigatório',
    email: 'Campo Obrigatório',
    cpf: 'Campo Obrigatório',
    addressInput: 'Campo Obrigatório',
    cityInput: 'Campo Obrigatório',
    state: 'Campo Obrigatório',
    radio: 'Campo Obrigatório',
    textArea: 'Campo Obrigatório',
    office: 'Campo Obrigatório',
    JobDescription: 'Campo Obrigatório',
    datepicker: 'Campo Obrigatório'
  },
});
