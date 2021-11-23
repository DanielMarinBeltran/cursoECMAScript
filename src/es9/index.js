// ----------------------- Spread Operator

const obj = {
  name: 'Daniel',
  age: 23,
  country: 'COL'
};

let {name, ...all} = obj;
console.log(name, all);

// ------------------------ Propagation properties

const obj = {
  name: 'Daniel',
  age: 23
};

const obj1 = {
  ...obj,
  country:'COL'
};

console.log(obj1)

// ------------------------ Promise Finally

const helloWorld = () => {
  return new Promise ((resolve, reject) =>{
    (true)
      ? setTimeout(()=> {
        resolve ('Hello World'), 3000
      })
      : reject (new Error('Test Error'))
  });
};

helloWorld()
  .then (result =>console.log('result->', result))
  .catch (err => console.log('err->', err))
  .finally (()=>console.log('Finalizo'));

// -------------------------- Regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match =regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day);