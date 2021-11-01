function diccionarioConLlavesNegativas(llaves, valores){
  let res = {};
  llaves.forEach((key, i) => res[key] = valores[i]);
  return res;
}

function diccionarioArgumentosRespuestas(llaves, valores){
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
  'cifrado-cesar': {
    'respuestas': diccionarioArgumentosRespuestas(['CIFRADO', 'SALUDOS', 'PRUEBA', 'ENCRIPTAR', 'CODIGO', 'ADIOS'], ['FLIUDGR', 'VDOXGRV', 'SUXHED', 'HQFULSWDU', 'FRGLJR', 'DGLRV']),
    'size': Object.keys(diccionarioArgumentosRespuestas(['CIFRADO', 'SALUDOS', 'PRUEBA', 'ENCRIPTAR', 'CODIGO', 'ADIOS'], ['FLIUDGR', 'VDOXGRV', 'SUXHED', 'HQFULSWDU', 'FRGLJR', 'DGLRV'])).length
  },
  'bote-pintura': {
    'respuestas': diccionarioArgumentosRespuestas([8, 15, 48, 56, 90, 96, 45], ['A', 'B', 'A', 'A', 'B', 'A', 'B']),
    'size': Object.keys(diccionarioArgumentosRespuestas([8, 15, 48, 56, 90, 96, 45], ['A', 'B', 'A', 'A', 'B', 'A', 'B'])).length
  },
  'coin-machine': {
    'respuestas': diccionarioArgumentosRespuestas([], []),
    'size': Object.keys(diccionarioArgumentosRespuestas([], [])).length
  },
  'valor-max-array':{
    'respuestas': diccionarioArgumentosRespuestas([[2,56,1,4,43], [23,45,1,9,2], [-12,12,-1,23,4], [1000,457,2,999,23], [-502,34,96,123,243]], [56, 45, 1000, 243, -871.6]),
    'size': Object.keys(diccionarioArgumentosRespuestas([[2,56,1,4,43], [23,45,1,9,2], [-12,12,-1,23,4], [1000,457,2,999,23], [-502,34,96,123,243]], [56, 45, 1000, 243, -871.6])).length
  }
}

