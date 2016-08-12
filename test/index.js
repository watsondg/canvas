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

test('getDPI test', function(assert) {
    var canvas = new Canvas();
    var ratio = window.devicePixelRatio;
    assert.ok(ratio === Canvas.getDPI(), 'Default ratio and window ratio should be identical.');
    assert.ok(ratio === canvas.ratio, 'Canvas ratio and window ratio should be identical.');

    var fakeRatio = 4;
    Canvas.getDPI = function() {
        return fakeRatio;
    };

    canvas.destroy();
    canvas = new Canvas();
    assert.ok(canvas.ratio === fakeRatio, 'Canvas ratio and overriden getDPI ratio should be identical.');

    assert.end();
});