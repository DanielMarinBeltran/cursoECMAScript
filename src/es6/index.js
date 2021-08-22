// Functions without using ECMAScript.

function newFunction(name, age, country){
    var name = name || 'Daniel';
    var age = age || '23';
    var country = country || 'CO'
    console.log(name, age, country);
}

// Using ECMAScript.

function newFunction2(name = 'Daniel', age = 23, country = 'CO'){
    console.log(name, age, country);
}

newFunction2();  // In this way we will use the data as default.
newFunction2('Ricardo', 23, 'CO'); // In this way we will give the data that we want to use.


// Concatenate before ECMAScript

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// now with ECMAScript

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);



