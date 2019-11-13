import { values } from './values';

const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

function average(sum, value, index, array) {
    if (index === array.length - 1) {
        sum = sum + value;
        return sum / array.length;
    }
    return sum + value;
}

function fromNumberToText(value) {
    if (value == 10) {
        return "Matrícula de Honor";
    } else if (value >= 9) {
        return "Sobresaliente";
    } else if (value >= 7) {
        return "Notable";
    } else if (value >= 6) {
        return "Bien";
    } else if (value >= 5) {
        return "Suficiente";
    } else if (value >= 4) {
        return "Insuficiente";
    } else {
        return "Muy deficiente";
    }
}

function printAverage(classResults) {
    var notas = values(classResults);
    var avg = notas.reduce(average);
    return fromNumberToText(avg);
}

console.log(printAverage(eso2o));