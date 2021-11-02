function desplegarFacilRandom() {
  let listaFaciles = Object.keys(faciles)
  const escogido = faciles[listaFaciles[Math.floor(Math.random()*(listaFaciles.length))]]
  console.log('%c'+escogido, orangeText);
}
