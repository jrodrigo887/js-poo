import Client from './src/POO/Domain/Client.js';
import Director from './src/POO/Domain/Director.js';
import Manager from './src/POO/Domain/Manager.js';
import AuthenticationSystem from './src/POO/services/AuthenticationSystem.js';
const cliente = new Client( 'Jose', '132575645', '123456' );


const manager = new Manager( 'Rodrigo', 456987545, 2895 );
const director = new Director( 'Maria', 654852465, 5600 );
manager.registerPassword( '12345' );

console.log( manager );
console.log( director );

const statusAuthenticate = AuthenticationSystem.login( manager, '12345' );
console.log(  statusAuthenticate ? 'Autenticado' : 'Não autenticado!' );


const authClient = AuthenticationSystem.login( cliente, '123456' );

authClient.then( ( vl ) => {
    console.log( vl );
} ).catch( ( e ) => {
    console.log( e );
} );
