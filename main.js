let pruebaResuelta = false, facilResuelto = false, dificilResuelto = false;

console.log('%c ¿Bienvenid@ desarrollador/a quieres tomar nuestro challenge de programación?', blueText);
console.log('%c Teclea comenzar() para empezar', blueText);

function comenzar() {
  console.log('%c Dado un número entero, tienes que determinar si es \'PAR\' o \'IMPAR\'', blueText);
  console.log('%c Ejemplo:', blueText);
  console.log('%c Input: 34, Output: PAR', blueText);
  console.log('%c Input: 5, Output: IMPAR', blueText);
  console.log('%c Input: -1, Output: IMPAR', blueText);
  console.log('%c Elabora tu función de esta manera:', blueText);
  console.log('%c parImpar(x){ return ... }', blueText);
  console.log('%c Cuando hayas terminado, teclea probarParImpar() para probar tu código!', blueText);
}

if (pruebaResuelta) {
  //probarBotePintura();
  //probarValorMaxArray();
  desplegarFacilRandom();
}
else {
  console.log('No has resuelto la prueba');
}
// parImpar = (x) => x%2 == 0 ? 'PAR':'IMPAR'


