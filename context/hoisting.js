catName("Pop");
function catName(name) {
    console.log(`My cat's name is ${name}`);//"My cat's name is Tiger"
}

console.log(name);//undefined
var name;
name = "Tamer"; //"Tamer"

console.log(status); //Uncaught ReferenceError: status is not defined
let status; // same behavior as let (ES6)
status = "alive"; //"alive"