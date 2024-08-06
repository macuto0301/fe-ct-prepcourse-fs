function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  
  const dobles = array.map( numero => numero * 2)
  return dobles;
}



module.exports = duplicarElementos;
