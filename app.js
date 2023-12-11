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
