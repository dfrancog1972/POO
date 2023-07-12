class Rectangulo{
    constructor(ancho, largo){
        this.ancho = ancho;
        this.largo = largo;
       }
    area(){
        let area = this.ancho * this.largo;
        return area;
        };
    }
    const rectangulo = new Rectangulo(9,10);
    console.log("ancho 9 largo 10 area es igual a ",rectangulo.area());
    
