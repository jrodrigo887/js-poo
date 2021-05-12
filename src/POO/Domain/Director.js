import Employee from "./Employee.js";

export default class Director extends Employee {
    constructor( name, cpf, salary ) {
        super( name, cpf, salary );
        this._bonification = 2;

    }
}