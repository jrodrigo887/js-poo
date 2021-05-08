import No from './no';

function defaultEqual({
    a,
    b
}) {
    return a === b;
}

export default class LinkedList {
    constructor(equalFn = defaultEqual) {
        this.count = 0;
        this.head = undefined;
        this.equalFn = equalFn;
    }

    /**
     * Inserir um elemento no final da lista encadeada.
     * @param {Node} element 
     */
    push(element) {
        // Criando instância de um nó da lista
        let no = new No(element);

        // Variavel criada para pegar o primeiro elemento da lista.
        let current = {};

        // Caso a lista esteja vazia inserir o primeiro elemento.
        if (this.head == undefined) {
            this.head = no;
        } else {
            // caso contrário adiciona o head na variavel para referência inicial.
            current = this.head;

            // percorrer a lista até o último elemento.
            while (current.next !== undefined) {
                current = current.next;
            }
            // Depois de percorrer os elementos next até encontra-lo null, add no.
            current.next = no;
        }
        // Soma o count.
        this.count++;
        return this.count;
    }

    /**
     * Inserir um elemento no index informado pelo usuário.
     * @param {Node} element
     * @param {number} index
     */
    insert(element, index) {
        const node = new No(element);
        if (index >= 0 && index < this.count) {
            if (index === 0) {
                let current;
                current = this.head;
                node.next = current;
                this.head = node;

            } else {
                // Obter elemento antes do index informado.
                const previous = this.getElementAt(index - 1);

                /** 
                 *  adicionar o elemento do index informado na variável current
                 * para assim podemos adicionar um novo elemento neste meio
                 */
                const current = previous.next

                /**
                 * Agora no @Node ,adiciono os elementos na calda {next}.
                 */
                node.next = current

                /**
                 * Logo em seguida faço a ligação novamente dos elementos.
                 */
                previous.next = node;

                // Inserir os elementos novamento no head.
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
    removeAt(index) {
        // setar o inicio do meu nó nesta variavel.
        let current = {};
        // setar o cabeçalho (início)
        current = this.head;

        if (index == 0) {
            // Se index é igual a zero, pego o próximo elemento e seto em cima do primeiro.
            head = current.next;
        } else {
            /**
             * Caso contrário chamo a variável previos para setar o current enquanto não 
             * chegar no @param index   informado.
             */
            let previous = this.getElementAt(index - 1)
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
    getElementAt(index) {
        // Verifica o valor index se é válido.
        if (index >= 0 && index <= this.count) {
            let node = this.head;

            for (let i = 0; i <= index && node != null; i++) {
                node = node.next;
            }
            return node;
        } else {
            return undefined
        }
    }

    /**
     * Retorna o indíce da posição do elemento informado.
     * @param {No} element 
     * @returns { number } retorna um indíce
     */
    getIndexOf(element) {
        const current = this.head
        // Iterar por meio do for até encontrar o elemento igual.
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalFn({
                    a: current.element,
                    b: element
                })) {
                // Retorna o indíce quando elemento for igual.
                return i
            }
            // caso elemento não encontrado, pego o próximo para comparar.
            current = current.next;
        }
        // Caso elemento não encontrado, retorna -1;
        return -1
    }


    /**
     * Remove o elemento informado da lista.
     * @param { No } element
     * @returns { No } elemento deletado.
     */
    remove(element) {
        const indice = this.getIndexOf(element);
        return this.removeAt(indice)
    }

    /**
     * Retorna a quantidade total de elementos
     * @returns { number } count
     */
    size() {
        return this.count;
    }

    /**
     * Retorna o cabeçalho.
     * @returns {No} head
     * @example
     * // return element
     */
    getHead() {
        return this.head;
    }

    imprimir() {
        if (this.head === undefined) {
            return '';
        }
        let objectString = `${this.head.element}`;
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            objectString = `${objectString} ${current.element}`;
            current = current.next;
        }
        return objectString;
    }

    logar() {
        console.log('ola sim');
        if (this.head) {
            console.log('tem head');
        }
    }
}