// Funcion que manda llamar los unit tests
// de cada elemento en el diccionario respuestas
function probarParImpar() {
  let pruebasIncorrectas = 0;
  let respuestas = problemasYRespuestas['prueba']['respuestas']
  let numPruebas = problemasYRespuestas['prueba']['size'];

  try {
    Object.entries(respuestas).forEach((item, i) => {
      const [arg, res] = item;
      // Dependiendo del resultado se agrega un true o false en el arreglo
      if (testearProblema(arg, res, parImpar) == false) {
        pruebasIncorrectas += 1;
      }
    });

    console.log('%c Han pasado '+(numPruebas-pruebasIncorrectas).toString()+'/'+numPruebas.toString()+' pruebas', blueText);
    if (pruebasIncorrectas == 0) {
      console.log('todas');
      pruebaResuelta = true;
    }
  } catch (e) {
    console.log('%c Ups...no has escrito la función aún, asegúrate de haberla llamado parImpar ', warningText);
  }
}
