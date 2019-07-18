"use strict";
exports.__esModule = true;
var Inspiration = /** @class */ (function () {
    function Inspiration(x, y) {
        this.x = x;
        this.y = y;
    }
    Inspiration.prototype.message = function () {
        console.log(this.x + this.y);
    };
    return Inspiration;
}());
exports.Inspiration = Inspiration;
