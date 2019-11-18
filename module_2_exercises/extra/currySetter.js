const set = (obj, propertyName, newValue) => {
    let {...newObj } = obj;
    newObj[propertyName] = newValue;
    return newObj;
};

const julia = { name: 'Julia', surname: 'Álvarez', age: 19 };
const updatedJulia = set(julia, 'age', 25);
console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false


const setCurried = (propertyName) => {
    return (obj, newValue) => {
        let {...newObj } = obj;
        newObj[propertyName] = newValue;
        return newObj;
    };
};

const setName = setCurried('name');
const setSurname = setCurried('surname');
const setAge = setCurried('age');

const julia2 = { name: 'Julia', surname: 'Álvarez', age: 19 };
console.log(setName(julia2, 'Ana')); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurname(julia2, 'González')); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia2, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }