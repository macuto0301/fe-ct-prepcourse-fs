function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let element = 0;
  for (let index = 1; index <= n; index++) {
    element += index
  }
  return element;
}



module.exports = sumarHastaN;
