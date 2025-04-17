
Array.prototype.myMap = function (cb) {
    let temp = []

    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }
    return temp
}
const data = [3, 4, 5, 6, 7]

const result = data.myMap((d) => {
    return d * 2
})

console.log(result)