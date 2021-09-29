const textoStyle = 'background: #3EABF0; font-size: 18px;';

// Funcion que ejecuta test unitario
// recibe argumento a probar, resultado esperado, mensaje y la función que debe correr
// NOTA: El parametro que corresponde a la función a probar se manda sin paréntesis e.g
// testearProblema(54, 'PAR', parImpar)
function testearProblema(arg, exp, fun){
  let resultStyle = 'font-size: 18px;';
  let correctoIncorecto = 'CORRECTO';
  const res = fun(arg);
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
