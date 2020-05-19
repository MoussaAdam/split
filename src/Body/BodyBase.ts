import { Vector } from '../abstract';

export class Body {
   type: string = 'dummy';
   position: Vector;
   constructor(position: Vector) {
      this.position = position;
   }
}