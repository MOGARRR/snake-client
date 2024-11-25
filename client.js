const {IP,PORT1,PORT2} = require('./constants'); // hardcoded variables from separate file
const net = require("net"); // grabs npm net package


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
    conn1.write(`Name: AA`); // sends server username
  });
  // interpret incoming data as text
  conn1.setEncoding("utf8"); // translates raw data to human text
  conn1.on('data', (data) => { // listens for data from server and logs it to client console
    console.log("Server:",data);
  });

  conn2.setEncoding('utf8'); // same as above but for second server
  conn2.on('data', (data) => {
    console.log('Server:', data);
  });

  return conn1; // only returns object for inputs. conn2 just needs to get data from server, not send any.
};
module.exports = connect;