function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let cantidad = 0;

  
  
      for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    if (element % 2 !== 0) {
      continue; 
    }
     cantidad++;
   
  }
  
  return cantidad;




}
  

module.exports = contarParesConContinue;
