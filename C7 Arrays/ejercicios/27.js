function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:

  let palabraConcat=palabras[0];

  for (let i = 1; i < palabras.length; i++) {
    const element = palabras[i];
    palabraConcat+=' '+element;
  }

return palabraConcat;
}

module.exports = dePalabrasAFrase;
