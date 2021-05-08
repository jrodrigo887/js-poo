"use strict";

var _linked = _interopRequireDefault(require("./Linked/linked"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var linked = new _linked["default"]();
var arr = [56, 10, 30, 50, 46];
var index = linked.push(15);
console.log(linked.getElementAt(index));
var print = linked.imprimir();
console.log(print);