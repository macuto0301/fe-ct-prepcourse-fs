function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let tablaDel6=[];

  for (let i = 0; i < 11; i++) {
    const m=6*i;
    tablaDel6.push(m);
    
  }
  return tablaDel6;

}


module.exports = tablaDelSeis;
