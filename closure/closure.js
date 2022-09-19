function outer() {
    let counter = 0;
    function incrementCounter() {
        counter = counter + 1;
        return counter;
    }
    return incrementCounter;
}
const increment = outer();
let count1 = increment();
let count2 = increment();
let count3 = increment();

console.log(count1, count2, count3);