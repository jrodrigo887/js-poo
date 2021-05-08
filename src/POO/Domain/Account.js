import Client from './Client.js';

export default class Account {
    static count = 0;

    constructor( agencia, client ) {
        this._agencia = agencia;
        this._client = client;
        this._balance = 0;
        Account.count += 1;
    }

    set client( client ) {
        if ( client instanceof Client ) {
            this._client = client;
        }
    }

    get client() {
        return this._client;
    }

    set balance( value ) {
        this._balance = value;
    }

    get balance() {
        return this._balance;
    }

    /**
     * Depositar um valor para somar com_balance atual.
     * @param { Number } valor 
     * @returns { Boolean } true ou false 
     */
    deposit( valor ) {
        if ( valor > 0 ) {
            this.balance += valor;
            return true;
        }
        return false;
    }

    /**
     * Retirar um valor solicitado pelo usuário do_balance atual.
     * @param {Number} valor 
     * @returns { Number } retorna valor desejado.
     */
    withdraw( valor ) {
        
        if ( valor > this.balance && valor < 0 ) return;
        this.balance -= valor;
        return valor;
    }

    transfer( value, conta ) {
        const valueTransfer = this.withdraw( value );
        if ( !valueTransfer ) return;
        conta.deposit( valueTransfer );

        return this.balance;
    }
}

const josefina = new Client( 'Josefina', '0645878542' );
const maria = new Client( 'Maria', '68795435' );

const accountMaria = new Account( 38546, maria );
const accountJosefina = new Account( 38456, josefina );
new Account( 38456, josefina );
new Account( 38456, josefina );
accountMaria.balance = 3000;
accountMaria.transfer( 1000, accountJosefina );

console.log( accountJosefina.balance );


accountMaria.transfer( 1033, accountJosefina );
console.log( 'Resultado da tranferência: ' + accountJosefina.balance );
console.log( 'Resultado da tranferência: ' + accountMaria.balance );
console.log( 'Números de contas abertas: ' + Account.count );

