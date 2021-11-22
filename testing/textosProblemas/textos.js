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
  'maxArray': " Dado un arreglo de números, recorrer el mismo para poder dar un\n"+
      " return con el máximo valor dentro del mismo\n"+
      " Ejemplo 1:\n"+
      " [1, 56, 7, 8, 33] = 56\n"+
      " Ejemplo 2:\n"+
      " [-100, -200, -44, 0] = 0\n"+
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
    " Cuando hayas terminado teclea probarProblema('twoSum')\n",
  'subsequence': " Dado un arreglo con 2 arreglos dentro, comprobar si el segundo de ellos \n"+
      " representa una subsecuencia del primero."+
      " Se considera una subsecuencia de un arreglo a un conjunto de numeros que estan presentes \n"+
      " en el arreglo original, manteniendo el orden que presentan en el mismo\n"+
      " Ejemplo: \n"+
      " Input: [[1,2,3,4] [2,3]] \n"+
      " Expected output: True\n"+
      " Input: [[1,2,3,4], [3,2,1]] \n"+
      " Expected output: False"+
      " Elabora tu función de la siguiente manera: function subsequence(args){ ... }\n"+
      " Cuando hayas terminado teclea probarProblema('subsequence')\n",
  'palindromo': " Dado un string, determinar si es palindromo.\n "+
    " Ejemplo: \n "+
    " abcba - True \n "+
    " abababa - True \n "+
    " ab - False \n "+
    " abcbc - False \n "+
    " Elabora tu función de la siguiente manera: function palindromo(str){ ... }\n"+
    " Cuando hayas terminado teclea probarProblema('palindromo')\n",
  'botePinturaAvanzado': " Existen 2 tipos de bote de pintura:\n"+
    " El bote A tiene 5L y rinde para 10 mts su costo es de $35\n"+
    " El bote B tiene 8L y rinde para 15 mts su costo es de $45\n"+
    " Se da una cantidad de metros a pintar, y se tiene que determinar\n"+
    "  cuántos botes le conviene comprar de cada tipo de bote y el costo final, y si sobra pintura en caso necesario.\n"+
    " Ejemplo:\n"+
    " Input = 56  <- se recibe como entero\n"+
    " Output = 4B <- se regresa como string\n"+
    " (60 mts por 180) ya que se gasta menos pintura y menos dinero.\n"+
    " Por favor regresa tus respuestas en forma de String y sin espacios\n"+
    " Elabora tu función de la siguiente manera: function botePinturaAvanzado(x){ ... }\n"+
    " Cuando hayas terminado teclea probarProblema('botePinturaAvanzado')\n",
  'valoresEnComun': "Dado un arreglo con dos arreglos dentro, regresa\n"+
      "un arreglo conteniendo los valores que tengan en común."+
      " Ejemplo:\n"+
      " Input = [4, 6, 7, 2, 1], [3, 8, 5, 2, 9]  <- se recibe como dos arreglos de enteros\n"+
      " Output = [2] <- se regresa como un arreglo de enteros\n"+
      " Input = [4, 6, 1, 3], [3, 2, 5, 1]  <- se recibe como dos arreglos de enteros\n"+
      " Output = [1, 3] <- se regresa como un arreglo de enteros\n"+
      " Elabora tu función de la siguiente manera: function valoresEnComun(x, y){ ... }\n"+
      " Cuando hayas terminado teclea probarProblema('valoresEnComun')\n",
  'binarySearch': "Dado un arreglo con un un arreglo y un número dentro, ,\n"+
      " encuentra el índice del arreglo en el que se encuentra el número utilizando \n"+
      " un algoritmo de Binary Search. En caso de no existir regresa un -1. \n"+
      " Ejemplo:\n"+
      " Input = [1, 2, 4, 6, 7], 7  <- se recibe como dos arreglos de enteros\n"+
      " Output = 4 <- se regresa como un arreglo de enteros\n"+
      " Input = [1, 3, 4, 6], 5  <- se recibe como dos arreglos de enteros\n"+
      " Output = -1 <- se regresa como un arreglo de enteros\n"+
      " Elabora tu función de la siguiente manera: function valoresEnComun(x, y){ ... }\n"+
      " Cuando hayas terminado teclea probarProblema('binarySearch')\n",
};
