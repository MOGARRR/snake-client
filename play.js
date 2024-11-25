const connect = require('./client');
const setupInput = require('./input');

console.log("Connecting ...");

setupInput(connect()); // runs connection and returns object to input so server can read inputs
