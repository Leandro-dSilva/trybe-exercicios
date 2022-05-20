import IInstrument from './interfaces/IInstrument';

export default class Guitar implements IInstrument {
  constructor(public name: string) {
    this.name = name;
  }

  public play(): void {
    console.log(`${this.name} está vibrando suas cordas`);
  }
}
