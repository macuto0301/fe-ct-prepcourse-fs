function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      return false;
    }
}
return true;
//Otra Forma de Resolverlo
//if (numero == 2 ||numero == 3|| numero == 5) {
 // return true;
//} else if (numero%2 !=0 && numero%3 !=0 && numero%5 !=0 ) {
 // return true;
//}
//return false;


}


module.exports = esNumeroPrimo;
