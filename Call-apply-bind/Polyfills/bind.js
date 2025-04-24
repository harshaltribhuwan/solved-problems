
Function.prototype.myBind = function (currentContext = {}, ...arg) {
    if (typeof this !== 'function') {
        throw new Error(this + "cannot be bound as it's not callable");
    }
    currentContext.fn = this;
    return function () {
        return currentContext.fn(...arg);
    };
};

const initPurchaseBmw = purchaseCar.myBind(car1, '₹', '1,00,00,000');
initPurchaseBmw();