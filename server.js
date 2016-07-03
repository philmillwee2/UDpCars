"use strict";

const {join} = require("path");
const {createSocket} = require("dgram");
const {start, stop} = require(join(__dirname, "src/lib/socket"));

let server = {
  status: false,
  socket: createSocket("udp4"),
  messageQueue: [],
  packetQueue: []
};

start(server, function() {
  if (global.testing === undefined) {
    console.log("* [UDpCars] Service starting");
  }
});

process.on("SIGINT", function() {
  console.log("\n");
  stop(server, function() {
    if (global.testing === undefined) {
      console.log("* [UDpCars] Service stopping");
    }
  });
});
