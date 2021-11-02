const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1) Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addKeyValue = (lessonN, key, value) => {
  lessonN[key] = value;

  // const newInput = {
    // key: value
  // }

  // Object.assign(lessonN, newInput) 
}

addKeyValue(lesson2, 'turno', 'noite');

// console.log(lesson2);

// 2) Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const keysList = (obj) => console.log(Object.keys(obj));

keysList(lesson2);

// 3) Crie uma função para mostrar o tamanho de um objeto.

const objLength = (obj) => {
  console.log(Object.keys(obj).length);
}

objLength(lesson2)

// 4) Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const objValues = (obj) => {
  console.log(Object.values(obj));
}

objValues(lesson2)

// 5) Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . 

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

console.log(allLessons);

// 6) Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudents = () => {
  const total = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

  console.log(total);
}

totalStudents();

// 7) Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const getValueByNumber = (lessonN, n) => {
  const message = Object.values(lessonN)[n];

  return message;
}

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

// 8) Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verifyPair = (lessonN, key, value) => {
  return (lessonN[key] === value) ? 'true' : 'false';
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

// Bônus 01 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const mathStudents = () => {
  let sum = 0;
  for (let i = 0; i < Object.keys(allLessons).length; i += 1) {
    if (Object.values(allLessons)[i].materia === 'Matemática') {
      sum += Object.values(allLessons)[i].numeroEstudantes;
    }
  }

    return sum;
}

mathStudents();
// console.log(mathStudents());

// Bônus 02 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5.

const createReport = (lessonN, teacherName) => {
  let classes = [];
  let students = 0;
  for (let i = 0; i < Object.keys(allLessons).length; i += 1) {
    if (Object.values(allLessons)[i].professor === teacherName) {
      classes.push(Object.values(allLessons)[i].materia);
      students += Object.values(allLessons)[i].numeroEstudantes;
    }    
  }

  const report = {
    professor: teacherName,
    aulas: classes,
    estudantes: students
  }

  return report;
}

// createReport(allLessons, 'Maria Clara');

console.log(createReport(allLessons, 'Maria Clara'))
// {
//   professor: 'Maria Clara',
//   aulas: [ 'Matemática', 'Matemática' ],
//   estudantes: 30
// }
