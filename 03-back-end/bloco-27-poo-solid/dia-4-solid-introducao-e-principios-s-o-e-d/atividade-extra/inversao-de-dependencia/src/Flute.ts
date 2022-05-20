import IInstrument from './interfaces/IInstrument';

export default class Flute implements IInstrument {
  constructor(public name: string) {
    this.name = name;
  }

  public play(): void {
    console.log(`${this.name} está emitindo melodias`);
  }
}
