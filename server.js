"use strict";

const {join} = require("path");
const {createListener} = require(join(__dirname, "src/lib/listener"));
const {peek} = require(join(__dirname, "src/lib/packet"));

const server = createListener();

server.socket.on("listening", function() {
  const properties = server.socket.address();
  console.log("Server listening on " +
    properties.address + ":" + properties.port);
});

server.start(function() {
  console.log("Service started successfully");
});

server.socket.on("message", function(clientMsg, clientHost) {
  console.log(peek(clientMsg));
});
