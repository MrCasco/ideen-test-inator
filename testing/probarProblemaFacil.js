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
    }
  } catch (e) {
    return null
  }
  return temp
}

// Funcion que manda llamar los unit tests
// de cada elemento en el diccionario respuestas
function probarProblemaFacil(nombre) {
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

  console.log('%c Has pasado '+(numPruebas-pruebasIncorrectas).toString()+'/'+numPruebas.toString()+' pruebas', blueText);
  if (pruebasIncorrectas == 0) {
    console.log('todas');
    if(nombre=="parImpar"){
      facilResuelto = true;
      console.log('%c Felicidades! Has pasado la prueba.', css);
      console.log('%c Si deseas continuar con la prueba fácil escribe Siguiente();', blueText);
    }
  }
}

function Siguiente() {
  desplegarFacilRandom();
}
