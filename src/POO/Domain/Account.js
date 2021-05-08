import Client from './Client.js';

export default class Account {
    _saldo = 0;
    _cliente = null;

    constructor( agencia, cliente ) {
        this._agencia = agencia;
        this.cliente = cliente;
    }

    set cliente( cliente ) {
        if ( cliente instanceof Client ) {
            this._cliente = cliente;
        }
    }

    get cliente() {
        return this._cliente;
    }

    set saldo( value ) {
        this._saldo = value;
    }

    get saldo() {
        return this._saldo;
    }

    /**
     * Depositar um valor para somar com_saldo atual.
     * @param { Number } valor 
     * @returns { Boolean } true ou false 
     */
    depositar( valor ) {
        if ( valor > 0 ) {
            this.saldo += valor;
            return true;
        }
        return false;
    }

    /**
     * Retirar um valor solicitado pelo usuário do_saldo atual.
     * @param {Number} valor 
     * @returns { Number } retorna valor desejado.
     */
    sacar( valor ) {
        
        if ( valor > this.saldo && valor < 0 ) return;
        this.saldo -= valor;
        return valor;
    }

    transferir( value, conta ) {
        const valueTransfer = this.sacar( value );
        if ( !valueTransfer ) return;
        conta.depositar( valueTransfer );

        return this.saldo;
    }
}

const josefina = new Client( 'Josefina', '0645878542' );
const maria = new Client( 'Maria', '68795435' );

const accountMaria = new Account( 38546, maria );
const accountJosefina = new Account( 38456, josefina );
accountMaria.saldo = 3000;
accountMaria.transferir( 1000, accountJosefina );

console.log( accountJosefina.saldo );


accountMaria.transferir( 1033, accountJosefina );
console.log( 'Resultado da tranferência: ' + accountJosefina.saldo );
console.log( 'Resultado da tranferência: ' + accountMaria.saldo );