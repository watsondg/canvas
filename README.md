canvas
===

A lightweight wrapper around the `<canvas>` element to ease context and ratio handling.

## Install

```
npm install watsondg/canvas -S
```

## Usage

```
var Canvas = require('canvas');

var canvas = new Canvas({
    ratio: 1 // force to a specific deviceRatio
});
canvas.resize(200, 200);
var ctx = canvas.context;
var r = canvas.ratio;

ctx.lineTo(20 * r, 10 * r);
ctx.lineTo(25 * r, 70 * r);
ctx.stroke();
```

## Static Methods

### Canvas.getDPI()
Defines how the DPI (simple, retina, ...) is calculated. Useful to override if you want to defaults to some processed value based on performance and device. Defaults to `window.devicePixelRatio`.

## Instance Methods

### new Canvas([options])

Create a new instance of Canvas.
* `options` - (OPTIONAL) - configuration parameters:
- ratio: force a devicePixelRatio. Defaults to window.devicePixelRatio or 1.
- parent: a DOM element to automatically append to. If not provided, appending `canvas.el` is up to you.


### resize(width, height)

Resize the canvas while maintaining ratio.
* `width` - the width to set the canvas to.
* `height` - the height to set the canvas to.


### clear()

Clear the canvas.

### snapshot(type, quality)

- shortcut to [canvas.toDataURL](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL).

### destroy()

Destroy the instance.

## License
MIT.