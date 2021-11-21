// 1. Añadir tu problema con el formato de abajo
// 2. Siempre pon un espacio antes de cada oración
const faciles = {
  'centigradosFahrenheit': " Dado un número en centígrados debes devolver su mismo valor en Fahrenheit\n"+
      " Apóyate de esta fórmula: (C × 9/5) + 32 = F\n"+
      " Elabora tu función de la siguiente manera: function centigradosFahrenheit(x){ ... }"+
      " Cuando hayas terminado teclea probarProblema('centigradosFahrenheit');",
  'botePintura' : " Existen 2 tipos de bote de pintura:\n"+
      " El bote A tiene 5L y rinde para 8 mts\n"+
      " El bote B tiene 8L y rinde para 15 mts"+
      " Elabora tu función de la siguiente manera: function botePintura(x){ ... }"+
      " Se da una cantidad de metros a pintar (con 96 como valor máximo), y se tiene que determinar qué bote se tiene que comprar, si el bote A o el B."+
      " Cuando hayas terminado teclea probarProblema('botePintura')",
  'cifradoCesar': " Se recibe una frase la cual se necesita encriptar mediante el Cifrado César\n"+
      " El cual consiste en desplazar 3 lugares en el alfabeto cada letra que conforma la frase\n"+
      " Ejemplo:\n"+
      " HELLO WORLD = KHOOR ZRUOG\n"+
      " Hola = Krod\n"+
      " ZeRo = ChUr\n"+
      " Elabora tu función de la siguiente manera: function cifradoCesar(frase){ ... }\n"+
      " Cuando hayas terminado teclea probarProblema('cifradoCesar')\n",
  'coinMachine': " Una máquina que proporciona cambio.\n"+
      " Suponga que le dan las monedas de:\n"+
      " 1 centavo, 5 centavos y 10 centavos con N =13 centavos.\n"+
      " ¿Cuál es el número total de combinaciones de las monedas que puede organizar para obtener 13 centavos?\n"+
      " Elabora tu función de la siguiente manera: function coinMachine(x){ ... }"+
      " Cuando hayas terminado teclea probarProblema('coinMachine')",
  'maxArray': " Dado un string representando un array de números, recorrer el mismo para poder dar un\n"+
      " return con el máximo valor dentro del mismo\n"+
      " Ejemplo 1:\n"+
      " '[1,56,7,8,33]' = 56\n"+
      " Ejemplo 2:\n"+
      " '[-100,-200,-44,0]' = 56\n"+
      " Elabora tu función de la siguiente manera: function maxArray(x){ ... }\n"+
      " Cuando hayas terminado teclea probarProblema('maxArray')\n",
};

const dificiles = {
  'twoSum': " Dado un string representando un arreglo de números enteros enteros\n"+
    " Determina qué par de números sumados, son iguales al último número del arreglo\n"+
    " Si no hay solución, retorna [null, null]\n"+
    " Ejemplo 1:\n"+
    " '[1,2,3,4,5,6,7,11]' = [4, 7]:\n"+
    " Explicación: 4 y 7 suman 11, sin embargo 5 y 6 igual, pero se tiene\n "+
    " que devolver la primer pareja de izquierda a derecha\n"+
    " Ejemplo 2:\n"+
    " '[1,2,3,4,5,2]' = [null, null]:\n"+
    " Explicación: Ninguna pareja suma 2 en el arreglo\n "+
    " Ejemplo 3:\n"+
    " '[0,1,3,2]' = [null, null]:\n"+
    " Explicación: En el arreglo [0, 1, 3] ninguna pareja suma 2, ya que el último número no se cuenta\n "+
    " Elabora tu función de la siguiente manera: function twoSum(arr){ ... }\n"+
    " Cuando hayas terminado teclea probarProblema('twoSum')\n"
}
