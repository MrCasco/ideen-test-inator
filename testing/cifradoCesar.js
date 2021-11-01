function probarCifrado(){
    let pruebasIncorrectas = 0;
    let respuestas = problemasYRespuestas['cifrado-cesar']['respuestas']
    let numPruebas = problemasYRespuestas['cifrado-cesar']['size'];
  
    // Iteración para testear cada caso
    Object.entries(respuestas).forEach((item, i) => {
      const [arg, res] = item;
      // Dependiendo del resultado se agrega un true o false en el arreglo
      if (testearProblema(arg, res, cifradoCesar) == false) {
        pruebasIncorrectas += 1;
      }
    });
  
    console.log('%c Han pasado '+(numPruebas-pruebasIncorrectas).toString()+'/'+numPruebas.toString()+' pruebas', blueText);
    if (pruebasIncorrectas == 0) {
      console.log('todas');
      facilResuelto = true;
    }
}