
Array.prototype.myReduce = function (cb, initialValue) {
    var accumalator = initialValue

    for (let i = 0; i < this.length; i++) {
        accumalator = accumalator ? cb(accumalator, this[i], i, this) : this[i]

    }
    return accumalator
}

const data = [3, 4, 5, 6, 7]

const result = data.myReduce((acc, curr) => {
    return acc + curr
})

console.log(result)