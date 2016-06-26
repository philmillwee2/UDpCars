"use strict";

const {join} = require("path");
const {assert} = require("chai");
const dgram = require("dgram");

const listener = require(join(__dirname, "../lib/listener"));

describe("listener module", function() {
  const server = listener();

  it("shoud return 0.0.0.0 for server address", function() {
    assert.equal(properties.address, "0.0.0.0");
  });

  it("should return 5606 for server port", function() {
    assert.equal(properties.port, 5606);
  });

  it("should return a valid message", function() {
    assert.equal(message, "This is a valid message");
  });
});
