// quesion sum(2)(4)(5) want to do addition of this

function sum (a) {
    return function (b) {
        return  function (c) {
            return a + b + c
        }
    }
}

// with arrow function

// const sum = a => b => c => a + b + c;


console.log(sum(2)(4)(5))