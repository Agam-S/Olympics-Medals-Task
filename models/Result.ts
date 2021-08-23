import { Sports } from './Sports.enum';
import { Medals } from './Medals.enum';

export interface Result {
  // Result has a sport and medal
  sport: Sports;
  medal: Medals;
  // TODO
}
