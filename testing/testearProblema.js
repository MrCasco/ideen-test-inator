// const timeout = (prom, time) => Promise.race([prom, new Promise((_r, rej) => setTimeout(rej, time))]);

// function medirTiempo(arg, fun) {
//   return new Promise(function(resolve, reject) {
//     resolve(fun(arg));
//   });
// }

// Funcion que ejecuta test unitario
// recibe argumento a probar, resultado esperado, la función que debe correr y el nombre de la función
// NOTA: El parametro que corresponde a la función a probar se manda sin paréntesis e.g
// testearProblema(54, 'PAR', parImpar, 'parImpar')
function testearProblema(arg, exp, fun, nombre) {
  let resultStyle = 'font-size: 18px;';
  let correctoIncorecto = 'CORRECTO';
  let res = null

  // const res = await timeout(medirTiempo(arg, fun), 1000)
  try {
    res = fun(arg);
  } catch (e) {
    console.log(e);
    console.log('%c Ups...parece que no has escrito la función aún o tu código tiene un error, asegúrate de haberla llamado '+nombre, warningText);
    return -1
  }

  if (Object.prototype.toString.call(res) === '[object Array]') {
    let temp = '['
    for (let i = 0; i < res.length; i++) {
      if (res[i] == null) {
        temp += 'null,'
      }
      else {
        temp += res[i].toString() + ','
      }
    }
    arg = '[' + arg.join(',') + ']'
    temp = temp.slice(0, temp.length-1) + ']'
    if (JSON.stringify(res) == JSON.stringify(exp)) {
      resultStyle += 'background: green; color: white;';
    }
    else {
      resultStyle += 'background: red; color: black;';
      correctoIncorecto = 'INCORRECTO';
    }
    res = temp
  }
  else {
    if (res === exp) {
      resultStyle += 'background: green; color: white;';
    }
    else {
      resultStyle += 'background: red; color: black;';
      correctoIncorecto = 'INCORRECTO';
    }
  }
  console.log('%c Input: '+arg.toString()+' %c Output: '+res+' -> '+correctoIncorecto, blueText, resultStyle);
  return correctoIncorecto == 'CORRECTO';
}
