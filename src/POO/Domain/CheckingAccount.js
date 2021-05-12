import Account from "./Account.js";

export default class CheckingAccount extends Account {
    constructor( client, agency ) {
        super( client, agency, 0 );
    }

    sacar( value ) {
        const taxa = 1.02;
        return super._withdraw( value, taxa );
    }
}
