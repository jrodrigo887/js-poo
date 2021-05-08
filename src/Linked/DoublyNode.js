import No from './no';

export default class DoublyNode extends No {

    constructor(element, previous, next) {
        super(element, next);
        this.previous = previous;
    }
}