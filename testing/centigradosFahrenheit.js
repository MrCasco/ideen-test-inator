// centigradosFahrenheit = (x) => (x*9/5)+32

// Funcion que manda llamar los unit tests
// de cada elemento en el diccionario respuestas
function probarCentigradosFahrenheit() {
  let pruebasIncorrectas = 0;
  let respuestas = problemasYRespuestas['centigrados-fahrenheit']['respuestas']
  let numPruebas = problemasYRespuestas['centigrados-fahrenheit']['size'];

  // Iteración para testear cada caso
  Object.entries(respuestas).forEach((item, i) => {
    const [arg, res] = item;
    // Dependiendo del resultado se agrega un true o false en el arreglo
    if (testearProblema(arg, res, centigradosFahrenheit) == false) {
      pruebasIncorrectas += 1;
    }
  });

  console.log('%c Han pasado '+(numPruebas-pruebasIncorrectas).toString()+'/'+numPruebas.toString()+' pruebas', blueText);
  if (pruebasIncorrectas == 0) {
    console.log('todas');
    facilResuelto = true;
  }
}
