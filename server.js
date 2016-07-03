"use strict";

const {createSocket} = require("dgram");

let server = {
  status: false,
  socket: createSocket("udp4"),
  messageQueue: [],
  packetQueue: []
};

function start(server, callback) {
  server.socket.bind(5606);
  callback(true);
}

function stop(server, callback) {
  server.socket.close();
  callback(false);
}

server.socket.on("listening", function() {
  if (global.testing === undefined) {
    console.log("[UDpCars] Service started successfully");
  }
});

server.socket.on("close", function() {
  if (global.testing === undefined) {
    console.log("[UDpCars] Service stopped successfully");
  }
});

start(server, function(status) {
  if (global.testing === undefined) {
    console.log("[UDpCars] Service starting");
  }
  server.status = status;
});

process.on("SIGINT", function() {
  stop(server, function(status) {
    if (global.testing === undefined) {
      console.log("[UDpCars] Service stopping");
    }
    server.status = status;
  });
});

module.exports = {
  server: server,
  start: start,
  stop: stop
};
