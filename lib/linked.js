"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function defaultEqual(_ref) {
  var a = _ref.a,
      b = _ref.b;
  return a === b;
}

var LinkedList = function LinkedList() {
  var equalFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultEqual;

  _classCallCheck(this, LinkedList);

  this.count = 0;
  this.head = undefined;
  this.equalFn = equalFn;
};

exports["default"] = LinkedList;