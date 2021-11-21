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
    'respuestas': diccionarioArgumentosRespuestas(['CIFRADO', 'SALUDOS', 'PRUEBA', 'ENCRIPTAR', 'CODIGO', 'ADIOS', 'abcDEF', 'WxYz'], ['FLIUDGR', 'VDOXGRV', 'SUXHED', 'HQFULSWDU', 'FRGLJR', 'DGLRV', 'abcGHI', 'ZxBz'])
  },
  'botePintura': {
    'respuestas': diccionarioArgumentosRespuestas([8, 15, 48, 56, 90, 96, 45], ['A', 'B', 'A', 'A', 'B', 'A', 'B'])
  },
  'coinMachine': {
    'respuestas': diccionarioArgumentosRespuestas([13, 28, 133], [4, 12, 196])
  },
  'maxArray':{
    'respuestas': diccionarioArgumentosRespuestas([[2,56,1,4,43], [23,45,1,9,2], [-12,12,-1,23,4], [1000,457,2,999,23], [-502,34,96,123,243], [-1, -1000, -200, -882, 0]], [56, 45, 23, 1000, 243, 0])
  },
  'twoSum': {
    'respuestas': diccionarioArgumentosRespuestas([[1, 2, 3, 4, 5, 2], [1, 2, 3, 4, 5, 6, 7, 11], [-5, 5, 0, 5], [1, 1, 2, 2], [1, 2, 2, 1]], [[null, null], [4, 7], [5, 0], [1, 1], [null, null]])
  },
  'subsequence':{
    'respuestas': diccionarioArgumentosRespuestas([{array: [3,6,7,2,5], subsequence:[7,2,5]}, {array: [1,7,8,9,2], subsequence:[7,9,2]},{array: [2,3,6,7,8], subsequence:[2,3,7,6]}, {array: [2,6,8,9], subsequence:[2,5,6]} ],[true, true, false, false])
  },
  'botePinturaAvanzado': {
    'respuestas': diccionarioArgumentosRespuestas([56, 30, 10, 20, 90, 45, ], ['4B', '2B', '1A', '2A', '6B', '3B'])
  },
}

declararLongitud()
