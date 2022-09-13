let scope = "global scope";
function checkscope() {
    let scope = "local scope";
    return scope;
}
checkscope() // => "local scope"