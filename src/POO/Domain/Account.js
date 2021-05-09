
export default class Account {
    static count = 0;

    constructor(agencia, client, balance ) {
        this._agencia = agencia;
        this._client = client;
        this._balance = balance;
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
    withdraw( value ) {
        const tax = 1;
        return this._withdraw(value, tax);
    }

    _withdraw(value, tax) {
        let valueWithDraw = tax * value;
        if (valueWithDraw > this.balance) return;
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





