import Animal from './Animal';

export default class Bird extends Animal {
  showBirthDate() {
    console.log(this.birthDate);
    // protected birthDate: classe filha Bird possui acesso
  }
}

const parrot = new Bird('Papagaio', new Date(Date.parse('Jun 07, 2017')));

console.log(parrot.age);
// console.log(parrot.birthDate); => protected: não possui acesso externo
