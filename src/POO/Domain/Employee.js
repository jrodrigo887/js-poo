export default class Employee {
   constructor( name, cpf, salary ) {
       this._name = name;
       this._cpf = cpf;
       this._salary = salary;

       this._bonification = 1;
       this._password;

   }

   verifyPassword( password ) {
       return password === this._password;
   }
   registerPassword( password ) {
       this._password = password;
   }

   get password() {
       return this._password;
   }
}