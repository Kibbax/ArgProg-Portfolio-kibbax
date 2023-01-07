export class Proyecto {
    id?: number;
    nombre: string;
    descripcion: string;
    img: string;
    url_imagen: string;


    constructor(nombre: string, descripcion: string, img: string, url_imagen: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
        this.url_imagen = url_imagen;
    }


}
