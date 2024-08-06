function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  numeros = numeros.sort();

  let n = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    const element = numeros[i];
    
    if (element == n) return n
         else n = element;
  }

  
}

 

module.exports = encontrarElementoRepetido;