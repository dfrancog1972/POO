
/**
 * Crear un objeto "agenda" que permita agregar, 
 * eliminar y buscar contactos. Cada contacto debe 
 * tener un nombre, un email y un teléfono.
 */

/*let agenda = {
  nombre: "Daniel",
  telefono: "5514410475",
  email: "danielfranco72@hotmail.com"
}
*/
/*
class agenda{
  constructor(nombre, telefono, email){
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
  }
  static agregar(name, tel, correo){
    return new agenda(name, tel, correo);
  }
}
nuevo = agenda.agregar("Daniel", "5514410475", "danielfranco72@hotmail.com");
console.log(nuevo);
*/

class agenda{
  constructor(nombre, telefono, email){
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
  }
  static agregar(name, tel, correo){
    return new agenda(name, tel, correo);
  }
}

agendas = [agenda.agregar("Daniel", "5514410475", "danielfranco72@hotmail.com"),
          agenda.agregar("Deniel", "5514410475", "danielfranco72@hotmail.com"),
          agenda.agregar("Jony", "5514410475", "danielfranco72@hotmail.com")];
console.log(agendas);
agendas.push (agenda.agregar("Gordo", "5514410475", "danielfranco72@hotmail.com"))
console.log(agendas);