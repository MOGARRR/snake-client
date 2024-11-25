const IP = 'localhost';
const PORT1 = 50541; // port for game input connection
const PORT2 = 50542; // port for server message connection
const movement = {w: "Move: up", a: "Move: left", s: "Move: down", d: "Move: right"}; // object with movement commnands as values
const messages = {h:'*Hissy fit noises*', j:'hissterical', k: 'boop', u: 'sssssorry'}; // same as movement but instead with messages


module.exports = {
  IP,
  PORT1,
  PORT2,
  movement,
  messages
};