import _ from 'lodash/fp';

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const doubleIt = (x) => x * 2;
const doubleAll = _.map(doubleIt);
console.log(doubleAll(arr), doubleAll(arr2));