
/**
 * Crear un objeto "agenda" que permita agregar, 
 * eliminar y buscar contactos. Cada contacto debe 
 * tener un nombre, un email y un teléfono.
 */

class agenda{
    constructor(nombre, email, telefono){
      this.nombre = nombre;
      this.email = email;
      this.telefono = telefono;    
    }
    agregar(){
      
    }
    /*eliminar(){
      
      
    }
    buscar(){
      
    }*/
  }
  
  const persona1 = new agenda("Daniel Franco", "danielfranco72@hotmail.com", "5514410475");
  console.log(persona1)
  
  
  