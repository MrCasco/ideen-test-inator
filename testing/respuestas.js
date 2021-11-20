function diccionarioArgumentosRespuestas(llaves, valores){
  let res = {};
  llaves.forEach((key, i) => res[key] = valores[i]);
  return res;
}

function declararLongitud() {
  Object.entries(problemasYRespuestas).forEach((item, i) => {
    [name, resp] = item
    problemasYRespuestas[name]['size'] = Object.keys(resp['respuestas']).length
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
    'respuestas': diccionarioArgumentosRespuestas([[2,56,1,4,43], [23,45,1,9,2], [-12,12,-1,23,4], [1000,457,2,999,23], [-502,34,96,123,243], [-1, -1000, -200, -882, 0]], [56, 45, 23, 1000, 243, 0])
  },
  'twoSum': {
    'respuestas': diccionarioArgumentosRespuestas([[1, 2, 3, 4, 5, 2], [1, 2, 3, 4, 5, 6, 7, 11], [-5, 5, 0, 5], [1, 1, 2, 2], [1, 2, 2, 1]], [[null, null], [4, 7], [5, 0], [1, 1], [null, null]])
  },
  'subsequence':{
    'respuestas': diccionarioArgumentosRespuestas([[[3,6,7,2,5],[6,7,2]],[[1,3,5,8,2],[3,5,1,8]],[[4,2,3,2], [2,3]],[[1,3,5,2,8],[8,2,5]] ], [true, false, true, false])
  }
}

declararLongitud()
