function zip(arrays) {
    return arrays[0].map(function(_,i){
        return arrays.map(function(array){return array[i]})
    });
}

function declararLongitud() {
  Object.entries(problemasYRespuestas).forEach((item, i) => {
    [name, resp] = item
    problemasYRespuestas[name]['size'] = Object.keys(resp['respuestas']).length
  });
}

function multiplesArgumentos(arguments, expected) {
  return zip([arguments, expected])
}

let problemasYRespuestas = {
  'parImpar': {
    'respuestas': multiplesArgumentos([34, 5, 1, 0, -1], ['PAR', 'IMPAR', 'IMPAR', 'PAR', 'IMPAR'])
  },
  'centigradosFahrenheit': {
    'respuestas': multiplesArgumentos([0, 1, -10, 1000, -502], [32, 33.8, 14, 1832, -871.6])
  },
  'cifradoCesar': {
    'respuestas': multiplesArgumentos(['CIFRADO', 'SALUDOS', 'PRUEBA', 'ENCRIPTAR', 'CODIGO', 'ADIOS', 'abcDEF', 'WxYz'], ['FLIUDGR', 'VDOXGRV', 'SUXHED', 'HQFULSWDU', 'FRGLJR', 'DGLRV', 'abcGHI', 'ZxBz'])
  },
  'botePintura': {
    'respuestas': multiplesArgumentos([8, 15, 48, 56, 90, 96, 45], ['A', 'B', 'A', 'A', 'B', 'A', 'B'])
  },
  'coinMachine': {
    'respuestas': multiplesArgumentos([13, 28, 133], [4, 12, 196])
  },
  'maxArray':{
    'respuestas': multiplesArgumentos([[2,56,1,4,43], [23,45,1,9,2], [-12,12,-1,23,4], [1000,457,2,999,23], [-502,34,96,123,243], [-1, -1000, -200, -882, 0]], [56, 45, 23, 1000, 243, 0])
  },
  'twoSum': {
    'respuestas': multiplesArgumentos([[1, 2, 3, 4, 5, 2], [1, 2, 3, 4, 5, 6, 7, 11], [-5, 5, 0, 5], [1, 1, 2, 2], [1, 2, 2, 1]], [[null, null], [4, 7], [5, 0], [1, 1], [null, null]])
  },
  'subsequence':{
    'respuestas': multiplesArgumentos([
      [[1, 2, 3], [1, 2]],
      [[1, 2, 3], [3, 2, 1]],
      [[2,4,6,7], [2,6,4]],
      [[1,5,6,8],[5,8]],
      [[4,2,5,9], [2,5,9]],
      [[2,3,7,1], [1,2,3,7]]
    ],
    [true, false, false, true, true, false])
  },
  'botePinturaAvanzado': {
    'respuestas': multiplesArgumentos([56, 30, 10, 20, 90, 45, ], ['4B', '2B', '1A', '2A', '6B', '3B'])
  },
  'palindromo':{
    'respuestas': multiplesArgumentos(['abcba','abba', 'ab', 'abcbc' ], [true, true, false, false])
  },
}

declararLongitud()
