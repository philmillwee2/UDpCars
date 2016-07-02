"use strict";

const {join} = require("path");
const {assert} = require("chai");
const dgram = require("dgram");

const {listener} = require(join(__dirname, "../lib/listener"));

describe("listener module", function() {
  const server = listener(processMessage);

  let queue = [];

  function processMessage(clientMsg) {
    queue.push(clientMsg.toString());
  }


  it("should return 0.0.0.0 for server address", function(done) {
    const properties = server.address();
    assert.equal(properties.address, "0.0.0.0");
    done();
  });

  it("should return 5606 for server port", function() {
    const properties = server.address();

    assert.equal(properties.port, 5606);
  });

  it("should return a valid message", function(done) {
    const client = dgram.createSocket("udp4");

    client.send(Buffer.from("This is a valid message"),
      5606, "localhost", function(err) {
        server.on("message", function() {
          assert.equal(queue.shift(), "This is a valid message");
          done();
        });
      });
  });
});
