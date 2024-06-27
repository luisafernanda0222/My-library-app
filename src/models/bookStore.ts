import {book}from './book';

class bookStore{
 books:book[];

constructor(){
    this.books=[];
}

//Metodo para agregar un libro a la bibliotreca

addbook(book:book):void{
    this.books.push(book);
    console.log(`libro'${book.titulo}' agrregar a la biblioteca.`);
}

// Metodo para eliminar una pelicula de la biblioteca por titulo

removebook(titulo:string):void {
    const index= this.books.findIndex(book => book.titulo===titulo);
    if (index !==-1){
        this.books.splice(index,1);
        console.log(`libro'${titulo}' eliminada de la biblioteca.`);
   
    }else {
        console.log(`libro'${titulo}' no encontrasa en la biblioteca.`);
    }
}

// Metodo para mostrar todos los libros en la boblioteca 

Listbooks():void {
    if (this.books.length===0){
        console.log('la biblioteca esta vacia.');

    }else {
        console.log('Libros en la biblioteca:');
        this.books.forEach(book=>{console.log(`-titulo:${book.titulo}, autor: ${book.autor}, idioma: ${book.idioma}, precio: ${book.precio}, fecha_publicacion: ${book.fecha_publicacion}, paginas: ${book.paginas},  disponible: ${book.disponible},`)
        });
    }
}
}

export default bookStore