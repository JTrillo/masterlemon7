function clone(source) {
    var cloned = {};
    for (var i in source) {
        cloned[i] = source[i];
    }
    return cloned;
}

function merge(source, target) {
    var merged = clone(target);
    for (var i in source) {
        merged[i] = source[i];
    }
    return merged;
}

var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

console.log(merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}