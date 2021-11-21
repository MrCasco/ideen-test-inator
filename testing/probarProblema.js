function getFunction(nombre) {
  let temp = '';
  try {
    switch (nombre) {
      default:
        break;
      case 'parImpar':
        temp = parImpar
        break;
      case 'centigradosFahrenheit':
        temp = centigradosFahrenheit
        break;
      case 'cifradoCesar':
        temp = cifradoCesar
        break;
      case 'botePintura':
        temp = botePintura
        break;
      case 'coinMachine':
        temp = coinMachine
        break;
      case 'maxArray':
        temp = maxArray
        break;
      case 'palindromo':
        temp = palindromo
        break;
    }
  } catch (e) {
    return null
  }
  return temp
}

// Funcion que manda llamar los unit tests
// de cada elemento en el diccionario respuestas
function probarProblema(nombre) {
  let pruebasIncorrectas = 0;
  let respuestas = problemasYRespuestas[nombre]['respuestas']
  let numPruebas = problemasYRespuestas[nombre]['size'];
  let funcion = getFunction(nombre)

  // Iteración para testear cada caso
  for (let i = 0; i < numPruebas; i++) {
    [arg, exp] = Object.entries(respuestas)[i];
    // Dependiendo del resultado se agrega un true o false en el arreglo
    let response = testearProblema(arg, exp, funcion, nombre)
    if (response == false) {
      pruebasIncorrectas += 1;
    }
    else if (response == -1) {
      pruebasIncorrectas = numPruebas;
      break;
    }
  }

  console.log('%c Has pasado '+(numPruebas-pruebasIncorrectas).toString()+'/'+numPruebas.toString()+' pruebas', blueText)

  if (pruebasIncorrectas == 0) {
    if (nombre == "parImpar") {
      pruebaResuelta = true
      console.log('%c ¡Felicidades! Has pasado la prueba.', css)
      console.log('%c Si deseas continuar escribe siguiente()', blueText)
    }
    else if (pruebaResuelta) {
      facilResuelto = true
      console.log('%c ¡Felicidades! Has pasado nuestro primer problema fácil', css)
      console.log('%c Si deseas continuar con un problema más difícil, escribe siguiente()', blueText)
      console.log('%c Si deseas enviar tus resultados ya, escribe enviarResultados()', blueText)
    }
  }
}

function siguiente() {
  if (!pruebaResuelta) {
    console.log('%c No has resuelto el problema de prueba para avanzar :(', warningText)
  }
  else if (!facilResuelto) {
    desplegarProblemaRandom('facil')
  }
  else if (!dificilResuelto) {
    desplegarProblemaRandom('dificil')
  }
}
