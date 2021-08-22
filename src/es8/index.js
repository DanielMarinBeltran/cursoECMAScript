// entries

const data = {
    frontend: 'Daniel',
    backend: 'Isabel',
    design: 'Ana',
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// values

const data = {
    frontend: 'Daniel',
    backend: 'Isabel',
    design: 'Ana',
};

const values = Object.values(data);
console.log(values);
console.log(values.length);

// Pad

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12,'hi'));
