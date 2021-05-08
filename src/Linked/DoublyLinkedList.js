import Linked from './linked';
import DoublyNode from './DoublyNode';

function defaultEquals({
    a,
    b
}) {
    return a === b;
}

class DoublyLinkedList extends Linked {
    constructor(equalFn = defaultEquals) {
        super(equalFn);
        this.tails = undefined
    }

    /**
     * Inserir um elemento no index informado pelo usuário.
     * @param {Node} element
     * @param {number} index
     */
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            let current = this.head;

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

                const previous = this.getElementAt(index - 1);
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

}