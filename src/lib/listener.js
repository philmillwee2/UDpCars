"use strict";

const dgram = require("dgram");

function listener(processMessage) {
  const server = dgram.createSocket("udp4");

  server.on("message", function(clientMsg, clientHost) {
    if(typeof(processMessage) === "function") {
      processMessage(clientMsg);
    } else {
      server.close();
    }
  });

  server.on("listening", function() {
    const properties = server.address();
    console.log("Service started and listening on "
      + properties.address + ":" + properties.port);
  });

  server.bind(5606);

  return server;
};

module.exports = {
  listener: listener
};
