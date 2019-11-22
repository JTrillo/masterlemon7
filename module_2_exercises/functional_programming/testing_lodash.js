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

//API Collection

//partition (separa los elementos del array según el resultado booleano de ejecutar la función especificada)
const numbers2 = [1, 7, 2, 5, 3, 9, 1, 6];
var greaterThan5 = (num) => num > 5;
console.log(_.partition(numbers2, greaterThan5)); // [[7, 9, 6], [1, 2, 5, 3, 1]]

//reject (opuesto de filter, devuelve todos los elementos que no cumplen con el predicado)
console.log(_.reject(numbers2, greaterThan5)); // [1, 2, 5, 3, 1]

//countBy (crea un objeto cuya clave es el resultado de aplicar la función especificada y cuyo valor es el número de elementos que devuelven el mismo resultado)
const elements2 = ['Matt', 'Jane', 'Eva', 'Tristan', 'Jax'];
console.log(_.countBy(elements2, 'length')); // { '3': 2, '4': 2, '7': 1 }

//sortBy (ordena en modo ascendente los elementos de un array según la función que pasemos como parámetro. En caso de objeto se puede ordenar pasándole la propiedad)
const users = [
    { name: 'Mika', age: 40, active: false },
    { name: 'John', age: 34, active: true },
    { name: 'John', age: 21, active: false },
    { name: 'Fred', age: 48, active: true },
    { name: 'Paul', age: 36, active: false },
];
console.log(_.sortBy(users, 'name'));
// [ { name: 'Fred', age: 48, active: true }, { name: 'John', age: 34, active: true }, { name: 'John', age: 21, active: false }, { name: 'Mika', age: 40, active: false }, { name: 'Paul', age: 36, active: false } ]
console.log(_.sortBy(users, ['age', 'name']));
// [ { name: 'John', age: 21, active: false }, { name: 'John', age: 34, active: true }, { name: 'Paul', age: 36, active: false }, { name: 'Mika', age: 40, active: false }, { name: 'Fred', age: 48, active: true } ]

// API Object

//get (coge el valor de una clave de un objeto)
const user = { name: 'Mika', age: 40, active: false };
console.log(_.get(user, 'age')); // 40
console.log(_.get(user, 'surname', "Doe")); // Esto sería como un get or. Salida --> 'Doe'

//has (nos dice si un objeto tiene esa propiedad)
console.log(_.has(user, 'age')); //true
console.log(_.has(user, 'surname')); //false

//set (cambia el valor de una clave de un objeto)
console.log(_.set(user, 'age', 48)); // {name: "Mika", age: 48, active: false}

//merge (añade al primer objeto variables que no tiene de los siguientes)
const extra = { surname: "Doe" };
console.log(_.merge(user, extra)); // {name: "Mika", age: 48, active: false, surname: "Doe"}

// API Function

//curry (permite currificar una función)
const send = (sender, receiver, message) => `${sender} says to ${receiver}: ${message}`;
const curriedSend = _.curry(send);
const anaSaysTo = curriedSend("Ana");
console.log(anaSaysTo("Pepe", "Hello!"));
const pepeSaysTo = curriedSend("Pepe");
console.log(pepeSaysTo("Ana", "How are you?"));
const anaSaysToEva = curriedSend("Ana", "Eva");
console.log(anaSaysToEva("Good morning"));

//partial (permite crear una aplicación parcial)
const anaSaysToPepe = _.partial(send, "Ana", "Pepe");
console.log(anaSaysToPepe("Good afternoon"));

//overEvery (agrupar múltiples predicados y decirnos si el argumento que le estamos pasando cumple todos los predicados)
const isEven = (n) => n % 2 === 0;
const isGreaterThan10 = (n) => n > 10;
const checkNumber = (n) => _.isNumber(n) && isEven(n) && isGreaterThan10(n);
const checkNumber2 = _.overEvery([_.isNumber, isEven, isGreaterThan10]);
console.log(checkNumber(30), checkNumber(8));
console.log(checkNumber2(12), checkNumber2(8));