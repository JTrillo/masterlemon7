function reverseText(text) {
    return text.split(" ").reverse().join(" ");
}

var text = "Uno dos tres";
console.log(reverseText(text));