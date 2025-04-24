let car1 = {
    color: 'Red',
    company: 'Ferrari',
};

let car2 = {
    color: 'Blue',
    company: 'BMW',
};

let car3 = {
    color: 'White',
    company: 'Mercedes',
};

function purchaseCar(currency, price) {
    console.log(
        `I have purchased ${this.color} - ${this.company} car for ${currency}${price} `
    );
};

Function.prototype.myCall = function (currentContext = {}, ...arg) {
    if (typeof this !== 'function') {
        throw new Error(this + "it's not callable");
    }
    currentContext.fn = this;
    currentContext.fn(...arg);
};
purchaseCar.myCall(car3, '₹', '60,00,000');