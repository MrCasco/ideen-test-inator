// Arreglo con argumento: respuesta
const respuestas = {
  34: 'PAR',
  5: 'IMPAR',
  1: 'IMPAR',
  0: 'PAR'
};
const numPruebas = Object.keys(respuestas).length;

// Funcion que manda llamar los unit tests
// de cada elemento en el diccionario respuestas
function probarParImpar() {
  let pruebasIncorrectas = 0;
  // Iteración para testear cada caso
  Object.entries(respuestas).forEach((item, i) => {
    const [arg, res] = item;
    // Dependiendo del resultado se agrega un true o false en el arreglo
    if (testearProblema(arg, res, parImpar) == false) {
      pruebasIncorrectas += 1;
    }
  });

  console.log('%c Han pasado '+(numPruebas-pruebasIncorrectas).toString()+'/'+numPruebas.toString()+' pruebas', textoStyle);
  if (pruebasIncorrectas == 0) {
    console.log('todas');
  }
}
