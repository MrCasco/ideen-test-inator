console.log('%c ¿Bienvenid@ desarrollador/a quieres tomar nuestro challenge de programación?', inputText);
console.log('%c Teclea comenzar() para empezar', inputText);

function comenzar() {
  console.log('%c Dado un número entero, tienes que determinar si es \'PAR\' o \'IMPAR\'', inputText);
  console.log('%c Ejemplo:', inputText);
  console.log('%c Input: 34, Output: PAR', inputText);
  console.log('%c Input: 5, Output: IMPAR', inputText);
  console.log('%c Input: -1, Output: IMPAR', inputText);
  console.log('%c Elabora tu función de esta manera:', inputText);
  console.log('%c parImpar(x){ return ... }', inputText);
  console.log('%c Cuando hayas terminado, teclea probarParImpar() para probar tu código!', inputText);
}

// parImpar = (x) => x%2 == 0 ? 'PAR':'IMPAR'
