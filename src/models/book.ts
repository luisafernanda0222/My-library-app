export class book {

    titulo: string;
    autor: string;
    idioma: string;
    precio: number;
    fecha_publicacion: string;
    paginas: number;
    disponible: boolean;
    
    
    constructor(
    
        titulo: string,
        autor: string,
        idioma: string,
        precio: number,
        fecha_publicacion: string,
        paginas: number,
        disponible: boolean,
    ){
     this.titulo=titulo;
     this.autor=autor;;
     this.idioma=idioma;
     this.precio=precio;
     this.fecha_publicacion=fecha_publicacion;
     this.paginas=paginas;
     this.disponible=disponible;
    }
    }