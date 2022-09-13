function outter() {
    var name = "outter";
    function inner() {
        var name = "inner";
        function deep() {
            var name = "deep";
        }
        deep(); // Last on invoked -- First one popped
    }
    inner(); // Second on both
}
outter(); // First one invoked -- Last one popped