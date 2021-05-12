import Account from "./Account.js";

export default class AccountSavings extends Account {
    constructor( client, agency ) {
        super( client, agency, 0 );
    }

    withdraw( value ) {
        const tax = 1.1;
        super._withdraw( value, tax );
    }
}
