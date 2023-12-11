const http = require('http');
// const createServer = require('http').createServer;

const appServer = http.createServer((req, res) => {
    res.end('Hello World...\n');
})

// const appServer = createServer((req, res) => {
//     res.end('Hello World...\n');
// })

appServer.listen(8000, ()=> {
    console.log('Server is running on port 8000');
})


const theOneFunc = (greeting) => {
    console.log(greeting);
}

setTimeout(theOneFunc, 4 * 1000, 'Hello after 4 sec');
setTimeout(theOneFunc, 8 * 1000, 'Hello after 8 sec');


// setInterval(theOneFunc, 1 * 1000, 'Hello every 2 sec');

let counter = 0;

const intervalId = setInterval(() => {
    console.log('Hello World');
    counter += 1;

    if(counter === 5) {
        console.log('Done');
        clearInterval(intervalId);
    }
} , 1000);



//destructuring
// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;


const {PI, E, SQRT2} = Math;


//rest operator
const [first, ...restOfItems] = [10, 20, 30, 40];

const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastName: 'Doe'
}

const {temp1, temp2, ...person} = data;


const newArray = [...restOfItems];

const newObject = {
    ...person
}

