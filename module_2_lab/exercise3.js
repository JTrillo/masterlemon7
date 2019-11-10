// CLONE MERGE

// clone function
function clone(source) {
    let theClone = {}
    for (i in source) {
        theClone[i] = source[i];
    }
    return theClone;
}

// merge function
function merge(a, b) {
    let theMerge = clone(b);
    for (i in a) {
        theMerge[i] = a[i];
    }
    return theMerge;
}


// Testing funcions
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

let theClone = clone(a);
console.log(theClone);

let theMerge = merge(a, b);
console.log(theMerge);