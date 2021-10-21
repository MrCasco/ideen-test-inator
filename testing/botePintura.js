// centigradosFahrenheit = (x) => (x*9/5)+32

// Funcion que manda llamar los unit tests
// de cada elemento en el diccionario respuestas
function probarBotePintura() {
    let pruebasIncorrectas = 0;
    let respuestas = problemasYRespuestas['bote-pintura']['respuestas']
    let numPruebas = problemasYRespuestas['bote-pintura']['size'];
  
    // Iteración para testear cada caso
    Object.entries(respuestas).forEach((item, i) => {
      const [arg, res] = item;
      // Dependiendo del resultado se agrega un true o false en el arreglo
      if (testearProblema(arg, res, botePintura) == false) {
        pruebasIncorrectas += 1;
      }
    });
  
    console.log('%c Han pasado '+(numPruebas-pruebasIncorrectas).toString()+'/'+numPruebas.toString()+' pruebas', blueText);
    if (pruebasIncorrectas == 0) {
      console.log('todas');
      facilResuelto = true;
    }
  }
  