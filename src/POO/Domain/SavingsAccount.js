import Account from "./Account";

export default class AccountSavings extends Account {
    constructor( savings, client, agency ) {
        super( agency, client );
        this._savings = savings;
    }
}