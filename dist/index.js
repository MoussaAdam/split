import { Renderer } from "./Renderer.js";
import { Engine } from './Engine.js';
import { World } from './World.js';
const canvas = document.querySelector('canvas');
const world = new World();
const engine = new Engine(world);
const renderer = new Renderer(canvas, engine);
// Game Hooks
document.addEventListener('touchstart', () => {
});
// Auto-Resize
let lw = null, lh = null;
addEventListener('resize', resize());
function resize() {
    let w = innerWidth, h = innerHeight;
    if (matchMedia('all and (min-width: 480px)')) {
        const mar = 60;
        h = innerHeight - mar;
        w = Math.min(Math.round(h / 1.5), innerWidth - mar);
    }
    if (w !== lw || h !== lh) {
        const { style } = canvas;
        style.setProperty('width', `${lw = canvas.width = w}px`);
        style.setProperty('height', `${lh = canvas.height = h}px`);
    }
    return resize;
}
// Update CSS
canvas.className = 'loaded';
//# sourceMappingURL=index.js.map