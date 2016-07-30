"use strict";

const {join} = require("path");
const {createListener} = require("./src/lib/listener");
const {sneak} = require("./src/lib/packet");
const es = require("./src/lib/elasticsearch");

const server = createListener();

server.socket.on("listening", function() {
  const properties = server.socket.address();
  console.log("Server listening on " +
    properties.address + ":" + properties.port);
});

server.start(function() {
  console.log("Service started successfully");
});

server.socket.on("message", function(clientMsg) {
  sneak(clientMsg, function(packet) {
    if(packet.header.sPacketType === 0) {
      es.loadTelemetry(packet, null);
      console.log(packet.data);
    }
  });
});
