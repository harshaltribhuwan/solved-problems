Array.prototype.myFilter = function (cb) {
    let temp = []

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) { temp.push(this[i]) }
    }

    return temp;
}



const data = [3, 4, 5, 6, 7]

const result = data.myFilter(d => {
    return d > 4
})

console.log(result)
