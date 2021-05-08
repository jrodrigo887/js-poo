import LinkedList from './Linked/linked';

const linked = new LinkedList();
const arr = [56, 10, 30, 50, 46];
const index = linked.push(15)
console.log(linked.getElementAt(index));

let print = linked.imprimir();
console.log(print);