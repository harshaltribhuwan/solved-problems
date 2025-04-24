
Function.prototype.myApply = function (currentContext = {}, arg = []) {
    if (typeof this !== 'function') {
        throw new Error(this + "it's not callable");
    }
    if (!Array.isArray(arg)) {
        throw new TypeError('CreateListFromArrayLike called on non-object')
    }
    currentContext.fn = this;
    currentContext.fn(...arg);

};
purchaseCar.myApply(car2, ['₹', '50,00,000']);