function values(obj) {
    var values = [];
    for (let i in obj) {
        if (obj[i].prototype === undefined) values.push(obj[i]);
    }
    return values;
}

// Ejemplo:
//console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]

// --- CHALLENGE ------------------------------------------------------------------------

// Evita añadir las propiedades heredadas en caso de ser instancia de una clase:
// Ejemplo:
function Person(name) {
    this.name = name;
}

Person.prototype.walk = function() {
    console.log("I'm walking");
};

var john = new Person("John");
//console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]

export { values };