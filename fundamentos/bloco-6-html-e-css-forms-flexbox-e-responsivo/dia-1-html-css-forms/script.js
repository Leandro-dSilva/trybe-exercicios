let dateInput = document.querySelector('#date');
let submitButton = document.querySelector('#submit-button');
let messageError = document.querySelector('#message-error')

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  messageError.innerText = '';
  let dateValue = dateInput.value;
  let dateSplit = dateValue.split('/')

  let validation = (dateSplit[0] > 0 && dateSplit[0] <= 31) && (dateSplit[1] >0 && dateSplit[1] <= 12) && (dateSplit[2] > 0);

  if (!validation) {
    messageError.innerText = 'Preencha uma data válida no formato dd/mm/aaaa'
  }
});
