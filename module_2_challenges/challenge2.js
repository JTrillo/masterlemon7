const deepGet = (object, ...properties) => {
    if (properties.length === 0) {
        return object;
    } else if (properties.length === 1) {
        return object[properties[0]];
    } else {
        let [, ...tailProperties] = properties;
        return deepGet(object[properties[0]], ...tailProperties);
    }

}

const deepSet = (value, object, ...properties) => {
    if (properties.length === 0) {
        return;
    } else if (properties.length === 1) {
        object[properties[0]] = value;
        return object;
    } else {
        let [, ...tailProperties] = properties;
        if (object[properties[0]] !== undefined) {
            object[properties[0]] = deepSet(value, object[properties[0]], ...tailProperties);
        } else {
            object[properties[0]] = deepSet(value, {}, ...tailProperties);
        }
    }
}

const myObject = {
    a: 1,
    b: {
        c: null,
        d: {
            e: 3,
            f: {
                g: "bingo",
            }
        }
    }
};

/*console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject)); // {a: 1, b: {...}}*/

const myObjectSet = {};

deepSet(1, myObjectSet, "a", "b");
console.log(myObjectSet); // {a: { b: 1}}
deepSet(2, myObjectSet, "a", "c");
console.log(myObjectSet); // {a: { b: 1, c: 2}}
deepSet(3, myObjectSet, "a");
console.log(myObjectSet); // {a: 3}
deepSet(4, myObjectSet);
console.log(myObjectSet); // Do nothing // {a: 3}