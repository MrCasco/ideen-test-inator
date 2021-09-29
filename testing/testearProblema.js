const textoStyle = 'background: #3EABF0; font-size: 18px;';

// Funcion que ejecuta test unitario
// recibe argumento a probar, resultado esperado, mensaje y la función que debe correr
// NOTA: El parametro que corresponde a la función a probar se manda sin paréntesis e.g
// testearProblema(54, 'PAR', parImpar)

// function x(arg) {
//    var promise = new Promise(function(resolve, reject) {
//      window.setTimeout(resolve(parImpar(arg)), 5000);
//    });
//    return promise;
// }
//
// async function() {
//   const result = await x(54);
//   console.log(result); // --> 'done!';
// }

async function testearProblema(arg, exp, fun) {
  let resultStyle = 'font-size: 18px;';
  let correctoIncorecto = 'CORRECTO';

  // var startTime = performance.now()
  // const res = fun(arg);
  const res = await new Promise(function(resolve, reject) {
    window.setTimeout(resolve(fun(arg)), 10000);
  });
  console.log(res);
  // var endTime = performance.now()

  // console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
  if (res == exp) {
    resultStyle += 'background: green; color: white;';
  }
  else {
    resultStyle += 'background: red; color: black;';
    correctoIncorecto = 'INCORRECTO';
  }
  console.log('%c Input: '+arg.toString()+' %c Output: '+res+' -> '+correctoIncorecto, textoStyle, resultStyle);
  return correctoIncorecto == 'CORRECTO';
}
