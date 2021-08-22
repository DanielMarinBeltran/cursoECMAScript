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


const helloWorld =() =>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=>resolve('helloWorld'),3000)
        : reject(new Error ('Test Error'))
    })
}

const helloAsync =async() =>{
    const hello = await helloWorld();
    console.log(hello);

}
helloAsync();

const another =async() =>{
    try{
        const hello = await helloWorld();
        console.log(hello);

    } catch (error){
        console.log(error);
        
    }
}

another();