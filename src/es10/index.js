// ----- method flat ---------
// returns a matrix with a submatrix flatted

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

// ---------- flatMap -----------
// maps every element, then pass a function and flat it

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value,value*2]));

//----------- trim ---------

let hello = '          hello world';
console.log(hello);
console.log(hello.trimStart()); //Start

let hello ='hello world              ';
console.log(hello);
console.log(hello.trimEnd()); //End

// ------ Optional catch biding --------

try {

} catch /* (error) is not necessary anymore */ {

}

// ------- fromEntries ------
// arrays of objects

let entries= [["name", "Daniel"],["age", 23]];
console.log(Object.fromEntries(entries));

// -------- Symbol Object --------

let mySymbl = 'My symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);