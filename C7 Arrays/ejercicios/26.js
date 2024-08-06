function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  let primerMultiplo;
  if (secuencia.length > 0) {
    for (let i = 0; i < secuencia.length; i++) {
      const element = secuencia[i];
      if (element % n == 0) {
        primerMultiplo = element;
        break;
      }
    }
  }
  return primerMultiplo;

}



module.exports = encontrarPrimerMultiploDeN;