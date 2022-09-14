function outer() {
    let counter = 0;
    function incrementCounter() {
        counter = counter + 1;
        return counter;
    }
    return incrementCounter;
}
const counter1 = outer();// counter = 0
let count1 = counter1(); // counter = 1 
const counter2 = outer();// counter = 0
let count2 = counter2(); // counter = 1