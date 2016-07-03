"use strict";

const {createSocket} = require("dgram");

let server = {
  status: false,
  socket: createSocket("udp4"),
  messageQueue: [],
  packetQueue: []
};

function start(callback) {
  server.socket.on("listening", function() {
    if (global.testing === undefined) {
      console.log("[UDpCars] Service starting");
    }
  });

  server.socket.on("close", function() {
    if (global.testing === undefined) {
      console.log("[UDpCars] Service stopping");
    }
  });

  server.socket.bind(5606, function() {
    if (global.testing === undefined) {
      console.log("[UDpCars] Service started successfully");
    }
  });

  callback(true);
}

function stop(callback) {
  server.socket.close(function() {
    if (global.testing === undefined) {
      console.log("[UDpCars] Service stopped successfully");
    }
  });
  callback(false);
}

start(function(status) {
  server.status = status;
});

process.on("SIGINT", function() {
  stop(function(status) {
    server.status = status;
  });
});

module.exports = {
  server: server,
  start: start,
  stop: stop
};
