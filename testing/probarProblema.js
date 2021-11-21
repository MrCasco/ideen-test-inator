let startDateFacil, endDateFacil, startDateDificil, endDateDificil;
let answeredCode = ''; //Aquí vamos a guardar la funcion que haya hecho el usuario para mandarla en el correo

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
  let funcion = getFunction(nombre);

  // Iteración para testear cada caso
  for (let i = 0; i < numPruebas; i++) {
    [arg, exp] = respuestas[i];
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
      let tiempo= time(startDateFacil, endDateFacil);
      facilResuelto = true

      let respuesta = funcion.toString();
      answeredCode="Respuesta prueba fácil \n"+ respuesta+"\n Tiempo: "+tiempo;
      //console.log(answeredCode);
      console.log('%c ¡Felicidades! Has pasado nuestro primer problema fácil', css)
      console.log('%c Si deseas continuar con un problema más difícil, escribe siguiente()', blueText)
      console.log('%c Si deseas enviar tus resultados ya, escribe enviarResultados("tunombre", "tucorreo")', blueText)
    }
    else if (pruebaResuelta && facilResuelto==true){
      endDateDificil = new Date();
      let tiempo = time(startDateDificil, endDateDificil);
      let respuesta = funcion.toString();
      answeredCode=answeredCode+"\n\nRespuesta prueba difícil\n"+ respuesta+"\n Tiempo: "+tiempo;
      //console.log(answeredCode)
      console.log('%c ¡Felicidades! Has pasado el problema difícil', css)
      console.log('%c Si deseas enviar tus resultados, por favor escribe enviarResultados("tunombre", "tucorreo")', blueText)
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
  let difference = endDate - startDate;
  let day_as_milliseconds = 86400000;
  let hour_as_milliseconds = 3600000;
  let min_as_milliseconds = 60000;
  let sec_as_milliseconds = 1000;

  let dia = Math.trunc(difference/day_as_milliseconds);
  let hora = Math.trunc(difference/hour_as_milliseconds);
  let minutos = Math.trunc(difference/min_as_milliseconds);
  let segundos = Math.trunc(difference/sec_as_milliseconds);
  //console.log(" Días: "+dia+" Horas: "+hora+" Minutos: "+minutos+" Segundos: "+ segundos);
  return " Días: "+dia+" Horas: "+hora+" Minutos: "+minutos+" Segundos: "+ segundos;
}

function enviarResultados(nombre, correo) {
  let link = "mailto:A01365646@tec.mx"
      + "?cc="+correo
      + "&subject=" + encodeURIComponent("Resultados de pruebas de "+nombre+" para puesto como desarrollador")
      + "&body=" + encodeURIComponent("Hola! éstos son los resultados de "+ nombre+"\n"+answeredCode+"\n\n su correo es "+ correo)
  ;
  window.location.href = link;
}
