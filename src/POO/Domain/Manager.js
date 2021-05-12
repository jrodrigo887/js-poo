import Employee from "./Employee.js";

export default class Manager extends Employee {
    constructor( name, cpf, salary ) {
        super( name, cpf, salary );
        this._bonification = 1.1;
    }
}