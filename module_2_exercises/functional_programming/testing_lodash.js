import _ from 'lodash';

// API Lang

//castArray (convierte en array si no es array)
console.log(_.castArray(3)); //[3]

//isArrayLike (devuelve true si tiene propiedad length)
console.log(_.isArrayLike(true), _.isArrayLike(45), _.isArrayLike("hola"), _.isArrayLike([3, 4]), _.isArrayLike({})); //false false true true false

//isEmpty (devuelve true si la propiedad length === 0 o si no tiene propieda length)
console.log(_.isEmpty(24)); //true

//isNil (devuelve true si el valor de entrada es undefined o null)
console.log(_.isNil(undefined), _.isNil(null), _.isNil("hola")); //true true false

//API String

//camelCase (junta las palabras del string)
console.log(_.camelCase("hello_world   oops")); //helloWorldOops

//snakeCase (separa las palabras con guiones bajos)
console.log(_.snakeCase("hello_world   oops")); //hello_world_oops

//kebabCase (separa las palabras con guiones)
console.log(_.kebabCase("hello_world   oops")); //hello-world-oops

//API Array

//chunk (separar el array en subarrays. Si no puede dividir en grupos exactos, el último grupo tiene los elementos sobrantes)
const measures = [5.12, 42.20, 43.1, 0.10, 19.20, -32.1, 25.3, 22.2];
console.log(_.chunk(measures, 4)); // [ [ 5.12, 42.2, 43.1, 0.1 ], [ 19.2, -32.1, 25.3, 22.2 ] ]

//difference (devuelve un array con items del primer array que no aparecen en los siguentes)
const webLangs = ['Ruby', 'Python', 'JavaScript', 'PHP', 'Java', 'C#'];
const mobileLangs = ['Java', 'Objective-C', 'Swift', 'C#'];
console.log(_.difference(webLangs, mobileLangs)); // ['Ruby', 'Python', 'JavaScript', 'PHP']

//differenceBy. LAS FUNCIONES QUE TERMINAN EN 'By' APLICAN UNA FUNCIÓN TRANSFORMADORA SOBRE TODOS LOS ELEMENTOS ANTES DE APLICAR LA FUNCIÓN EN SI
const positives = [14, 22, 5, 10, 20, 17, 53];
const negatives = [-16, -1, -15, -10, -71, -9, -5];
console.log(_.differenceBy(positives, negatives, Math.abs));

//differenceWith. LAS FUNCIONES QUE TERMINAN EN 'With' ACEPTAN UN COMPARADOR.
var wordCollection1 = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];
var wordCollection2 = ['consectetur', 'adipisicing', 'elit', 'illum', 'tempora'];

var sameLength = (element1, element2) => element1.length === element2.length;
console.log(_.differenceWith(wordCollection1, wordCollection2, sameLength)); // ['sit']

//drop (quita n elementos del array, desde el principio)
console.log(_.drop(wordCollection1, 3)); // ['sit', 'amet']

//dropWhile (elimina desde el principio hasta el final hata que un elemento cumpla el predicado)
const numbers = [18, 36, 48, 6, 50, 96, 100, 48, 4, 34, 67];
const multipleBy5 = (num) => num % 5;
console.log(_.dropWhile(numbers, multipleBy5)); // [50, 96, 100, 48, 4, 34, 67]

//intersection (devuelve un array con items que aparecen en todos los arrays)
const frontend = ['HTML', 'CSS', 'JavaScript', 'WebAssembly'];
const backend = ['C#', 'Java', 'Python', 'JavaScript', 'Ruby'];
console.log(_.intersection(frontend, backend)); // ['JavaScript']

//uniq (crea un array con valores únicos)
var elements = [7, -1, 5, 3, 4, 6, 3, 4, 7, 1];
console.log(_.uniq(elements)); // [7, -1, 5, 3, 4, 6, 1]
console.log(_.uniqBy(elements, Math.abs)); // [7, -1, 5, 3, 4, 6]