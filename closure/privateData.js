function makeCounter() {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    }
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); /* 0 */

counter1.increment();
counter1.increment();

console.log(counter1.value()); /* 2 */
counter1.decrement();
console.log(counter1.value()); /* 1 */

console.log(counter2.value()); /* 0 */