export class Libro {


    titulo                : string;
    autor                 : string;
    resumen               : string;
    portada               : string;
    cantidad_ejemplares   : string;
    fecha_publicacion     : Date;
    seccion_id            : Number ;   

    constructor( titulo, autor, resumen, portada, cantidad_ejemplares, fecha_publicacion, seccion_id  ) {
       this.titulo              = titulo;
       this.autor               = autor;
       this.resumen             = resumen;
       this.portada             = portada;
       this.cantidad_ejemplares = cantidad_ejemplares;
       this.fecha_publicacion   = fecha_publicacion;
       this.seccion_id          = seccion_id;      
     }
}
