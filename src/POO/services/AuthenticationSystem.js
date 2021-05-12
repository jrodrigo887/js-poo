export default class AuthenticationSystem {
    static login( authentic, password ) {
        return new Promise( ( resolve, reject ) => {
            if ( AuthenticationSystem.isAuthentic( authentic ) ) {
                 resolve( authentic.verifyPassword( password ) );
            }

            reject( "Não é possível autenticar o usuário que não possui autorização, ou implementação de autenticação." );
        } );
    }

    static isAuthentic( authentic ) {
        return "verifyPassword" in authentic 
        && authentic.verifyPassword instanceof Function;
    }
}