//Variable para probar
const rectangles = [
    { width: 18, height: 2 },
    { width: 10, height: 9 },
    { width: 2, height: 4 },
    { width: 8, height: 3 }
];

// MAP
const getArea = ({ width, height }) => width * height;
// Ejemplo:
console.log(rectangles.map(getArea));

// FILTER
// predicate == (x) => boolean
const hasBigArea = (rectangle) => getArea(rectangle) > 50;
// Ejemplo:
console.log(rectangles.filter(hasBigArea));

// SOME (llamada 'any' en algunos lenguajes funcionales)
// Si algún elemento de la lista/array cumple el predicado devuelve un true. Si la lista/array es vacío devuelve false.
// Ejemplo:
console.log(rectangles.some(hasBigArea));

// EVERY
// Si todos los elementos de la lista/array cumplen el predicado devuelve un true. Si la lista/array es vacío devuelve true.
const hasEvenArea = (element) => getArea(element) % 2 === 0;
// Ejemplo:
console.log(rectangles.every(hasEvenArea));

// CONCAT
const shape1 = { width: 11, height: 2 };
const shape2 = { width: 22, height: 3 };
const otherShapes = [
    { width: 33, height: 4 },
    { width: 44, height: 5 }
];

console.log(otherShapes, otherShapes.concat(shape1, shape2));

// REDUCE (llamada 'fold' en algunos lenguajes funcionales)
// reducer === (acumulador, val) => acumulador
const sumAllAreas = (total, rectangle) => total + getArea(rectangle);
// Ejemplo:
console.log(rectangles.reduce(sumAllAreas, 0)); //reduce(reducer, valorInicial)

// REDUCERIGHT
// Lo mismo que reduce pero empezando del último elemento al primero de la lista/array
// Ejemplo:
const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(oneToTen.reduce((a, b) => a - b)); //-53
console.log(oneToTen.reduceRight((a, b) => a - b)); //-35