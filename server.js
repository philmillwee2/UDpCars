"use strict";

const {join} = require("path");
const {createListener} = require(join(__dirname, "src/lib/listener"));

const server = createListener();

server.start(function() {
  console.log("Service started successfully");
});

process.on("SIGINT", function() {
  console.log();
  server.stop(function() {
    console.log("Service stopped successfully");
  });
});
