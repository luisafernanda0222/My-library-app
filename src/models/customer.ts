export class customer{

    nombre: string;
    celular: number;
    mail: string;
    cantidad_libros: number;
    metodo_pago: string;

    constructor(

    nombre: string,
    celular: number,
    mail: string,
    cantidad_libros: number,
    metodo_pago: string,

    ){
        this.nombre=nombre;
        this.celular=celular;
        this.mail=mail;
        this.cantidad_libros=cantidad_libros;
        this.metodo_pago=metodo_pago;
    }
}