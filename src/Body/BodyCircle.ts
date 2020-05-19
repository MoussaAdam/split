import { Body } from './BodyBase';
import { Vector } from '../abstract';

export class BodyCircle extends BodyEllipse {
   type: string = 'circle';
   position: Vector;
   radius: number;
   constructor(position: Vector, radius: number) {
      super(position, radius, radius);
      this.radius = radius;
   }
}

export class BodyEllipse extends Body {
   type: string = 'ellipse';
   position: Vector;
   radiusX: number;
   radiusY: number;
   constructor(position: Vector, radiusX: number, radiusY) {
      super(position);
      this.radiusX = radiusX;
      this.radiusY = radiusY;
   }
}