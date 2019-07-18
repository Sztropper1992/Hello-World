"use strict";
exports.__esModule = true;
var point_1 = require("./point");
var log = function (m) {
    console.log(m);
};
var message = "You are going to be ok Shlo!! Esti loves you so much no matter what!!!!!!!!!!!!!";
log(message);
var inspire = new point_1.Inspiration("Shlo is a wonderful person ", "irrespective of how good he is at webdev!!!");
inspire.message();
