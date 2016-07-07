"use strict";

const {join} = require("path");
const {expect} = require("chai");

const {createListener} = require(join(__dirname, "../lib/listener"));

describe("listener module", function() {
  describe("socket state", function() {
    xit("should have a correct bind state (1)", function(done) {
      expect(server.socket).to.have.property("_bindState")
        .and.to.equal(1);
      done();
    });

    xit("should have a correct address (0.0.0.0)", function(done) {
      expect(properties.address).to.equal("0.0.0.0");
      done();
    });

    xit("should have been bound to port 5606", function(done) {
      expect(properties.port).to.equal(5606);
      done();
    });
  });

  describe("message events", function() {
    xit("should receive a message", function(done) {
      expect(server.messageQueue.length).to.have.length(1);
      done();
    });
  });

  describe("socket teardown", function() {
    xit("should have a server status of false after teardown", function(done) {
      expect(server.status).to.be.false;
      done();
    });
  });
});
