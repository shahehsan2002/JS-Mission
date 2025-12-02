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

// Reassignment, redeclaration
name = "Shah"; // Reassignment
age = 23; // Reassignment
var name = "Ehsan"; // Redeclaration
// let age = 32; // Error: Identifier 'age' has already been declared
console.log(name, age);