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



// Before ECMAScript
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
+ "Abother line";

console.log(lorem);

// With ECMAScript
let lorem2 = `First line with ECMAScript
Second line with ECMAScript`

console.log(lorem2);


let person = {
    'name': 'Daniel',
    'age': 23,
    'country': 'CO',
}

//Before ECMAScript6

console.log(person.name, person.age);

// With ECMAScript6

let { name } = person;

console.log(name);


let team1 = ['Oscar', 'Daniel', 'Ricardo',];
let team2 = ['Valeria', 'Jesica', 'Camila',];


let education = ['David', ...team1, ...tram2];  //This is a new way to add elements from other.

console.log(education);


// Diferent kind of Scopes with var and let.
// var is global and let is block.
{
    var globalVar = 'Global var';
}

{
    let globalLet = 'Global Let'; 
    console.log(globalLet);
}
console.log(globalVar);


const a = 'b'; // We can not reassing a const.
a = 'a';
console.log (a); // ERROR.


let name = 'Daniel';
let age = 23;

// ECMAScript5

obj = { name: name, age: age};

// ECMAScript6+

obj2 = { name, age }
console.log(obj2);


// Arrow Functions

const names = [
    { name: 'Daniel', age: 23 },
    { name: 'Yesica', age: 27 }
];

let lisOfNames = names.map(function(item){
    console.log(item.name);
});

let ListOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {

};

const listOfNames4 = name => {

};

const square = num => num * num;

// Promises

const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if (true) {
            resolve('Hey!');
        }else {
            reject('Ups!!');
        }
    });
};

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hello'))
    .catch(error => console.los(error));



// classes, Modules and Generators

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

import { hello } from './module.js';

hello();


function* helloWorld (){
    if (true) {
        yield 'Hello, ';
    }
    if (true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);