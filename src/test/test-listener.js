"use strict";

const {join} = require("path");
const {assert} = require("chai");

const {listener} = require(join(__dirname, "../lib/listener"));

describe("listener module", function() {
  let server = listener();

  it("should return 0.0.0.0 for server address", function() {
    return new Promise(function(done) {
      const properties = server.address();
      assert.equal(properties.address, "0.0.0.0");
      done();
    });
  });

  it("should return 5606 for server port", function() {
    const properties = server.address();
    assert.equal(properties.port, 5606);
  });

  xit("should return a valid message", function() {
    assert.equal(message, "This is a valid message");
  });
});
