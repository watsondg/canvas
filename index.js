'use strict';

module.exports = Canvas;

function Canvas(options) {
    options = options || {};
    this.el = document.createElement('canvas');
    this.context = this.el.getContext('2d');
    this.ratio = options.ratio || Canvas.getDPI();
    this.width = 0;
    this.height = 0;

    if (options.parent) options.parent.appendChild(this.el);
}

Canvas.prototype.resize = function(width, height) {
    this.width = width;
    this.height = height;

    this.el.width = this.ratio * width;
    this.el.height = this.ratio * height;
    this.el.style.width = width + 'px';
    this.el.style.height = height + 'px';
};

Canvas.prototype.clear = function() {
    this.context.clearRect(0, 0, this.width * this.ratio, this.height * this.ratio);
};

// Am I the only one who never remembers if this is a canvas or context method???
Canvas.prototype.snapshot = function(type, quality) {
    return this.el.toDataURL(type, quality);
};

Canvas.prototype.destroy = function() {
    this.context = null;
    if (this.el.parentNode) this.el.parentNode.removeChild(this.el);
    this.el = null;
};

Canvas.getDPI = function() {
    return window.devicePixelRatio || 1;
};
