function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
const element = array[0];
for (let i = 1; i < array.length; i++) {
   
if (element !== array[i]) {
  return false;
}
  
}
return true;
}

module.exports = todosIguales;
