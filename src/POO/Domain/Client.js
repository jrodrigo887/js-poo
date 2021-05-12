export default class Client {
    constructor( nome, cpf, password ) {
        this._nome = nome;
        this._cpf = cpf;
        this._password = password;
    }

    get cpf() {
        return this._cpf;
    }

    get nome() {
        return this._nome;
    }

    // verifyPassword( password ) {
    //     return password === this._password;
    // }

}