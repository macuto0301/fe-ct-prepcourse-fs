function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a > b) {
    let a1 = b;
    b = a
    a = a1;

  }
  let p = 1;
  for (let i = a; i <= b; i++) {
    if (i === 0) {
      return 0;
    }
    p = p * i;
  }

  return p;


}



module.exports = productoEntreNúmeros;