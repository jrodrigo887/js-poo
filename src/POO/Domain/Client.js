export default class Client {
    constructor( nome, cpf ) {
        this._nome = nome;
        this._cpf = cpf;
    }

    get cpf() {
        return this._cpf;
    }

    get nome() {
        return this._nome;
    }

}