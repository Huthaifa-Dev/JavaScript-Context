function debounce(callback, interval) {

    let counter = 0;
    let hasRan = false;
    function closureFn() {
        let id = undefined;
        if (!hasRan) {
            ///this is the first run
            id = setInterval(() => {
                counter++
            }, 1);
            hasRan = true;
            return callback();
        } else {
            //for subsequent runs
            if (counter < interval) {
                // Not enough time has elapsed
                counter = 0;
                clearInterval(id);
                id = setInterval(() => counter++, 1);
                return undefined;
            } else {
                //Enough time has elapsed
                counter = 0;
                clearInterval(id);
                id = setInterval(() => counter++, 1);
                return callback();
            }
        }
    }
    return closureFn;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
function giveHi() { return 'hi'; }
const giveHiSometimes = debounce(giveHi, 3000);
console.log(giveHiSometimes()); // -> 'hi'
setTimeout(function () { console.log(giveHiSometimes()); }, 2000); // -> undefined
setTimeout(function () { console.log(giveHiSometimes()); }, 4000); // -> undefined
setTimeout(function () { console.log(giveHiSometimes()); }, 8000); // -> 'hi'

