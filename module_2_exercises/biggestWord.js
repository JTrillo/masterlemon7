function biggestWord(phrase) {
    var words = phrase.split(" ");
    var biggest = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > biggest.length) biggest = words[i];
    }
    return biggest;
}

// Ejemplo
console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"