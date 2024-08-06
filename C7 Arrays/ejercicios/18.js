function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let suma=0;
  let promedio = 0;

  resultadosTest.forEach(nums => {
    suma+=nums;
  });
  promedio=suma/resultadosTest.length;

return promedio;
}

module.exports = promedioResultadosTest;
