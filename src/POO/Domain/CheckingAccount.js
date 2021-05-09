import Account from "./Account.js";

export default class CheckingAccount extends Account {
    constructor( client, agency ) {
        super( client, agency, 0);
    }
}
