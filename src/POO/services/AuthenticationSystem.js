export default class AuthenticationSystem {
    static login( employee, password ) {
        return employee.password === password; 
    }
}