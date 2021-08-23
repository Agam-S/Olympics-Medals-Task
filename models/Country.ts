import { Result } from './Result';
import { Medals } from './Medals.enum';

export class Country {
  name: string;
  results: Array<IResult>;

  constructor(name: string) {
    this.name = name;
    this.results = [];
  }

  totalMedals(): number {
    return this.results.length;
  }

  totalMedalType(medal: Medals): number {
    let counter: number = 0;
    for (let i = 0; i < this.results.length; i++) {
      if (this.results[i].medal == medal) {
        counter++;
      }
    }
    return counter;
  }
}
