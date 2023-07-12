/**
 * Crear una función "factorial" que acepte un número 
 * como parámetro y devuelva su factorial 
 * (el producto de todos los números enteros positivos
 *  desde 1 hasta el número).
 */


const factorial = numero => {
	if (numero < 0) numero = numero * -1;
	if (numero <= 0) return 1;
	let factorial = 1;
	while (numero > 1) {
		factorial = factorial * numero;
		numero--;
	}
	return factorial;
}
var numero = 10;
console.log(`El factorial de ${numero} es ${factorial(numero)}`);