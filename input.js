const net = require("net");
const {movement,messages} = require('./constants');
let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on('data', handleUserInput); // note name change from userInput to handleUserInput
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

const handleUserInput = function(key){
  if (movement[key]){ // if key is truthy 
    connection.write(movement[key]); // send key to server aka move
  }
  if (messages[key]){
    connection.write(`Say: ${messages[key]}`);
  }
  if(key === "\u0003"){
    process.exit();
  }
};

module.exports = setupInput;