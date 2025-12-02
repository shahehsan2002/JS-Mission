// var let const
// declaration and initialization
var name = "John";
let age = 30;
const country = "USA";  
console.log(name, age, country);


// Scope (global, function, block)
var x = 10; // Global scope
function myFunction() {
    let y = 20; // Function scope
    if (true) {
        var z = 30; // Block scope
    }
}
