function diccionarioConLlavesNegativas(llaves, valores){
  let res = {};
  llaves.forEach((key, i) => res[key] = valores[i]);
  return res;
}

function diccionarioBotePintura(llaves, valores){
  let res = {};
  llaves.forEach((key, i) => res[key] = valores[i]);
  return res;
}

const problemasYRespuestas = {
  'prueba': {
    'respuestas': {
      34: 'PAR',
      5: 'IMPAR',
      1: 'IMPAR',
      0: 'PAR'
    },
    'size': Object.keys({
      34: 'PAR',
      5: 'IMPAR',
      1: 'IMPAR',
      0: 'PAR'
    }).length
  },
  'centigrados-fahrenheit': {
    'respuestas': diccionarioConLlavesNegativas([0, 1, -10, 1000, -502], [32, 33.8, 14, 1832, -871.6]),
    'size': Object.keys(diccionarioConLlavesNegativas([0, 1, -10, 1000, -502], [32, 33.8, 14, 1832, -871.6])).length
  },
  'bote-pintura':{
    'respuestas': diccionarioConLlavesNegativas([8, 15, 48, 56, 90, 96, 45], ['A', 'B', 'A', 'A', 'B', 'A', 'B']),
    'size': Object.keys(diccionarioConLlavesNegativas([8, 15, 48, 56, 90, 96, 45], ['A', 'B', 'A', 'A', 'B', 'A', 'B'])).length
  }
}
