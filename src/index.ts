import * as readline from 'readline';
import bookStore from './models/bookStore';
import methodCustomer from './models/methodCustomer';
import {book}from './models/book'
import { customer } from './models/customer';

const Library=new bookStore();
const libro=new book (`Julio César`, `William Shakespeare`, `aleman`, 66.790, `1623` , 105, true);
const libro2=new book (`el señor de los anillo `, `tolkien`, `todos los idiomas`, 38.000, `1954`, 1394, true,)
const libraryCustomer= new methodCustomer()

const customer1=new customer( 'luisa', 3007233091, 'luisa@gmail.com', 3, 'transferencia')


libraryCustomer.addcustomer(customer1);
Library.addbook(libro);
Library.addbook(libro2);
Library.Listbooks();



// MENU 


const menu = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

const library = new bookStore();

function mostrarMenu(): void {

    console.log("\nSeleccione una opción:");
    console.log("1. Agregar un libro");
    console.log("2. Eliminar un libro por título");
    console.log("3. Mostrar todos los libros");
    console.log("4. Agregar un cliente");
    
    console.log("5. Salir");

    menu.question("opcion: ", (respuesta) => {

    switch (respuesta) {

        case '1':

    addbook();
        break;

        case '2':

    removebook();
        break;

        case '3':

    Listbooks();
        break;

        case '4':

    addcustomer();
        break;

        case '5':

    console.log("Saliendo del programa.");

        menu.close();
        break;

        default:

    console.log("Opción no válida.");
        break;

}
});
}

    function addbook(): void {

    console.log(`El libro '${libro.titulo}' ha sido agregado`);

    mostrarMenu(); 
}

    function removebook(): void {

    console.log(`El libro '${libro.titulo}' ha sido eliminado`);

    mostrarMenu(); 
}

    function Listbooks(): void {


    Library.Listbooks();

    mostrarMenu(); 
}

    function addcustomer(): void {

        console.log(`nombre'${customer1.nombre}' Ha sido registrado.`);

    mostrarMenu(); 
}


mostrarMenu();


