const expensiveFunction = () => {
    console.log("Una única llamada");
    return 3.1415;
}
const memoize = (func:any) => {
    let memory = undefined;
    return () => {
        if (memory !== undefined) {
            return memory;
        } else {
            memory = func();
            return memory;
        }
    }
}
const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415