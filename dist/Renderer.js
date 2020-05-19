var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _canvas;
export class Renderer {
    constructor(canvas, renderer) {
        _canvas.set(this, void 0);
        __classPrivateFieldSet(this, _canvas, canvas);
        this.ctx = canvas.getContext('2d');
    }
}
_canvas = new WeakMap();
//# sourceMappingURL=Renderer.js.map