import http from "http";
import app from "./app";
// const route = require("./app/models");

//Use system configuration for port or use 6001 by default.
const port = process.env.port || 3000;

//Create server with exported express app
const server = http.createServer(app);
// models.sequelize.sync().then(function () {
//   server.listen(port);
//   // server.on('error', onError);
// });

server.listen(port, () => {
  console.log('server starting at', port);
});
