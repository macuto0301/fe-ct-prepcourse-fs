function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  const par = [];
  
  array.forEach(element => {
    if (element % 2 === 0){
      par.push(element);
    }
  });
  
  return par;

}

module.exports = filtrarNumerosPares;
