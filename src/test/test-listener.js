"use strict";

const {join} = require("path");
const {assert} = require("chai");
//const dgram = require("dgram");

// TODO: remove util after testing
const {inspect} = require("util");

const {listener} = require(join(__dirname, "../lib/listener"));

describe.skip("listener module", function() {
  let server = listener();

  it("should return 0.0.0.0 for server address", function() {
    assert.equal(properties.address, "0.0.0.0");
  });

  it("should return 5606 for server port", function() {
    assert.equal(properties.port, 5606);
  });

  it("should return a valid message", function() {
    assert.equal(message, "This is a valid message");
  });
});
