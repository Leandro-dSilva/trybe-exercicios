function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

//posiciona days
const ulReceptor = document.querySelector('#days')

for (let i = 1; i < dezDaysList.length; i += 1) {
  let dayMonth = dezDaysList[i];

  let newLi = document.createElement('li');
  newLi.innerText = dayMonth;
  newLi.classList = 'day';
  
  ulReceptor.appendChild(newLi);        
}

//marca feriados
let holidays = [24, 25, 31];   //marca numeros inseridos aqui
let day = document.getElementsByClassName('day');  

for (let i = 0; i < holidays.length; i += 1) {
  let holiday = holidays[i];
  for (let i = 0; i < day.length; i += 1) {
    let test = day[i].innerText;
    if (holiday == test) {
      day[i].classList.add('holiday');
    }
  }
}

// marca sexta-feira
let fridays = [4, 11, 18, 25];   //marca numeros inseridos aqui

for (let i = 0; i < fridays.length; i += 1) {
  let friday = fridays[i];
  for (let i = 0; i < day.length; i += 1) {
    let test = day[i].innerText;
    if (friday == test) {
      day[i].classList.add('friday');
    }
  }
}



// Exercício 2

let newButton = document.createElement('button');
newButton.id = 'btn-holiday';
newButton.innerText = 'Feriados'

let containerButton = document.querySelector('.buttons-container');
containerButton.appendChild(newButton);

function feriadosFunction(feriados) {
  
}






