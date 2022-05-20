import IInstrument from './interfaces/IInstrument';

export default class Drums implements IInstrument {
  constructor(public name: string) {
    this.name = name;
  }

  public play(): void {
    console.log(`${this.name} está fazendo o ar vibrar bem forte`);
  }
}
