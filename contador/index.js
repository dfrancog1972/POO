/**
 * Crear un objeto "contador" con un método "incrementar" que aumente un valor "valorActual"
 *  en 1 y otro método "obtenerValor" que devuelva el valor actual.
 */

let contador = {
    valor:0,
    /* The `incremento()` method is increasing the value of the `valor` property by 1. It uses the
    `this` keyword to refer to the current object (`contador`) and accesses the `valor` property
    using dot notation. The commented out `return this.valor;` statement would return the updated
    value of `valor`, but it is currently not being used in the code. */
    incremento(){
        this.valor++;
        //return this.valor;
    },
 /**
  * The function "obtenerValor" increments a counter and returns a value.
  * @returns The value of "this.valor" is being returned.
  */
  obtenerValor(){
        contador.incremento();
        return this.valor;
  }
};
for(let control=1; control<=10; control++)
      console.log(contador.obtenerValor());
