'use strict';

var test = require('tape');
var Canvas = require('../index.js');

test('Instance creation test', function(assert) {
    var canvas = new Canvas({
        parent: document.body
    });
    canvas.resize(200, 200);

    assert.ok(Object.prototype.toString.call(canvas.context) == '[object CanvasRenderingContext2D]', 'The canvas should have a CanvasRenderingContext2D.');
    assert.ok(canvas.el.getBoundingClientRect().width > 0, 'Width should be positive');
    assert.end();
});