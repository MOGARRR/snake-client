const {IP,PORT1,PORT2} = require('./constants');
const net = require("net"); // grabs npm net package
const args = process.argv;
args.splice(0,2);

const connect = function() {
  const conn1 = net.createConnection({ // creates client connection object to connext
    host: IP,
    port: PORT1
  });
  const conn2 = net.createConnection({ // creates client for open server to get multiplayer info
    host: IP,
    port: PORT2,
  });

  conn1.on('connect', () => { // on connection it will log success and users name
    console.log('Successfully connected to game server!');
    conn1.write(`Name: ABA`);
  });
  conn2.setEncoding('utf8');
  conn2.on('data', (data) => {
    console.log('Server:', data);
  });

  // interpret incoming data as text
  conn1.setEncoding("utf8"); // translates raw data to human text
  conn1.on('data', (data) => { // listens for data from server and logs it to client console
    console.log("Server:",data);
  });

  return conn1;
};
module.exports = connect;