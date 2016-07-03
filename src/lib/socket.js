"use strict";

function start(server, callback) {
  server.socket.on("listening", function() {
    if (global.testing === undefined) {
      console.log("*** [socket] started successfully");
    }
  });

  server.socket.on("close", function() {
    if (global.testing === undefined) {
      console.log("*** [socket] stopped successfully");
    }
  });

  server.socket.bind(5606);
  server.status = true;
  callback();
}

function stop(server, callback) {
  server.socket.close();
  server.status = false;
  callback();
}

module.exports = {
  start: start,
  stop: stop
};
