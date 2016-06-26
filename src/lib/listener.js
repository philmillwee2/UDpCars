"use strict";

const dgram = require("dgram");

function listener() {
  const server = dgram.createSocket("udp4");

  console.log("AAAA");

  server.on("message", function(clientMsg, clientHost) {
    console.log("Messsage received");
  });

  console.log("BBBB");

  server.on("listening", function() {
    console.log("EEEE");
    const properties = server.address();
    console.log("Service started and listening on "
      + properties.address + ":" + properties.port);
    console.log("FFFF");
  });

  console.log("CCCC");

  server.bind(5606);

  console.log("DDDD");

  if(server) {
    const properties = server.address();
  }

  return server;
};

module.exports = {
  listener: listener
};
