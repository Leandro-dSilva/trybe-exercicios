import Flute from './Flute';
import IInstrument from './interfaces/IInstrument';

export default class Musician {
  constructor(
    public name: string,
    public instrument: IInstrument = new Flute('Minha flauta'),
  ) {
    this.name = name;
    this.instrument = instrument;
  }

  play(): void {
    this.instrument.play();
    console.log(`"${this.name}" é quem está comandando a emissão dos sons`);
  }
}
