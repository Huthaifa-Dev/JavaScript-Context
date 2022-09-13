let val = 7
function createAdder() {
    function addNumbers(a, b) {
        let ret = a + b
        return ret
    }
    return addNumbers
}
let adder = createAdder()
let sum = adder(val, 8)
