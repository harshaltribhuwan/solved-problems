
function myMemoise(func, context) {
    const res = {}
    return function (...args) {
        var argsCache = JSON.stringify(args);
        if (!res[argsCache]) {
            res[argsCache] = func.call(context || this, ...args);
        }

        return res[argsCache]

    }
}

const clumsyProduct = (num1, num2) => {

    for (let i = 0; i <= 100000000; i++) { }

    return num1 * num2
}

// without memoise caching

console.time("first")
console.log(clumsyProduct(4, 5))
console.timeEnd('first')


console.time("second")
console.log(clumsyProduct(4, 5))
console.timeEnd('second')

// with memoise

const memoisedClumstProduct = myMemoise(clumsyProduct);

console.time("first memoised")
console.log(memoisedClumstProduct(4, 5))
console.timeEnd('first memoised')


console.time("second memoised")
console.log(memoisedClumstProduct(4, 5))
console.timeEnd('second memoised')
