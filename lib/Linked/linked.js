"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _no = _interopRequireDefault(require("./no"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function defaultEqual(_ref) {
  var a = _ref.a,
      b = _ref.b;
  return a === b;
}

var LinkedList = /*#__PURE__*/function () {
  function LinkedList() {
    var equalFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultEqual;

    _classCallCheck(this, LinkedList);

    this.count = 0;
    this.head = undefined;
    this.equalFn = equalFn;
  }
  /**
   * Inserir um elemento no final da lista encadeada.
   * @param {Node} element 
   */


  _createClass(LinkedList, [{
    key: "push",
    value: function push(element) {
      // Criando instância de um nó da lista
      var no = new _no["default"](element); // Variavel criada para pegar o primeiro elemento da lista.

      var current = {}; // Caso a lista esteja vazia inserir o primeiro elemento.

      if (this.head == undefined) {
        this.head = no;
      } else {
        // caso contrário adiciona o head na variavel para referência inicial.
        current = this.head; // percorrer a lista até o último elemento.

        while (current.next !== undefined) {
          current = current.next;
        } // Depois de percorrer os elementos next até encontra-lo null, add no.


        current.next = no;
      } // Soma o count.


      this.count++;
      return this.count;
    }
    /**
     * Inserir um elemento no index informado pelo usuário.
     * @param {Node} element
     * @param {number} index
     */

  }, {
    key: "insert",
    value: function insert(element, index) {
      var node = new _no["default"](element);

      if (index >= 0 && index < this.count) {
        if (index === 0) {
          var current;
          current = this.head;
          node.next = current;
          this.head = node;
        } else {
          // Obter elemento antes do index informado.
          var previous = this.getElementAt(index - 1);
          /** 
           *  adicionar o elemento do index informado na variável current
           * para assim podemos adicionar um novo elemento neste meio
           */

          var _current = previous.next;
          /**
           * Agora no @Node ,adiciono os elementos na calda {next}.
           */

          node.next = _current;
          /**
           * Logo em seguida faço a ligação novamente dos elementos.
           */

          previous.next = node; // Inserir os elementos novamento no head.

          this.head = previous;
        }

        this.count++;
        return true;
      } else {
        return false;
      }
    }
    /**
     * Remover um item por meio do index informado.
     * @param { number } index para remover o item, caso exista. 
     * @returns { No } ou 
     * @return { undefined }
     */

  }, {
    key: "removeAt",
    value: function removeAt(index) {
      // setar o inicio do meu nó nesta variavel.
      var current = {}; // setar o cabeçalho (início)

      current = this.head;

      if (index == 0) {
        // Se index é igual a zero, pego o próximo elemento e seto em cima do primeiro.
        head = current.next;
      } else {
        /**
         * Caso contrário chamo a variável previos para setar o current enquanto não 
         * chegar no @param index   informado.
         */
        var previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }

      this.count--;
      return current.element;
    }
    /**
     * function auxiliar pra retorna index referente ao nó
     * @param { number } index 
     * @returns { node } Node
     */

  }, {
    key: "getElementAt",
    value: function getElementAt(index) {
      // Verifica o valor index se é válido.
      if (index >= 0 && index <= this.count) {
        var node = this.head;

        for (var i = 0; i <= index && node != null; i++) {
          node = node.next;
        }

        return node;
      } else {
        return undefined;
      }
    }
    /**
     * Retorna o indíce da posição do elemento informado.
     * @param {No} element 
     * @returns { number } retorna um indíce
     */

  }, {
    key: "getIndexOf",
    value: function getIndexOf(element) {
      var current = this.head; // Iterar por meio do for até encontrar o elemento igual.

      for (var i = 0; i < this.count && current != null; i++) {
        if (this.equalFn({
          a: current.element,
          b: element
        })) {
          // Retorna o indíce quando elemento for igual.
          return i;
        } // caso elemento não encontrado, pego o próximo para comparar.


        current = (_readOnlyError("current"), current.next);
      } // Caso elemento não encontrado, retorna -1;


      return -1;
    }
    /**
     * Remove o elemento informado da lista.
     * @param { No } element
     * @returns { No } elemento deletado.
     */

  }, {
    key: "remove",
    value: function remove(element) {
      var indice = this.getIndexOf(element);
      return this.removeAt(indice);
    }
    /**
     * Retorna a quantidade total de elementos
     * @returns { number } count
     */

  }, {
    key: "size",
    value: function size() {
      return this.count;
    }
    /**
     * Retorna o cabeçalho.
     * @returns {No} head
     * @example
     * // return element
     */

  }, {
    key: "getHead",
    value: function getHead() {
      return this.head;
    }
  }, {
    key: "imprimir",
    value: function imprimir() {
      if (this.head === undefined) {
        return '';
      }

      var objectString = "".concat(this.head.element);
      var current = this.head;

      for (var i = 0; i < this.count && current != null; i++) {
        objectString = "".concat(objectString, " ").concat(current.element);
        current = current.next;
      }

      return objectString;
    }
  }, {
    key: "logar",
    value: function logar() {
      console.log('ola sim');

      if (this.head) {
        console.log('tem head');
      }
    }
  }]);

  return LinkedList;
}();

exports["default"] = LinkedList;