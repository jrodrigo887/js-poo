export default class Client {
    _nome;
    _cpf;
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