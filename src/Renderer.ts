import { Engine } from './Engine.js';
export class Renderer {
   #canvas: HTMLCanvasElement;
   ctx: CanvasRenderingContext2D;
   constructor(canvas: HTMLCanvasElement, renderer: Engine) {
      this.#canvas = canvas;
      this.ctx = canvas.getContext('2d');
   }
}

