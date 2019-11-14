function subsets(word) {
    var response = [];
    word.split("").forEach(function(element, index, array) {
        if (index !== 0) response.push(array.slice(index, array.length).join(""));
    });
    return response;
}

// Ejemplo
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]