function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let c = 0;

 array.forEach(element => {
  if (element>10) {
    c+=1;
  }
 });
  return c;
}



module.exports = contarElementosMayoresA10;
