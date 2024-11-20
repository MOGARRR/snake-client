const {IP,PORT} = require('./constants');
const net = require("net"); // grabs npm net package
const connect = function () {
  const conn = net.createConnection({ // creates client connection object
    host: IP,
    port: PORT,
  });

  conn.on('connect', () => { // on connection it will log success and users name
    console.log('Successfully connected to game server!');
    conn.write('Name: ABA');
  });

  // interpret incoming data as text
  conn.setEncoding("utf8"); // translates raw data to human text
  conn.on('data', (data) => { // listens for data from server and logs it to client console
    console.log("Server says:",data);
  });

  return conn;
};
module.exports = connect;