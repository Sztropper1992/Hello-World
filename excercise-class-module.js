"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(_likes, _clicked) {
        this._likes = _likes;
        this._clicked = _clicked;
    }
    User.prototype.getLikes = function () {
        return this._likes;
    };
    User.prototype.getClicked = function () {
        return this._clicked;
    };
    User.prototype.click = function () {
        if (this._clicked === false) {
            this._likes += 1;
            this._clicked = true;
            console.log("You have " + this._likes + "likes " + this.getClicked());
        }
        else {
            this._likes -= 1;
            this._clicked = false;
            console.log("You have " + this._likes + "likes " + this.getClicked());
        }
    };
    return User;
}());
exports.User = User;
