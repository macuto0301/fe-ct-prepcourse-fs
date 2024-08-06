function combine(str1, str2, str3) {

// Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  let combinado = "";
  let masGrande = 0;

  
  if (str1.length > masGrande) {
    masGrande = str1.length;
  }
  if (str2.length > masGrande) {
    masGrande = str2.length;
  }
  if (str3.length > masGrande) {
    masGrande = str3.length;
  }

  for (let i = 0; i < masGrande; i++) {
    if (i < str1.length) {
      combinado += str1.charAt(i);
    }
    if (i < str2.length) {
      combinado += str2.charAt(i);
    }
    if (i < str3.length) {
      combinado += str3.charAt(i);
    }
  }
  
  return combinado;

}
  
  





module.exports = combine;