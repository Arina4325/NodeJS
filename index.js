//const chalk = require('chalk');
//const text = require ('./data.js'); // module connection (my module)

//console.log (chalk.blue("Hello NodeJS"));
//console.log (chalk.green(text));



//create server localhost:3000
const http = require('http');

const server = http.createServer ((req, res)=> {
    res.end("<h1>Hello, NodeJS</h1>");

})

server.listen(3000, ()=>{
    console.log('server has been strted')
})
