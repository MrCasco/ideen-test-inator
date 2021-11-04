function desplegarProblemaRandom(tipo) {
  let problemas = ''
  if (tipo == 'facil') {
    problemas = faciles
  }
  else if (tipo == 'dificil') {
    problemas = dificiles
  }
  let lista = Object.keys(problemas)
  const escogido = problemas[lista[Math.floor(Math.random()*(lista.length))]]
  console.log('%c'+escogido, orangeText);
}
