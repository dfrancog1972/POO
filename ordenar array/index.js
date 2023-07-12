/**
 * Crear una función "ordenarArray" que acepte un array 
 * de números como parámetro y devuelva el array 
 * ordenado de menor a mayor.
 */

const arreglo = [54, 72, 95, 201, 33];
arreglo.sort(function(a, b) {
  return a - b;
});
console.log(arreglo); // [1, 2, 3, 4, 5]


// fuente https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

//ordenamiento de datos por uno u otro valor

const datos = [
  {nombre:'Daniel', apellidoPaterno:'Franco'},
  {nombre:'Carlos', apellidoPaterno:'Martinez'},
  {nombre:'Erik', apellidoPaterno:'Zuñiga'},
  {nombre:'Denial', apellidoPaterno:'Morrison'},
  {nombre:'Jonathan', apellidoPaterno:'Cruz'}
];
console.log(datos);
//ordenamiento por nombre
datos.sort(function (a, b) {
  if (a.nombre > b.nombre) {
    return 1;
  }
  if (a.nombre < b.nombre) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
console.log(datos);
//ordenamiento por apellido
datos.sort(function (a, b) {
  if (a.apellidoPaterno > b.apellidoPaterno) {
    return 1;
  }
  if (a.apellidoPaterno < b.apellidoPaterno) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
console.log(datos);