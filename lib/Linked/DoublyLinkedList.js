"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _linked = _interopRequireDefault(require("./linked"));

var _DoublyNode = _interopRequireDefault(require("./DoublyNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function defaultEquals(_ref) {
  var a = _ref.a,
      b = _ref.b;
  return a === b;
}

var DoublyLinkedList = /*#__PURE__*/function (_Linked) {
  _inherits(DoublyLinkedList, _Linked);

  var _super = _createSuper(DoublyLinkedList);

  function DoublyLinkedList() {
    var _this;

    var equalFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultEquals;

    _classCallCheck(this, DoublyLinkedList);

    _this = _super.call(this, equalFn);
    _this.tails = undefined;
    return _this;
  }
  /**
   * Inserir um elemento no index informado pelo usuário.
   * @param {Node} element
   * @param {number} index
   */


  _createClass(DoublyLinkedList, [{
    key: "insert",
    value: function insert(element, index) {
      if (index >= 0 && index <= this.count) {
        var node = new _DoublyNode["default"](element);
        var current = this.head;

        if (index === 0) {
          if (this.head == null) {
            this.head = node;
            this.tails = node;
          } else {
            node.next = this.head;
            current.previous = node;
            this.head = node;
          }
        } else if (index === this.count) {
          current = this.tails;
          current.next = node;
          node.previous = current;
          this.tails = node;
        } else {
          var previous = this.getElementAt(index - 1);
          current = previous.next;
          node.next = current;
          previous.next = node;
          current.previous = node;
          node.previous = previous;
        }

        this.count++;
        return true;
      }

      return false;
    }
  }]);

  return DoublyLinkedList;
}(_linked["default"]);