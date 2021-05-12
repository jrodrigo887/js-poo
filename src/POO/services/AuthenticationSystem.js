export default class AuthenticationSystem {
    static login( authentic, password ) {
        return authentic.verifyPassword( password );
    }
}