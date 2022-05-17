class Person {
  name: string;
  height: number;
  weight: number;
  year: number;

  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
    this.year = 2022;
  }

  generalData() {
    console.log(
      `As of ${this.year}, ${this.name} is ${this.height} tall and ${this.weight} in weight.`,
    );
  }

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}

const p1 = new Person('Maria', 171, 58);
const p2 = new Person('João', 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();
console.log('----------');
console.log(p1);
console.log(typeof p1);
p1.generalData();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/
