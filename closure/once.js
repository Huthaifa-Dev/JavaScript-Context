function outer(func) {
    let called;
    return function (...args) {
        if (called) {
            return 'You runned me before';
        }
        called = true;
        return func(...args)
    }
}
function temp(value) {
    //some code here...
}

const runMeOnce = outer(temp);
runMeOnce('some value'); // executed without any problem
runMeOnce('some value'); // oops! returned 'You runned me before'!