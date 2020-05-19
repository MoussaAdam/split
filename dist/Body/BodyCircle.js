import { Body } from './BodyBase';
export class BodyCircle extends BodyEllipse {
    constructor(position, radius) {
        super(position, radius, radius);
        this.type = 'circle';
        this.radius = radius;
    }
}
export class BodyEllipse extends Body {
    constructor(position, radiusX, radiusY) {
        super(position);
        this.type = 'ellipse';
        this.radiusX = radiusX;
        this.radiusY = radiusY;
    }
}
//# sourceMappingURL=BodyCircle.js.map