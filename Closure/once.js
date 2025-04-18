const once = (func, context) => {
    let ran;
    let called = false;

    return function (...args) {
        if (!called) {
            called = true;
            ran = func.apply(context || this, args);
        }
        return ran;
    }
}

const hello = once(() => console.log("test"));

hello(); // prints "test"
hello(); // does nothing
hello(); // does nothing
