function outer() {
    let counter = 0;
    function incrementCounter() {
        counter = counter + 1;
        return counter;
    }
    return incrementCounter;
}
const counter1 = outer();
let count1 = counter1();
const counter2 = outer();
let count2 = counter2();