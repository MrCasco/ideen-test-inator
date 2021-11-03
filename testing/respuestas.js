function diccionarioArgumentosRespuestas(llaves, valores){
  let res = {};
  llaves.forEach((key, i) => res[key] = valores[i]);
  return res;
}

function declararLongitud() {
  Object.entries(problemasYRespuestas).forEach((item, i) => {
    [name, resp] = item
    problemasYRespuestas[name]['length'] = Object.keys(resp['respuestas']).length
  });
}

let problemasYRespuestas = {
  'parImpar': {
    'respuestas': diccionarioArgumentosRespuestas([34, 5, 1, 0, -1], ['PAR', 'IMPAR', 'IMPAR', 'PAR', 'IMPAR'])
  },
  'centigradosFahrenheit': {
    'respuestas': diccionarioArgumentosRespuestas([0, 1, -10, 1000, -502], [32, 33.8, 14, 1832, -871.6])
  },
  'cifradoCesar': {
    'respuestas': diccionarioArgumentosRespuestas(['CIFRADO', 'SALUDOS', 'PRUEBA', 'ENCRIPTAR', 'CODIGO', 'ADIOS', 'abcDEF', 'WxYz'], ['FLIUDGR', 'VDOXGRV', 'SUXHED', 'HQFULSWDU', 'FRGLJR', 'DGLRV', 'defGHI', 'ZaBc'])
  },
  'botePintura': {
    'respuestas': diccionarioArgumentosRespuestas([8, 15, 48, 56, 90, 96, 45], ['A', 'B', 'A', 'A', 'B', 'A', 'B'])
  },
  'coinMachine': {
    'respuestas': diccionarioArgumentosRespuestas([], [])
  },
  'maxArray':{
    'respuestas': diccionarioArgumentosRespuestas([[2,56,1,4,43], [23,45,1,9,2], [-12,12,-1,23,4], [1000,457,2,999,23], [-502,34,96,123,243]], [56, 45, 1000, 243, -871.6])
  }
}

declararLongitud()
