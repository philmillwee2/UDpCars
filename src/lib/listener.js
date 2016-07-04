"use strict";

const {createSocket} = require("dgram");

function start(callback) {
  this.socket.bind(5606);
  callback();
}

function stop(callback) {
  this.socket.close();
  callback();
}

function createListener() {
  let listener = {
    socket: createSocket("udp4"),
    messageQueue: [],
    packetQueue: [],
    start: start,
    stop: stop
  };

  return listener;
}

module.exports = {
  createListener: createListener
};
