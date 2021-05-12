import Client from "./Client";

export default class Account {

    constructor( agencia, client, balance ) {
        this._agencia = agencia;
        this._client = client;
        this._balance = balance;
        
        if ( this.constructor === Account ) {
            throw new Error( "Não é possível instanciar a classe Account, pois esta é uma classe abstrata." );
        }
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
    withdraw() {
       throw new Error( "Não é possível chamar este método abastrato da classe pai." );
    }

    _withdraw( value, tax ) {
        let valueWithDraw = tax * value;
        if ( valueWithDraw > this.balance ) return;
        this.balance -= value;
        return valueWithDraw;
    }

    transfer( value, conta ) {
        const valueTransfer = this.withdraw( value );
        if ( !valueTransfer ) return;
        conta.deposit( valueTransfer );

        return this.balance;
    }
}





