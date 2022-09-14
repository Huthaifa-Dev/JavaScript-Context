function once(func) {
    let called;
    return function (...args) {
        if (!called) {
            called = func(...args)
        }
        return called;
    }
}
function temp(value) {
    //some code here...
}
const runMeOnce = once(temp);
runMeOnce('some value'); // executed
runMeOnce('some value'); // returned same value!