let startDateFacil, endDateFacil, startDateDificil, endDateDificil;

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
      case 'twoSum':
        temp = twoSum
        break;
      case 'subsequence':
        temp = subsequence
        break;
      case 'botePinturaAvanzado':
        temp = botePinturaAvanzado
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
    else if (pruebaResuelta && facilResuelto==false) {
      endDateFacil = new Date();
      time(startDateFacil, endDateFacil);
      facilResuelto = true
      console.log('%c ¡Felicidades! Has pasado nuestro primer problema fácil', css)
      console.log('%c Si deseas continuar con un problema más difícil, escribe siguiente()', blueText)
      console.log('%c Si deseas enviar tus resultados ya, escribe enviarResultados()', blueText)
    }
    else if (pruebaResuelta && facilResuelto==true){
      endDateDificil = new Date();
      time(startDateDificil, endDateDificil);
      console.log('%c ¡Felicidades! Has pasado el problema difícil', css)
      console.log('%c Si deseas enviar tus resultados ya, escribe enviarResultados()', blueText)
    }
  }
}

function siguiente() {
  if (!pruebaResuelta) {
    console.log('%c No has resuelto el problema de prueba para avanzar :(', warningText)
  }
  else if (!facilResuelto) {
    startDateFacil = new Date();
    desplegarProblemaRandom('facil')
  }
  else if (!dificilResuelto) {
    startDateDificil = new Date();
    desplegarProblemaRandom('dificil')
  }
}

function time(startDate, endDate){
  var difference = endDate - startDate;
  var day_as_milliseconds = 86400000;
  var hour_as_milliseconds = 3600000;
  var min_as_milliseconds = 60000;
  var sec_as_milliseconds = 1000;

  var dia = Math.trunc(difference/day_as_milliseconds);
  var hora = Math.trunc(difference/hour_as_milliseconds);
  var minutos = Math.trunc(difference/min_as_milliseconds);
  var segundos = Math.trunc(difference/sec_as_milliseconds);
  //console.log(" Días: "+dia+" Horas: "+hora+" Minutos: "+minutos+" Segundos: "+ segundos);
}